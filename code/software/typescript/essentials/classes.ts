interface Todo {
    name: string;
    state: boolean;
}


class TodoService {

    static lastId: number = 0;

    constructor(private todos: Todo[]) { }
    
    add(todo: Todo) {
        var newId = TodoService.getNextId();
    }

    getAll() {
        return this.todos;
    }

    static getNextId() {
        return TodoService.lastId += 1;
    }
}