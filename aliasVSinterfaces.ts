// TYPE ALIAS

// Definition=======================
type GameT = {
    title: string;
};

type DLCT = {
    extra:string;
};
//////////////interface Definition/////////////

interface GameI {
    titleI:string;
};

interface DLCI{
    extraI:string;
};

// Intersection=====================

type GameCollectionT = Game & DLCT;

/////////// Interface Intersection /////////////////////

interface GameCollectionI extends GameI, DLCI {};

// Implements========================

class CreateGameT implements GameCollection {};

///////////Interface Implement ///////////////

class CreateGameI implements GameCollectionI {};

// Function Declaration===========================

type getSimilarsT = (title:string) => void;

/////////// Interface Function Declaration /////////////

interface getSimilarsI {
    (title:string): void;
}

// ====== Diference bethen Alias and Interface ===== //

//Alias permite declarar tipos primitivos
type IDT = string | number;
//Interface NAO declara tipos primitivos
interface ID extends number {}


//Alias pode declarar tuplas
type TupleT = [number,number];
[1,2] as TupleT;
//Interface NAO declara tuplas
interface Tuple {
    0: number;
    1: number;
};
[1,2,3,4,5,6] as Tuple;

//Alias NAO declara mais de 1 escopo
type JQearyT = {a:string};
type JQearyT = {b:string};
//Interface PODE ter multiplas declaraçoes e podem ser unidas
interface JQearyI {
    a:string;
}
interface JQearyI {
    b:string;
}
const $: JQearyI = {
    a:"fii",
    b:"foo"
}
