/**
 * Свойства компонента страницы чатов
 */
export interface ChatsPageProps {
    /**
     * Преейти в профиль
     */
    openProfile: (event: MouseEvent) => void;
    
    /**
     * Добавить чат
     */
    addChat: (event: MouseEvent) => void;
}
