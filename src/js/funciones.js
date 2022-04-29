import { Todo } from '../class';
import { todoList, mostrarNumTareas } from '../index.js'


let numeroDeTareas = 0;
//referencias

const ulFiltros = document.querySelector('.filters');
const anchorLi  = document.querySelectorAll('.filtro');
const btnBorrarCompletados = document.querySelector('.clear-completed');
btnBorrarCompletados.addEventListener('click', () => {
    tareasCompletadas();
});

let divTodoList = document.querySelector('.todo-list');
divTodoList.addEventListener('click', (eve) => {

    const inputTodo = eve.target.localName;
    const todoElemento = eve.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if ( inputTodo.includes('input')) {
        marcarCompletado2 ( todoId, todoElemento );    
    } else if (inputTodo.includes('button')) {
        // console.log('todo eliminada')
        divTodoList.removeChild(todoElemento);
        eliminarTodo( todoId );
    }
});
const inputHtml = document.querySelector('.new-todo');
inputHtml.addEventListener('keyup', (eve) => {
    inputCrearTarea(eve);
});


export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);


    return div.firstElementChild;
};

const inputCrearTarea = ( eve ) => {
    if( eve.keyCode === 13 && eve.target.value.length ){
        const nuevaTareaUsuario = new Todo(eve.target.value);
        todoList.nuevoTodo(nuevaTareaUsuario);
        crearTodoHtml(nuevaTareaUsuario);
        mandarNumeroTareas()
        inputHtml.value = '';
        }
}

/*
const marcarCompletado = (eve) => {
    const inputTodo = eve.target.localName;
    const todoElemento = eve.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if ( inputTodo.includes('input')) {
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed')
    }
};
*/


//funcion hecha por mi

const marcarCompletado2 = ( id, elemento) => {
    // console.log(elemento)
    todoList.marcarCompletado(id);
    elemento.classList.toggle('completed');
}

const eliminarTodo = ( id ) => {
    todoList.elminarTodo( id );
    mandarNumeroTareas();
}

const tareasCompletadas = () => {
    todoList.eliminarCompletados();

    for(let i  = divTodoList.children.length-1; i >= 0; i--){
        const elemento = divTodoList.children[i];
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
    mandarNumeroTareas();
}

window.addEventListener('load', () => {
    numeroDeTareas = divTodoList.children.length;
    mostrarNumTareas(numeroDeTareas)
})

const mandarNumeroTareas = () => {
    numeroDeTareas = divTodoList.children.length;
    console.log(numeroDeTareas)
    mostrarNumTareas(numeroDeTareas)
}

ulFiltros.addEventListener('click', (e) => {
    const filtro = e.target.text;
    if(!filtro) { return; }
    
    anchorLi.forEach( elem =>  elem.classList.remove('selected') );
    e.target.classList.add('selected');

    for(const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        
        switch (filtro) {
            case 'Pendientes':
                if( completado ) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if( !completado ) {
                    elemento.classList.add('hidden');
                }
                break;
        }
        
    }

});