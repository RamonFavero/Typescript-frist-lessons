// boolean (true / false)
let isOpen: boolean;
isOpen = true
// isOpen = "<< check the error"

// string ('foo', "foo", `foo`)
let message: string
message = 'foo' // "foo" // `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: string[]
items = ["foo","foo","foo"]
// OR
let values: Array<number>
values = [1,2,3]

// tuple 
let title: [number, string, boolean]
title=[1,"foo", true]

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (terror da tipagem)
let coisa: any
coisa = [1, true,"foo",'foo']

// void (is going to return void event if i dont type it, 'foo' was never defined)
function logger():void {
    console.log('foo');
}

// null | undefined
type Bla = string | undefined

// never
function error():never {
    throw new Error("error");
}

// object 
let cart: object;

cart = {
    key:"fi"
}

// TYPE INFERENCE (when type is already defined by default)
let message2 = "mensagem definida"
// message2 = 1 //< veja o erro
message2= "string nova"

window.addEventListener('click', (e)=>{
    console.log(e.target); // < typing e. shows every possible use of mouseEvent
    // console.log(e.foo); 
    
});