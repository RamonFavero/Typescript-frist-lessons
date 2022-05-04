// TYPE ALIAS

//Type Definition=======================
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

//Type Intersection=====================

type GameCollectionT = Game & DLCT & {content:boolean};

/////////// Interface Intersection /////////////////////

interface GameCollectionI extends GameI, DLCI {};

//Type Implements========================

// class CreateGameT implements GameCollection {};

///////////Interface Implement ///////////////

// class CreateGameI implements GameCollectionI {};

//Type Function Declaration===========================

type getSimilarsT = (title:string) => void;

/////////// Interface Function Declaration /////////////

interface getSimilarsI {
    (title:string): void;
}

// ====== Diference bethen Type and Interface ===== //

//Type permite declarar tipos primitivos
type IDT = string | number;
//Interface NAO declara tipos primitivos

//interface ID extends number {}


//Type pode declarar tuplas
type TupleT = [number,number];
[1,2] as TupleT;
//Interface NAO declara tuplas
interface Tuple {
    0: number;
    1: number;
};
[1,2,3,4,5,6] as Tuple;

//Type NAO declara mais de 1 escopo
// type JQearyT = {a:string};
// type JQearyT = {b:string};
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

//////////////// Type
// na maioria das vezes
// React - Props

////////////////Interfaces ////////////
// quando estiver criando bibliotecas é preferivel usar 
// Interfaces, pois sao mais extensiveis.preferivel para POO

