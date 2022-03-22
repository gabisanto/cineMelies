const productName = document.querySelector('#productName');
const productDesc = document.querySelector('#productDesc');
const productPrice = document.querySelector('#productPrice');
const type = document.getElementsByName('type_id');


const form = document.querySelector('#creationForm');

const isRequired = value => value === '' ? false : true;

const isLonger = (length, min) => length < min ? false : true;

const isLength = (length, min, max) => length < min || length > max ? false : true;

const isChecked = (value) => {

        for(var i=0; i<value.length;i++){
            if(value[i].checked == true){
                return true;    
            }
        }
        return false
}

// const isNumber = (str) => {
//     const re = new RegExp(/^(0|[1-9]\d*)$/)
//     return re.test(str);
// }

const isNumber = (str) => {
    return Number.isInteger(Number(str)) && Number(str) >= 0

}

const checkType = () => {
    let valid = false;
    if (!isChecked(type)){
        showErrorCheck("#type_id",'Debe elegir un tipo de producto.');
    } else {
        valid = true
    }
    return valid;
}

const checkName = () => {
    let valid = false;

    const min = 2
    const max = 50


    const name = productName.value.trim();

    if (!isRequired(name)) {
        showError(productName, 'El nombre no puede estar vacío.');
    } else if (!isLength(name.length, min,max)) {
        showError(productName, `El nombre debe tener entre 2 y 50 caracteres.`)
    } else {
        showSuccess(productName);
        valid = true;
    }
    return valid;
};

const checkDescription = () => {
    let valid = false;

    const min = 5
    const max = 600

    const desc = productDesc.value.trim();

    if (!isRequired(desc)) {
        showError(productDesc, 'La descripción no puede estar vacía.');
    } else if (!isLength(desc.length, min, max)) {
        showError(productDesc, `La descripción debe tener entre 5 y 600 caracteres.`)
    } else {
        showSuccess(productDesc);
        valid = true;
    }
    return valid;
};

const checkPrice = () => {
    let valid = false;

    const min = 1
    const max = 5


    const price = productPrice.value.trim();

    if (!isRequired(price)) {
        showError(productPrice, 'El precio no puede estar vacío.');
    } else if (!isLength(price.length, min,max)) {
        showError(productPrice, `El precio debe tener entre 1 y 5 caracteres.`)
    } else if (!isNumber(price)){
        showError(productPrice, `El precio debe ser un número.`)
    } else {
        showSuccess(productPrice);
        valid = true;
    }
    return valid;
};

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
    // detiene la acción por defecto
    e.preventDefault();

    // validate fields
    let isTypeChecked = checkType(),
        isNameValid = checkName(),
        isDescriptionValid = checkDescription(),
        isPriceValid = checkPrice(),
        isFileValid = fileValidation()
        
        
    let isFormValid = isTypeChecked && isNameValid && isDescriptionValid && isPriceValid && isFileValid 

    // si todo es válido se registra
    if (isFormValid) {
        form.submit()
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
        case 'productName':
            checkName();
            break;
        case 'productDesc':
            checkDescription();
            break;
        case 'productPrice':
            checkPrice();
            break;
       
    }
}));