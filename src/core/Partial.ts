/**
 * Модель компонента
 */
export interface PartialComponent {
    /**
     * Название
     */
    name: string;

    /**
     * Компонент handlebars
     */
    component: string;
}

/**
 * Компонент частичного представления
 */
class Partial {
    protected name = '';
    protected template = '';
    
    get Component(): PartialComponent {
        return {
            component: this.template,
            name: this.name
        };
    }
}

export default Partial;
