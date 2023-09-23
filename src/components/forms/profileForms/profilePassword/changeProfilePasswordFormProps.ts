export interface ChangeProfilePasswordFormProps {
    validate: {
        oldPassword: (value?: string) => boolean;
        newPassword: (value?: string) => boolean;
        repeateNewPassword: (value?: string) => boolean;
    };
    onSave: (event: MouseEvent) => void;
}
