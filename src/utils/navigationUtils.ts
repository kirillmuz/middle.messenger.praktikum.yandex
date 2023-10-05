import { Chats, Messages, SelectedChat } from '../pages/chats/mokeData';
import { ChatsPageProps } from '../pages/chats/chatsPageProps';
import { ErrorPageProps } from '../pages/error/errorPageProps';
import { RoutesAdresses } from '../constants/commonConstants';
import { ChangeProfileDataPageProps } from '../pages/profile/changeData/changeProfileDataPageProps';
import * as Pages from '../pages';
import Router from '../core/Router';

export const registerRoutes = () => {
    console.log('registerRoutes');

    const router = new Router();
    router
        .use(RoutesAdresses.Login, Pages.LoginPage)
        .use(RoutesAdresses.Registration, Pages.RegistrationPage)
        .use(RoutesAdresses.Chats, Pages.ChatsPage, {
            chatsList: Chats,
            selectedChatMessagesList: Messages,
            selectedChat: SelectedChat
        } as ChatsPageProps)
        .use(RoutesAdresses.Profile, Pages.ProfilePage)
        .use(RoutesAdresses.ChangePassword, Pages.ChangePasswordPage)
        .use(RoutesAdresses.ChangeProfileData, Pages.ChangeProfileDataPage)
        .use(RoutesAdresses.Error500, Pages.ErrorPage, {
            errorCode: '500',
            errorText: 'Мы работаем над устранением проблемы',
            goBackText: 'Вернуться к чатам',
            goBackPage: RoutesAdresses.Chats
        } as ErrorPageProps)
        .use(RoutesAdresses.Error404, Pages.ErrorPage, {
            errorCode: '404',
            errorText: 'Запрашиваемый ресурс не найден',
            goBackText: 'Вернуться к чатам',
            goBackPage: RoutesAdresses.Chats
        } as ErrorPageProps)
        .start();
}
