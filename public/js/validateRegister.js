const fullName = document.querySelector('#nombreCompleto');
const fullEmail = document.querySelector('#email');
const fullPass = document.querySelector('#confirm');
const fullDocument = document.querySelector('#document');
const fullBirth = document.querySelector('#birthDate');


const form = document.querySelector('#register-form');

const checkUsername = () => {

    let valid = false;

    const min = 2


    const username = fullName.value.trim();

    if (!isRequired(username)) {
        showError(fullName, 'El nombre de usuario no puede estar vacío.');
    } else if (!isLonger(username.length, min)) {
        showError(fullName, `El nombre de usuario debe tener al menos dos caracteres.`)
    } else {
        showSuccess(fullName);
        valid = true;
    }
    return valid;
};

const isRequired = value => value === '' ? false : true;

const isLonger = (length, min) => length < min ? false : true;

const checkEmail = () => {
    let valid = false;
    const email = fullEmail.value.trim();
    if (!isRequired(email)) {
        showError(fullEmail, 'El email no puede estar vacío.');
    } else if (!isEmailValid(email)) {
        showError(fullEmail, 'El email no es válido.')
    } else {
        showSuccess(fullEmail);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;


    const password = fullPass.value.trim();

    if (!isRequired(password)) {
        showError(fullPass, 'La contraseña no puede estar vacía.');
    } else if (!isPasswordSecure(password)) {
        showError(fullPass, 'La contraseña debe contener mínimo 8 caracteres, y al menos una mayúscula, una minúscula, un número y un carácter especial.');
    } else {
        showSuccess(fullPass);
        valid = true;
    }

    return valid;
};

const checkDocument = () => {

    let valid = false;

    const min = 7,
          max = 9


    const document = fullDocument.value.trim();

    if (!isRequired(document)) {
        showError(fullDocument, 'El documento no puede estar vacío.');
    } else if (!/^[0-9]+$/.test(document)) {
        showError(fullDocument, `El documento debe ser válido.`)
    } else if (!isDocument(document.length, min, max)) {
        showError(fullDocument, `El documento debe ser válido.`)
    } else {
        showSuccess(fullDocument);
        valid = true;
    }
    return valid;
};

const checkBirth = () => {

    let valid = false;



    const birth = new Date(fullBirth.value),
          min = new Date(fullBirth.min),
          max = new Date(moment().subtract(18, 'years').calendar())

    if (!moment(birth,'DD/MM/YYYY',true).isValid()) {
        showError(fullBirth, `La fecha no es válida.`)
    } else if (birth < min || birth > max) {
        showError(fullBirth, `La fecha no es válida.`)
    } else {
        showSuccess(fullBirth);
        valid = true;
    }
    return valid;
};

const isDocument = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {
    // atrapa al fieldset
    const formField = input.parentElement;
    // agrega la clase error
    formField.classList.remove('success');
    formField.classList.add('error');

    // agrega el mensaje
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // atrapa al fieldset
    const formField = input.parentElement;

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
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isDocumentValid = checkDocument(),
        isBirthValid = checkBirth()

    let isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isDocumentValid && isBirthValid

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
        case 'nombreCompleto':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'confirm':
            checkPassword();
            break;
        case 'document':
            checkDocument();
            break;
        case 'birthDate':
            checkBirth();
            break;  
        // case 'confirm-password':
        //     checkConfirmPassword();
        //     break;
    }
}));