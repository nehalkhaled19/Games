import { Displaydata } from "./ui.module.js";


export let Detailes = []

export class GameDetailse {
    constructor() {
        this.getDetailes()
        this.close()

    }
    async getDetailes(id) {

        $(document).ready(function () {
            $("#loading").fadeOut(3000);
        });
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c49f52e7e0msh52175db6b4652cfp10c634jsn8dca6b68ec52',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let myReq = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
        let data = await myReq.json();
        Detailes = [data]
        new Displaydata().displayDetailes()
    }
    close() {
        $("#close").click(function () {
            $("#show").css("display", "block")
            $("#detailes").css("display", "none")
        })
    }
}