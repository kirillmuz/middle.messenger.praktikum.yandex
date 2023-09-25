/**
 * Свойства компонента формы входа
 */
export interface AutorizationFormProps {
    validate: {
        login: (value?: string) => boolean;
        password: (value?: string) => boolean;
    };
    onLogin: (event: MouseEvent) => void;
    onRegister: (event: MouseEvent) => void;
}
