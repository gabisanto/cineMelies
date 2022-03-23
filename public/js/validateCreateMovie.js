const movie = document.querySelector('#movieName');
const link = document.querySelector('#ytLink');
const description = document.querySelector('#movieDesc');
const category = document.getElementsByName('category_id');
const restriction = document.getElementsByName('restriction_id');

const form = document.querySelector('#creationForm');

const isRequired = value => value === '' ? false : true;

const isLonger = (length, min) => length < min ? false : true;

const isLength = (length, min, max) => length < min || length > max ? false : true;

const isYouTube = (url) => {
    if (url) {
        var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if (url.match(regExp)) {
            return true;
        }
    }
    return false;
}

const isChecked = (value) => {

        for(var i=0; i<value.length;i++){
            if(value[i].checked == true){
                return true;    
            }
        }
        return false
}

const checkName = () => {
    let valid = false;

    const min = 2


    const name = movie.value.trim();

    if (!isRequired(name)) {
        showError(movie, 'El nombre no puede estar vacío.');
    } else if (!isLonger(name.length, min)) {
        showError(movie, `El nombre debe tener al menos dos caracteres.`)
    } else {
        showSuccess(movie);
        valid = true;
    }
    return valid;
};

const checkLink = () => {
    let valid = false;

    const yt = link.value.trim();

    if (!isRequired(yt)) {
        showError(link, 'El link no puede estar vacío.');
    } else if (!isYouTube(yt)) {
        showError(link, `El link debe ser válido.`)
    } else {
        showSuccess(link);
        valid = true;
    }
    return valid;
};

const checkDescription = () => {
    let valid = false;

    const min = 5
    const max = 600

    const desc = description.value.trim();

    if (!isRequired(desc)) {
        showError(description, 'La descripción no puede estar vacía.');
    } else if (!isLength(desc.length, min, max)) {
        showError(description, `La descripción debe tener entre 5 y 600 caracteres.`)
    } else {
        showSuccess(description);
        valid = true;
    }
    return valid;
};

const checkCategory = () => {
    let valid = false;
    if (!isChecked(category)){
        showErrorCheck("#category_id",'Debe elegir una categoría.');
    } else {
        valid = true
    }
    return valid;
}

const checkRestriction = () => {
    let valid = false;
    if (!isChecked(restriction)){
        showErrorCheck('#restriction_id','Debe elegir la restricción de edad.');
    } else {
        valid = true
    }
    return valid;
}

const fileValidation = () => {
    let valid = false;
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        const error = fileInput.parentElement.parentElement.querySelector('small');
        error.textContent = "Solo se admiten archivos .jpeg .jpg .png .gif.";
        fileInput.value = '';
    }else{
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
        valid = true
    }
    return valid;
}

const showError = (input, message) => {
    // atrapa al fieldset
    const formField = input.parentElement.parentElement;
    // agrega la clase error
    formField.classList.remove('success');
    formField.classList.add('error');

    // agrega el mensaje
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showErrorCheck = (input,message) => {
    const formField = document.querySelector(input)
    // atrapa al small
    const error = formField.querySelector('small');
    // agrega el mensaje
    error.textContent = message;
};

const showSuccess = (input) => {
    // atrapa al fieldset
    const formField = input.parentElement.parentElement;

    // elimina la clase error
    formField.classList.remove('error');
    formField.classList.add('success');

    // esconde el mensaje de error
    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', function (e) {
    

    // validate fields
    let isNameValid = checkName(),
        isLinkValid = checkLink(),
        isDescriptionValid = checkDescription(),
        isCategoryChecked = checkCategory(),
        isRestrictionChecked = checkRestriction(),
        isFileValid = fileValidation()
        
        
    let isFormValid = isNameValid && isLinkValid && isDescriptionValid && isCategoryChecked && isRestrictionChecked && isFileValid

    // si todo es válido se registra
    if (isFormValid) {
        form.submit()
    } else {
        // detiene la acción por defecto
    e.preventDefault();
    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancela el timer anterior
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // nuevo timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'movieName':
            checkName();
            break;
        case 'ytLink':
            checkLink();
            break;
        case 'movieDesc':
            checkDescription();
            break;          
    }
}));