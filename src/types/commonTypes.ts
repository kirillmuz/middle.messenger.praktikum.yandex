/**
 * Тип кнопки
 */
export type ButtonType = 'prymary' | 'secondary' | 'important';

/**
 * Тип html input
 */
export type HTMLInputTypeAttribute  = 
    'button' | 
    'checkbox' | 
    'color' | 
    'date' | 
    'datetime-local' | 
    'email' | 
    'file' | 
    'hidden' | 
    'image' | 
    'month' | 
    'number' | 
    'password' | 
    'radio' | 
    'range' | 
    'reset' | 
    'search' | 
    'submit' | 
    'tel' | 
    'text' | 
    'time' | 
    'url' | 
    'week';

/**
 * Тип заголовка
 */
export type TitleType = 'smal' | 'bold';

/**
 * Элемент выпадающего списка
 */
export interface SelectOption {
    /**
     * Значение
     */
    value: string;
    
    /**
     * Отображаемый текст
     */
    text: string;
}

/**
 * Персональные данные профиля пользователя
 */
export interface ProfileData {
    /**
     * Электронная почта
     */
    email: string;

    /**
     * Логин
     */
    login: string;

    /**
     * Фамилия
     */
    secondName: string;
    
    /**
     * Имя
     */
    firstName: string;
    
    /**
     * Отчество
     */
    midleName: string;
    
    /**
     * Никнейм
     */
    displayName: string;
    
    /**
     * Телефон
     */
    phone: string;
}
