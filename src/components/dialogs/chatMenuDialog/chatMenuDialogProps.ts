import { DialogProps } from '../dialogProps';

/**
 * Свойства компонента меню чата
 */
export interface ChatMenuDialogProps extends DialogProps {
    /**
     * Обработчик добавления пользователя в чат
     */
    onAddUser: (event: MouseEvent) => void;

    /**
     * Обработчик смены аватара
     */
    onChangeAvatar: (event: MouseEvent) => void;

    /**
     * Обработчик удаления чата
     */
    onDeleteChat: (event: MouseEvent) => void;
}