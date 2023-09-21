import Block from '../../../../core/Block';
import { InlineTextEditable } from '../../../controls';
import { ProfileData } from '../../../../types/commonTypes';
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

    constructor(props: {profile: ProfileData}) {
        const { profile } = props;
        super({
            ...profile,
            onSave: (event: MouseEvent) => {
                event.preventDefault();
                const email =  (this.refs.email as InlineTextEditable)?.value();
                const login =  (this.refs.login as InlineTextEditable)?.value();
                const secondName =  (this.refs.secondName as InlineTextEditable)?.value();
                const firstName =  (this.refs.firstName as InlineTextEditable)?.value();
                const midleName =  (this.refs.midleName as InlineTextEditable)?.value();
                const displayName =  (this.refs.displayName as InlineTextEditable)?.value();
                const phone =  (this.refs.phone as InlineTextEditable)?.value();
                console.log({
                    component: ChangeProfileDataForm.Name,
                    email,
                    login,
                    secondName,
                    firstName,
                    midleName,
                    displayName,
                    phone
                });
                navigate(PagesNames.Profile);
            }
        });
    }

    protected render(): string {
        return template;
    }
}
