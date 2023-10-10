import ChatsApi from '../api/ChatsApi';
import { ChatDto, ChatTokenDto, DeletedChatDto, NewChatDto } from '../types/api/chatsTypes';
import { Chat } from '../types/chats';
import { mapChatDtoToModel } from '../utils/mapDtoToModels';
import { initStore } from '../utils/storeUtils';
import { findUser } from './UsersService';

initStore();
const chatsApi = new ChatsApi();

/**
 * Получить список чатов
 */
const getChatsList = async() => {
    const chatsListDto = await chatsApi.getChats();
    let chatsList: Array<Chat> = [];
    if(chatsListDto) {
        chatsList = (chatsListDto as Array<ChatDto>)
            .map(chatDto => mapChatDtoToModel(chatDto));
        window.store?.set({
            chatsList
        });
    }
    return chatsList;
}

/**
 * Создать чат
 */
const createChat = async(title: string) => {
    const newChatDto  = await chatsApi.createChat({title});
    if(newChatDto) {
        getChatsList();
    }
    return (newChatDto as NewChatDto).id;
}

/**
 * Удалить чат
 */
const deleteChat = async(chatId: number) => {
    const deletedChatDto  = await chatsApi.deleteChat({chatId});
    if(deletedChatDto) {
        getChatsList();
    }
    return (deletedChatDto as DeletedChatDto).result.id;
}

/**
 * Изменить аватар 
 */
const changeAvatar = async(chatId: number, file: File) => {
    const chatDto = await chatsApi.changeAvatar(chatId, file);
    if(chatDto) {
        const chatsList = window.store?.getState().chatsList;
        const currentChat = chatsList?.find(c=>c.id === (chatDto as ChatDto).id);
        if(currentChat) {
            currentChat.avatar = (chatDto as ChatDto).avatar;
            window.store?.set({
                chatsList
            });
        }
    }
};

/**
 * Добавить пользователя в чат
 */
const addUserToChat = async(chatId: number, login: string) => {
    const user = await findUser(login);
    await chatsApi.addUserToChat(user.id!, chatId);
}

/**
 * Удалить пользователя из чата
 */
const deleteUserFromChat = async(chatId: number, login: string) => {
    const user = await findUser(login);
    await chatsApi.deleteUserFromChat(user.id!, chatId);
}

/**
 * Получить токен чата
 */
const getChatToken = async(chatId: number) => {
    const token = await chatsApi.getChatToken(chatId);
    return (token as ChatTokenDto).token;
}

export {
    getChatsList,
    createChat,
    deleteChat,
    changeAvatar,
    addUserToChat,
    deleteUserFromChat,
    getChatToken
}
