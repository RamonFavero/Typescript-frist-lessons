"use strict";
// S > State
// T > Type
// K > Key
// V > Value
// E > Element
///// as letras sao opcionais 
function useState() {
    let state; // depois de definido nao pode mudar mais
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
newState.setState("foo");
console.log(newState.getState());
newState.setState(""); // can not be a number
console.log(newState.getState());
newState.setState("bla");
console.log(newState.getState());
