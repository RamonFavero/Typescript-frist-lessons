// S > State
// T > Type
// K > Key
// V > Value
// E > Element

///// as letras sao opcionais 

function useState<S extends number | string = string>() {  // < 'extends' bloqueia qualquer outro state
    let state: S;                                 // depois de definido nao pode mudar mais

    function getState() {
        return state;
    }
    function setState(newState: S) {
        state = newState;
    }
    return {getState, setState};
}

const newState = useState();

newState.setState("foo");
console.log(newState.getState());

newState.setState(123);
console.log(newState.getState());

newState.setState("bla");
console.log(newState.getState());
