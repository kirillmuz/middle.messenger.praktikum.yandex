/**
 * Свойства компонента "Элемент чата"
 */
export interface ChatItemProps {
    /**
     * Название чата
     */
    chatName: string;

    /**
     * Событие клика по чату
     */
    onClick: () => void;

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
