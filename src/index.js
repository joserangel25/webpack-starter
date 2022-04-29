// import { TodoList } from './class/todo-list.class';
// import { Todo } from './class/todo.class';
import { Todo, TodoList } from './class'
import { crearTodoHtml } from './js/funciones.js';
import './style.css';

//referencias
const numeroHtml = document.querySelector('strong');



export const todoList = new TodoList();

todoList.todos.forEach(todo => { 
    crearTodoHtml(todo);
});

//funcion que me actualiza el numero de tareas en el html
//es inicializada desde funciones.js

export const mostrarNumTareas = (numero) => {
    // console.log('El numero de taareas es: ' + numero );
    numeroHtml.innerText = numero;
}
