/**
 * Пользователь
 */
export interface User {
    /**
     * Аватар
     */
    avatar: string | null;
    
    /**
     * Никнейм
     */
    displayName: string;

    /**
     * Почта
     */
    email: string;

    /**
     * Имя
     */
    firstName: string;

    /**
     * Идентификатор
     */
    id: number;

    /**
     * Логин
     */
    login: string;
    
    /**
     * Телефон
     */
    phone: string;
    
    /**
     * Фамилия
     */
    secondName: string;
}

/**
 * Регистрируемый пользователь
 */
export interface RegisteringUser {
    /**
     * Почта
     */
    email: string;

    /**
     * Имя
     */
    firstName: string;

    /**
     * Логин
     */
    login: string;
    
    /**
     * Пароль
     */
    password: string;

    /**
     * Телефон
     */
    phone: string;
    
    /**
     * Фамилия
     */
    secondName: string;
}

/**
 * Модель пользователя чата
 */
export interface ChatUser {
    /**
     * Аватар
     */
    avatar: string | null;
    
    /**
     * Никнейм
     */
    displayName: string;
    
    /**
     * Имя
     */
    firstName: string;

    /**
     * Логин
     */
    login: string;

    /**
     * Фамилия
     */
    secondName: string;

    /**
     * Идентификатор
     */
    id?: number;
}
