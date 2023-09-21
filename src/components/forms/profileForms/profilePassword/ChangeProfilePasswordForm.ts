import Block from '../../../../core/Block';
import { InlineTextEditable } from '../../../controls';
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
            onSave: (event: MouseEvent) => {
                event.preventDefault();
                const oldPassword =  (this.refs.oldPassword as InlineTextEditable)?.value();
                const newPassword =  (this.refs.newPassword as InlineTextEditable)?.value();
                const repeateNewPassword =  (this.refs.repeateNewPassword as InlineTextEditable)?.value();
                console.log({
                    component: ChangePasswordForm.Name,
                    oldPassword,
                    newPassword,
                    repeateNewPassword
                });
                navigate(PagesNames.Profile);
            }
        });
    }

    protected render(): string {
        return template;
    }
}
