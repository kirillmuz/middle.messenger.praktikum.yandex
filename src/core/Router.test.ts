import { expect } from 'chai';
import Router from './Router';
import Block from './Block';
import sinon from 'sinon';

describe('Проверяем роутер', () => {
    const host = 'http://localhost:3000';
    let Component: typeof Block;
    let router: Router;
    
    before(() => {
        class ComponentClass extends Block {
            public static Name = 'TestComponent';
            constructor() {
                super();
            }
            protected render(): string {
                return '<div>Test</div>';
            }
        }
        Component = ComponentClass;
        router = new Router();
    });

    it('Роутер должен быть синглтоном', () => {
        const newRouter = new Router;
        expect(router).to.eq(newRouter);
    });

    it('Должна быть возможность установить роуты в роутер', () => {
        const useSpy = sinon.spy(router, 'use');
        router.use('testurl', Component);
        expect(useSpy.called).to.be.true;
    });

    it('Должна быть возможность получать установленные роуты', () => {
        const route = router.getRoute('testurl');
        expect(route).to.not.undefined;
    });

    it('Роутер должен успешно запускаться', () => {
        const onrouteStub = sinon.stub();
        router._onRoute = onrouteStub; 
        router.start();
        expect(onrouteStub.calledOnce).to.be.true;
    });

    it('Роутер должен переходить по заданному URL', () => {
        router.go('testurl');
        expect(window.location.href).to.eq(`${host}/testurl`);
    });

    it('Роутер должен уметь переходить назад', () => {
        const backSpy = sinon.spy(window.history, 'back');
        router.back();
        expect(backSpy.called).to.be.true;
    });

    it('Роутер должен уметь переходить вперед', () => {
        const forwardSpy = sinon.spy(window.history, 'forward');
        router.forward();
        expect(forwardSpy.called).to.be.true;
    });
}); 
