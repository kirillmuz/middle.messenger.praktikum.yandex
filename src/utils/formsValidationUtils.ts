/**
 * Валидация полей формы
 */
const validateForm = (fieldsValues: object): boolean => {
    let isValid = true;
    const checkInvalid = (value?: boolean | string) => 
        typeof value === 'boolean' && value === false;
    Object.entries(fieldsValues).forEach(([, value]) => {
        if(checkInvalid(value)) {
            isValid = false;
        }
    });
    return isValid;
}

/**
 * Утилиты валидации форм
 */
export const formsValidationUtils = {
    validateForm
}
