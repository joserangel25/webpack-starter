import { Todo } from './todo.class' 

export class TodoList {
    constructor(){
        this.cargarTareasLocalStorage();
    }

    nuevoTodo( todo ){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    elminarTodo ( id ) {
        for (const todo of this. todos) {
            if(todo.id == id){
                const indice = this.todos.indexOf(todo);
                this.todos.splice(indice, 1);
            }
        }
        this.guardarLocalStorage()
    }

    marcarCompletado ( id ) {
        for (const todo of this.todos) {
            if( todo.id  == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage()
                break;
            }
        }
    }

    eliminarCompletados () {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    get cantidadTodos(){
        return this.todos.length;
    };

    guardarLocalStorage(){
        localStorage.setItem('TODOS', JSON.stringify(this.todos))
    };

    cargarTareasLocalStorage(){
        this.todos = (localStorage.getItem('TODOS')) 
                        ? JSON.parse(localStorage.getItem('TODOS')) 
                        : [];

        this.todos = this.todos.map(todo => Todo.fromJson(todo));
    }  
}