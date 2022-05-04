interface Game {
    title:string;
    desciption:string;
    readonly genre:string; // < can only be used, never changed
    platform?:string[]; // < with a '?' declaration becomes optional 
    getSimilars?:(title:string) => void;
}

const tlou: Game = {
    title: "The Last of Us",
    desciption:"The best game in the world!",
    genre:"Action",
    platform:["PS3", "PS4"],
    getSimilars:(title:string) => {
        console.log(`Similar game to ${title}: Uncharted, A Plage Tale, Metro`);
        
    }
}
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title)
}


interface DLC extends Game {
    originalGame: Game;
    newContent:String[];
}

const leftbehind: DLC = {
    title:"The Last of US - Left Behind",
    desciption:"You play as Ellie before the original game.",
    genre:"Action",
    platform:["PS4"],
    originalGame:tlou,
    newContent:["3 hours story", "New characters"]
};

class CreateGame implements Game {
    title: string;
    desciption: string;
    genre: string;
constructor(t:string,d:string,g:string){
    this.title= t;
    this.desciption=d;
    this.genre=g;
}
}