import { DialogProps } from '../dialogProps';

/**
 * Свойства компонента всплывающего сообщения
 */
export interface FloatMessageDialogProps extends Omit<DialogProps, 'show'> {
    /**
     * Сообщение
     */
    message?: string;
}
