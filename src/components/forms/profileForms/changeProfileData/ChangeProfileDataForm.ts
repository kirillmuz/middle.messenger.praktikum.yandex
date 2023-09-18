import Block from '../../../../core/Block';
import template from './changeProfileDataFormTemplate.hbs?raw';

/**
 * Форма изменения профиля пользователя
 */
export class ChangeProfileDataForm extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'ChangeProfileDataForm';

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
