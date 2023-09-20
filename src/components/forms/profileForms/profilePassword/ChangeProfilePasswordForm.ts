import Block from '../../../../core/Block';
import { PagesNames } from '../../../../constants/commonConstants';
import { navigate } from '../../../../utils/navigationUtils';
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
                navigate(PagesNames.Profile);
            }
        });
    }

    protected render(): string {
        return template;
    }
}
