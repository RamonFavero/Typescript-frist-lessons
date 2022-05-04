"use strict";
const tlou = {
    title: "The Last of Us",
    desciption: "The best game in the world!",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title) => {
        console.log(`Similar game to ${title}: Uncharted, A Plage Tale, Metro`);
    }
};
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
const leftbehind = {
    title: "The Last of US - Left Behind",
    desciption: "You play as Ellie before the original game.",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "New characters"]
};
class CreateGame {
    constructor(t, d, g) {
        this.title = t;
        this.desciption = d;
        this.genre = g;
    }
}
