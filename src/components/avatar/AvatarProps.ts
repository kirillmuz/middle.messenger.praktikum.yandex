/**
 * Свойства компонента "Аватар"
 */
export interface AvatarProps {
    /**
     * Выбрать аватар
     */
    chooseAvatar: () => void;

    /**
     * Аватар
     */
    avatar?: string;
}
