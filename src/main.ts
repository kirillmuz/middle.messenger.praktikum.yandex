import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import { PageItem } from './types/pages';
import { ErrorPageContext, InlineTextEditableContext } from './types/contexts';

const pages: Array<PageItem> = [{
    name: 'internalServerError',
    template: Pages.ErrorPage,
    context: {
        errorCode: '500',
        errorText: 'Мы работаем над устранением проблемы',
        goBackPage: 'chats',
        goBackText: 'Вернуться к чатам'
    } as ErrorPageContext
}, {
    name: 'notFoundError',
    template: Pages.ErrorPage,
    context: {
        errorCode: '404',
        errorText: 'Запрашиваемый ресурс не найден',
        goBackPage: 'chats',
        goBackText: 'Вернуться к чатам'
    } as ErrorPageContext
}, {
    name: 'login',
    template: Pages.LoginPage
}, {
    name: 'registration',
    template: Pages.RegistrationPage
}, {
    name: 'chats',
    template: Pages.ChatsPage
}, {
    name: 'profile',
    template: Pages.ProfilePage
},{
    name: 'chngeprofiledata',
    template: Pages.ChangeProfileDataPage
},{
    name: 'chngeprofilepassword',
    template: Pages.ChangeProfilePasswordPage
}];

Object.entries(Components).forEach(([name, component]) => {
    Handlebars.registerPartial(name, component);
})

const navigate = (page: string) => {
    const root = document.getElementById('root');
    if (root) {
        const pageItem = pages.find(p => p.name === page);
        if (pageItem) {
            root.innerHTML = Handlebars.compile(pageItem.template)(pageItem.context);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', (e: any) => {
    const page = e.target?.getAttribute('goToPage');
    if(page) {
        navigate(page);
    }
    e.preventDefault();
    e.stopImmediatePropagation();
});