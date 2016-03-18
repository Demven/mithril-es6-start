import HelloWorld from './components/HelloWorld.jsx';
import TodoApp from './components/TodoApp.jsx';

//m.mount(document.getElementById('content'), new TodoApp({ paramOne: 'ToDo', paramTwo: 'App' }));

m.route(document.getElementById('content'), '/', {
    '/': new HelloWorld(),
    '/todo': new TodoApp({ paramOne: 'ToDo', paramTwo: 'App' }),
});