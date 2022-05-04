"use strict";
// boolean (true / false)
let isOpen;
isOpen = true;
// isOpen = "<< check the error"
// string ('foo', "foo", `foo`)
let message;
message = 'foo'; // "foo" // `foo ${isOpen}`
// number (int, float, hex, binary)
let total;
total = 0xff0;
// array (type[])
let items;
items = ["foo", "foo", "foo"];
// OR
let values;
values = [1, 2, 3];
// tuple 
let title;
title = [1, "foo", true];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (terror da tipagem)
let coisa;
coisa = [1, true, "foo", 'foo'];
// void (is going to return void event if i dont type it, 'foo' was never defined)
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error("error");
}
// object 
let cart;
cart = {
    key: "fi"
};
// TYPE INFERENCE (when type is already defined by default)
let message2 = "mensagem definida";
// message2 = 1 //< veja o erro
message2 = "string nova";
window.addEventListener('click', (e) => {
    console.log(e.target); // < typing e. shows every possible use of mouseEvent
    // console.log(e.foo); 
});
