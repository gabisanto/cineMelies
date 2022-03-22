const fullUser = document.querySelector('#Usuario');
const fullPass = document.querySelector('#confirm');

const form = document.querySelector('#loginForm');

const isRequired = value => value === '' ? false : true;

const checkEmail = () => {
    let valid = false;
    const email = fullUser.value.trim();
    if (!isRequired(email)) {
        showError(fullUser, 'El email no puede estar vacío.');
    } else if (!isEmailValid(email)) {
        showError(fullUser, 'El email no es válido.')
    } else {
        showSuccess(fullUser);
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
    let isEmailValid = checkEmail(),
        isPasswordValid = checkPassword()
        
    let isFormValid = isUsernameValid && isPasswordValid

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
        case 'Usuario':
            checkEmail();
            break;
        case 'confirm':
            checkPassword();
            break;

    }
}));