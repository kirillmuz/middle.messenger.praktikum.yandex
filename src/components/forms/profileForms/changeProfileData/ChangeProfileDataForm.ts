import Block from '../../../../core/Block';
import { PagesNames } from '../../../../constants/commonConstants';
import { navigate } from '../../../../utils/navigationUtils';
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
                navigate(PagesNames.Profile);
            }
        });
    }

    protected render(): string {
        return template;
    }
}
