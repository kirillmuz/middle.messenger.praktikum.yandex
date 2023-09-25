/**
 * Свойства компонента формы регистрации
 */
export interface RegistrationFormProps {
    validate: {
        email: (value?: string) => boolean;
        login: (value?: string) => boolean;
        secondName: (value?: string) => boolean;
        firstName: (value?: string) => boolean;
        midleName: (value?: string) => boolean;
        phone: (value?: string) => boolean;
        password: (value?: string) => boolean;
        repeatePassword: (value?: string) => boolean;
    };
    onLogin: (event: MouseEvent) => void;
    onRegister: (event: MouseEvent) => void;
}
