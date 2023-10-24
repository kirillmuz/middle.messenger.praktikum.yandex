import { expect } from 'chai';
import Block from './Block';
import sinon from 'sinon';

interface ComponentProps {
    title?: string;
    events?: Record<string, () => void>;
}

const ComponentName = 'TestingComponent';
const ComponentTitle = 'Testing component title';

describe('Проверяем компонент реализующий класс Block', () => {
    let Component: typeof Block;
    
    before(() => {
        class ComponentClass extends Block {
            public static Name = ComponentName;
            constructor(props: ComponentProps) {
                super({...props});
            }
            protected render(): string {
                return `<div>
                    <div id="title">{{title}}</div>
                </div>`;
            }
        }

        Component = ComponentClass;
    });

    it('Должен быть доступ к свойству имени компонента, если оно установлено в классе', () => {
        expect(Component.Name).to.eq(ComponentName);
    });

    it('Компонент должен возвращать разметку при вызове функции getElement', () => {
        const component = new Component();
        const componentText = component.getElement()?.innerHTML;
        expect(componentText).to.not.eq('');
    });
    
    it('Компонент должен установить свойства, если они переданы', () => {
        const component = new Component({title: ComponentTitle} as ComponentProps);
        const componentTitle = component.getElement()?.querySelector('#title')?.innerHTML;
        expect(componentTitle).to.eq(ComponentTitle);
    });

    it('Компонент должен перерисоваться, если переданные свойства изменились', () => {
        const newTitle = 'New title';
        const component = new Component({title: ComponentTitle} as ComponentProps);
        component.setProps({title: newTitle} as ComponentProps);
        const componentTitle = component.getElement()?.querySelector('#title')?.innerHTML;
        expect(componentTitle).to.eq(newTitle);
    });

    it('Компонент должен добавлять обработчики событий', () => {
        const componentClickHandler = sinon.stub();
        const component = new Component({events: {
            click: componentClickHandler
        }} as ComponentProps);
        const event = new MouseEvent('click');
        component.getElement()?.dispatchEvent(event);
        expect(componentClickHandler.calledOnce).to.be.true;
    });

    it('Компонент должен вызвать событие жизненного цикла ComponentDidMount, после установки в DOM', 
        () => {
            const clock = sinon.useFakeTimers();
            const component = new Component();
            const spyComponentDidMount = sinon.spy(component, 'dispatchComponentDidMount');
            const element = component.getElement();
            document.body.append(element);
            clock.next();
            expect(spyComponentDidMount.calledOnce).to.be.true;
        }
    );

    it('Компонент должен очищать обработчики событий, после вызова события жизненного цикла ComponentWillUnmount', 
        () => {
            const componentClickHandler = sinon.stub();
            const component = new Component({events: {
                click: componentClickHandler
            }} as ComponentProps);
            component.unmount();
            const event = new MouseEvent('click');
            component.getElement()?.dispatchEvent(event);
            expect(componentClickHandler.calledOnce).to.be.false;
        }
    );
}); 
