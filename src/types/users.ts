/**
 * Пользователь
 */
export interface User {
    /**
     * Аватар
     */
    avatar: string;
    
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
