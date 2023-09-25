export type ButtonType = 'prymary' | 'secondary' | 'important';

export type HTMLInputTypeAttribute  = 
    'button' | 
    'checkbox' | 
    'color' | 
    'date' | 
    'datetime-local' | 
    'email' | 
    'file' | 
    'hidden' | 
    'image' | 
    'month' | 
    'number' | 
    'password' | 
    'radio' | 
    'range' | 
    'reset' | 
    'search' | 
    'submit' | 
    'tel' | 
    'text' | 
    'time' | 
    'url' | 
    'week';

/**
 * Тип заголовка
 */
export type TitleType = 'smal' | 'bold';

/**
 * Элемент чата
 */
export interface ChatItem {
    /**
     * Название чата
     */
    chatName: string;

    /**
     * Последнее сообщение
     */
    lastMessage?: string;

    /**
     * Выбран ли элемент
     */
    selected?: boolean;

    /**
     * Дата отправки
     */
    sentTime?: string;

    /**
     * Кол-во непрочитанных сообщений
     */
    unreadedMessagesCount?: number;

    /**
     * Отправитель
     */
    who?: string;
}

/**
 * Тип сообщения ленты
 */
export type MessageType = 'incoming' | 'outgoing';


/**
 * Сообщение ленты
 */
export interface FeedMessage {
    /**
     * Текст сообщения
     */
    message: string;

    /**
     * Тип сообщения
     */
    type: MessageType;

    /**
     * Время отправки
     */
    sentTime: string;

    /**
     * Отправитель
     */
    who?: string;
}

/**
 * Персональные данные профиля пользователя
 */
export interface ProfileData {
    /**
     * Электронная почта
     */
    email: string;

    /**
     * Логин
     */
    login: string;

    /**
     * Фамилия
     */
    secondName: string;
    
    /**
     * Имя
     */
    firstName: string;
    
    /**
     * Отчество
     */
    midleName: string;
    
    /**
     * Никнейм
     */
    displayName: string;
    
    /**
     * Телефон
     */
    phone: string;
}
