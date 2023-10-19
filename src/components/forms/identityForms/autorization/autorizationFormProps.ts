/**
 * Свойства компонента формы входа
 */
export interface AutorizationFormProps {
    /**
     * Валидация
     */
    validate: {
        login: (value?: string) => boolean;
        password: (value?: string) => boolean;
    };

    /**
     * Залогиниться
     */
    onLogin: (event: MouseEvent) => void;
    
    /**
     * Перейти к регистрации
     */
    onRegister: (event: MouseEvent) => void;
}
