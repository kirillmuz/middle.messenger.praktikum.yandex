import Block from '../../../../core/Block';
import template from './changePasswordFormTemplate.hbs?raw';

/**
 * Форма изменения учетных данных пользователя
 */
export class ChangePasswordForm extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChangePasswordForm';

    constructor() {
        super({
            onSave: (event: any) => {
                event.preventDefault();
                alert('Login click');
            }
        });
    }

    protected render(): string {
        return template;
    }
}
