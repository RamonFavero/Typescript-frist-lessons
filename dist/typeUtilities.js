"use strict";
// type utility é usado para fazer uma auteraçao numa CONST 
// mantendo a CONST inicial e criando uma variante da mesma
const todo = {
    title: "assistir episodios extras de euphoria",
    description: "relembrar os episodios passados",
    completed: false,
};
console.log(todo);
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
;
const todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
const todo3 = {
    title: "jogar Just die already",
    completed: false
};
console.log(todo3);
const todo4 = {
    title: "começar Read dead redemption",
    completed: false
};
console.log(todo4);
