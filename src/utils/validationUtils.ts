const required = (value?: string) => {
    if(!value) {
        return 'Обязательное поле';
    }
};

const notEmpty = (value?: string) => {
    if(!value) {
        return 'Поле не должно быть пустым';
    }
};

const notOnlyNumbers = (value?: string) => {
    if(!value) return '';
    const regexp = /^\d+$/;
    if(regexp.test(value)) {
        return 'Поле не должно состоять только из цифр';
    }
}

const login =  (value?: string) => {
    if(!value) return '';
    const checkLoginSpecsympols = /[^a-zA-Z0-9а-яА-Я\-\\_]/g;
    if(checkLoginSpecsympols.test(value!)) {
        return 'Поле не должно содержать спецсимволы';
    }
    const checkLoginLatin = /[^a-zA-Z0-9\-\\_]/g;
    if(checkLoginLatin.test(value)) {
        return 'Поле должно быть написано латиницей';
    }
    const notOnlyNumbersMessage = notOnlyNumbers(value);
    if(notOnlyNumbersMessage) {
        return notOnlyNumbersMessage;
    }
    const checkLength = /^.{3,20}$/;
    if(!checkLength.test(value)) {
        return 'Длинна должна составлять от 3 до 20 символов';
    }
};

const password = (value?: string) => {
    if(!value) return '';
    const checkLength = /^.{8,40}$/;
    if(!checkLength.test(value)) {
        return 'Длинна должна составлять от 8 до 40 символов';
    }
    const checkDigits = /\d/;
    if(!checkDigits.test(value)) {
        return 'Поле должно содержать хотябы 1 цифру';
    }
    const checkCapitals = /[А-ЯA-Z]/;
    if(!checkCapitals.test(value)) {
        return 'Поле должно содержать хотябы 1 заглавную букву';
    }
}

const personNameData = (value?: string) => {
    if(!value) return '';
    const checkNameSpecsymbols = /[^a-zA-Zа-яА-Я\\-]/g;
    if(checkNameSpecsymbols.test(value)) {
        return 'Поле не должно содержать спецсимволы или цифры';
    }
    const checkNameNotCapital = /^[A-ZА-Я]/g;
    if(!checkNameNotCapital.test(value)) {
        return 'Поле должно начинаться с заглавной буквы';
    }
}

const phone = (value?: string) => {
    if(!value) return '';
    const checkLength = /^.{10,15}$/;
    if(!checkLength.test(value)) {
        return 'Длинна должна составлять от 10 до 15 символов';
    }
    const checkPhone = /^\+?\d+$/;
    if(!checkPhone.test(value)) {
        return 'Поле должно состоять из цифр, или начинаться с +';
    }
}

const email = (value?: string) => {
    if(!value) return '';
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!checkEmail.test(value)) {
        return 'Поле не соответствует формату email: __@__.__';
    }
}

export const validationUtils = {
    login,
    password,
    personNameData,
    phone,
    email,
    required,
    notEmpty,
    notOnlyNumbers
}
