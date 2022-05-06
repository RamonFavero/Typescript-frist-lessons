// type utility é usado para fazer uma auteraçao numa CONST 
// mantendo a CONST inicial e criando uma variante da mesma

type Todo = {
    title: string;
    description:string;
    completed: boolean;
};

const todo: Todo = {
    title: "assistir episodios extras de euphoria",
    description: "relembrar os episodios passados",
    completed:false,
};
console.log(todo);
function updateTodo(todo:Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate};
};

const todo2: Todo = updateTodo (todo, {completed:true});

console.log(todo2);

//PICK

type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
    title: "jogar Just die already",
    completed:false
}

console.log(todo3);

// OMIT

type TodoPreview2 = Omit<Todo,"description">

const todo4: TodoPreview2 = {
    title:"começar Read dead redemption",
    completed: false
};

console.log(todo4);
