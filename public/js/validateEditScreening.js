const hour = document.querySelector('#scrHour');
const screen = document.getElementsByName('screen_id');
const day = document.getElementsByName('day');
const language = document.getElementsByName('language_id');

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

const isValidHour = (value) => {
    const re = /^(20|21|22|23|[0-1]\d)[0-5]\d$/
    return re.test(value);
}



const checkScreen = () => {
    let valid = false;
    if (!isChecked(screen)){
        showErrorCheck("#screen",'Debe elegir una sala.');
    } else {
        valid = true
    }
    return valid;
}

const checkDay = () => {
    let valid = false;
    if (!isChecked(day)){
        showErrorCheck('#day','Debe elegir un día.');
    } else {
        valid = true
    }
    return valid;
}

const checkLanguage = () => {
    let valid = false;
    if (!isChecked(language)){
        showErrorCheck('#language_id','Debe elegir un idioma.');
    } else {
        valid = true
    }
    return valid;
}

const checkHour = () => {
    let valid = false;

    


    const hourValue = hour.value.trim();

    if (!isRequired(hourValue)) {
        showError(hour, 'La hora no puede estar vacía.');
    } else if (!isValidHour(hourValue)) {
        showError(hour, `Ingrese una hora válida en formato HHMM.`)
    } else {
        showSuccess(hour);
        valid = true;
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
    let isScreenChecked = checkScreen(),
        isDayChecked = checkDay(),
        isLanguageChecked = checkLanguage(),
        isHourValid = checkHour()
        
        
    let isFormValid = isScreenChecked && isDayChecked && isLanguageChecked && isHourValid

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
        case 'screen':
            checkScreen();
            break;
        case 'day':
            checkDay();
            break;
        case 'scrHour':
            checkHour();
            break; 
        case 'language_id':
            checkLanguage();
            break;          
    }
}));