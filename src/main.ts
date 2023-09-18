
import * as Components from './components';
import * as Pages from './pages';
//import { PageItem } from './types/pages';
//import { ErrorPageContext } from './types/contexts';
import './styles/globalStyles.scss';

import { registerComponent, registerPartial } from './core/TemplateUtils';

// const pages: Array<PageItem> = [{
//     name: 'internalServerError',
//     template: Pages.ErrorPage,
//     context: {
//         errorCode: '500',
//         errorText: 'Мы работаем над устранением проблемы',
//         goBackPage: 'chats',
//         goBackText: 'Вернуться к чатам'
//     } as ErrorPageContext
// }, {
//     name: 'notFoundError',
//     template: Pages.ErrorPage,
//     context: {
//         errorCode: '404',
//         errorText: 'Запрашиваемый ресурс не найден',
//         goBackPage: 'chats',
//         goBackText: 'Вернуться к чатам'
//     } as ErrorPageContext
// }, /*{
//     name: 'login',
//     template: Pages.LoginPage
// },*/ {
//     name: 'registration',
//     template: Pages.RegistrationPage
// }, {
//     name: 'chats',
//     template: Pages.ChatsPage
// }, {
//     name: 'profile',
//     template: Pages.ProfilePage
// },{
//     name: 'chngeprofiledata',
//     template: Pages.ChangeProfileDataPage
// },{
//     name: 'chngeprofilepassword',
//     template: Pages.ChangePasswordPage
// }];

/*Object.entries(Components).forEach(([name, component]) => {
    Handlebars.registerPartial(name, component);
})*/

//Handlebars.registerPartial('Form', Components.Form);


registerPartial(Components.FormContainer);

registerComponent(Components.Avatar.Name, Components.Avatar);
registerComponent(Components.Button.Name, Components.Button);
registerComponent(Components.GoBackButton.Name, Components.GoBackButton);
registerComponent(Components.GoForwardButton.Name, Components.GoForwardButton);
registerComponent(Components.GoToButton.Name, Components.GoToButton);
registerComponent(Components.InlineButton.Name, Components.InlineButton);
registerComponent(Components.InputBase.Name, Components.InputBase);
registerComponent(Components.InlineTextEditable.Name, Components.InlineTextEditable);
registerComponent(Components.TextField.Name, Components.TextField);
registerComponent(Components.SearchField.Name, Components.SearchField);
registerComponent(Components.Title.Name, Components.Title);
registerComponent(Components.Info.Name, Components.Info);
registerComponent(Components.AutorizationForm.Name, Components.AutorizationForm);
registerComponent(Components.RegistrationForm.Name, Components.RegistrationForm);
registerComponent(Components.ChangeProfileDataForm.Name, Components.ChangeProfileDataForm);
registerComponent(Components.ChangePasswordForm.Name, Components.ChangePasswordForm);


//registerComponent(Components.Form.Name, Components.Form);
//registerComponent(Components.Form.Name, Components.Form);

const navigate = (page: string) => {
    const root = document.getElementById('root');
    if (root) {
        /*const pageItem = pages.find(p => p.name === page);
        if (pageItem) {
            root.innerHTML = Handlebars.compile(pageItem.template)(pageItem.context);
        }*/
        //root.innerHTML = Handlebars.compile(Pages.DebugPage)({});

        //const Component = Pages.LoginPage;
        //const Component = Pages.RegistrationPage;
        //const Component = Pages.ChangeProfileDataPage;
        //const Component = Pages.ChangePasswordPage;
        //const Component = Pages.ProfilePage;
        /*const Component = Pages.ErrorPage;
        const component = new Component({
            errorCode: '500',
            errorText: 'Мы работаем над устранением проблемы',
            goBackPage: 'chats',
            goBackText: 'Вернуться к чатам'
        });*/

        const Component = Pages.ChatsPage;
        const component = new Component();
        root?.append(component.getElement()!);
    }
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

/*document.addEventListener('click', (e: any) => {
    const page = e.target?.getAttribute('goToPage');
    if(page) {
        navigate(page);
    }
    e.preventDefault();
    e.stopImmediatePropagation();
});*/
