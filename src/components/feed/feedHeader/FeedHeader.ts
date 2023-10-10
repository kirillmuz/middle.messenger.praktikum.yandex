import Block from '../../../core/Block';
import { connect } from '../../../utils/storeUtils';
import { ApiHost } from '../../../constants/commonConstants';
import { FeedHeaderProps } from './feedHeaderProps';
import template from './feedHeaderTemplate.hbs?raw';
import './feedHeaderStyles.scss';

/**
 * Класс компонента "Шапка ленты"
 */
class FeedHeader extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'FeedHeader';

    constructor(props: FeedHeaderProps) {
        super({
            ...props,
            resourcesUrl: `${ApiHost}/resources/`
        } as FeedHeaderProps);
        this.props.events = {
            click: this.props.onClick || (() => {})
        }
    }

    protected render(): string {
        return template;
    }
}

/**
 * Шапка ленты
 */
export default connect((state) => ({chat: state.selectedChat}))(FeedHeader);
