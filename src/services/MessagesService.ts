import MessagesApi from '../api/MessagesApi';
import { RealtimeMessageDto } from '../types/api/messagesTypes';
import { mapRealtimeMessageDtoToModel } from '../utils/mapDtoToModels';
import { initStore } from '../utils/storeUtils';
import { getChatToken } from './ChatsService';

initStore();

/**
 * Функция обновления ленты
 */
const refreshChatCallback = (messages: Array<unknown>) => {
    const oldMessages = window.store?.getState().messages ?? [];
    const validMessages = (messages as Array<RealtimeMessageDto>)
        ?.filter(m=>m.type === 'message')
        ?.map(vm => mapRealtimeMessageDtoToModel(vm)) ?? [];
    window.store?.set({
        messages: [
            ...validMessages,
            ...oldMessages,
        ]
    });
}

/**
 * Инициализировать ленту
 */
const initChat = async() => {
    if(window.store) {
        window.store?.set({messages: []});
        const { currentUser, selectedChat } = window.store.getState();
        const token = selectedChat? await getChatToken(selectedChat.id) : undefined;
        if(token && currentUser){
            window.store?.set({token});
            new MessagesApi(currentUser.id, selectedChat!.id, token, refreshChatCallback);        
        }
    }
}

/**
 * Отправить сообщение
 */
const sendMessage = (message: string) => {
    if(window.store) {
        const { currentUser, selectedChat, token } = window.store.getState();
        if(!currentUser || !selectedChat || !token) {
            return;
        }
        const messageApi = new MessagesApi(currentUser.id, selectedChat!.id, token, refreshChatCallback);
        messageApi.sendMessage(message, 'message');
    }
}

export {
    initChat,
    sendMessage
}
