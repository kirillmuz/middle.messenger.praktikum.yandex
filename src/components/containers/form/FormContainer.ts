import Partial from '../../../core/Partial';
import template from './formContainerTemplate.hbs?raw';

/**
 * Контейнер формы
 */
export class FormContainer extends Partial {
    protected name = 'FormContainer';
    protected template = template;
}
