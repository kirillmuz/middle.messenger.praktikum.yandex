import { Chats, Messages, SelectedChat } from '../pages/chats/mokeData';
import { ChatsPageProps } from '../pages/chats/chatsPageProps';
import { ErrorPageProps } from '../pages/error/errorPageProps';
import { PagesNames } from '../constants/commonConstants';
import { ChangeProfileDataPageProps } from '../pages/profile/changeData/changeProfileDataPageProps';
import * as Pages from '../pages';

/**
 * Элемент списка страниц
 */
interface PagesListItem {
    /**
     * Имя страницы
     */
    name: string;
    
    // Здесь используем any для 
    // упрощения типизации, т.к. в будущем 
    // этот метод заменится нормальным роутингом
    /**
     * Компонент страницы
     */
    page: any;
}

/**
 * Список страниц
 */
const pages: Array<PagesListItem> = [
    { name: PagesNames.ChangePassword, page: Pages.ChangePasswordPage },
    { name: PagesNames.ChangeProfileData, page: Pages.ChangeProfileDataPage },
    { name: PagesNames.Chats, page: Pages.ChatsPage },
    { name: PagesNames.Error404, page: Pages.ErrorPage },
    { name: PagesNames.Error500, page: Pages.ErrorPage },
    { name: PagesNames.Login, page: Pages.LoginPage },
    { name: PagesNames.Profile, page: Pages.ProfilePage },
    { name: PagesNames.Registration, page: Pages.RegistrationPage }
];

/**
 * Функция навигации
 */
export const navigate = (page: string) => {
    const root = document.getElementById('root');
    if (root) {
        const Component = pages.find(p => p.name === page)?.page;
        if (!Component) {
            return;
        }
        let context: unknown = null;
        switch(page) {
            case PagesNames.Chats:
                context = {
                    chatsList: Chats,
                    selectedChatMessagesList: Messages,
                    selectedChat: SelectedChat
                } as ChatsPageProps;
                break;
            case PagesNames.Error404:
                context = {
                    errorCode: '404',
                    errorText: 'Запрашиваемый ресурс не найден',
                    goBackText: 'Вернуться к чатам',
                    goBackPage: PagesNames.Chats
                } as ErrorPageProps;
                break;
            case PagesNames.Error500:
                context = {
                    errorCode: '500',
                    errorText: 'Мы работаем над устранением проблемы',
                    goBackText: 'Вернуться к чатам',
                    goBackPage: PagesNames.Chats
                } as ErrorPageProps;
                break;
            case PagesNames.ChangeProfileData:
                context = {
                    profile: {
                        displayName: 'Иван',
                        email: 'iiivanov@yandex.ru',
                        firstName: 'Иван',
                        login: 'iiivanov',
                        midleName: 'Иванович',
                        phone: '8-800-535-35-35',
                        secondName: 'Иванов'
                    }
                } as ChangeProfileDataPageProps; 
                break;
        }
        const component = context ? new Component(context) : new Component();
        root.innerHTML = '';
        root.append(component.getElement()!);
    }
}
