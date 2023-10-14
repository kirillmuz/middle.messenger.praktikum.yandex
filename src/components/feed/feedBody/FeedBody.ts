import Block from '../../../core/Block';
import { FeedBodyProps } from './feedBodyProps';
import template from './feedBodyTemplate.hbs?raw';
import './feedBodyStyles.scss';
import { connect } from '../../../utils/storeUtils';

/**
 * Компонент "Лента"
 */
class FeedBody extends Block {
    /**
     * Имя компонента
     */
    public static Name = 'FeedBody';

    constructor(props: FeedBodyProps) {
        super(props);
    }

    protected render(): string {
        return template;
    }
}

export default connect((state) => ({messagesList: state.messages}))(FeedBody);
