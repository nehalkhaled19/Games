
import { Displaydata } from "./ui.module.js";


import { GameDetailse } from "./details.module.js";


export let myData = []

export class Home {
    constructor() {
      
        this.navLink()
        this.scroll()
        this.showDetailes()
    }
    getdata = async function (type = "mmorpg") {
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
        let myReq = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`, options);
        let data = await myReq.json();
        myData = data
        new Displaydata().displayGames()
    }
    navLink = () => {
        $(".nav-link").click((e) => {
            // console.log(e.target);
            let n = e.target.type
            $('.active').removeClass('active');
            e.target.classList.add('active');
            $("#loading").fadeIn(0);
            this.getdata(n)
             }) 
        }


    
    showDetailes() {
        $(".f").click(function () {
            $("#show").css("display", "none")
            $("#detailes").css("display", "block")
            let id = $(this).attr("id")
            $("#loading").fadeIn(0);
            new GameDetailse().getDetailes(id)
        })
    }
    scroll() {
        $(window).scroll(function (e) {
            let nav = $("nav").offset().top
            let scrollTop = $(window).scrollTop()
            if (scrollTop > nav) {
                $("nav").removeClass("position-absolute")
                $("nav").removeClass("bottom-0")
                $("nav").addClass("sticky")
            }
            if (scrollTop < 192) {
                $("nav").removeClass("sticky")
                $("nav").addClass("position-absolute")
                $("nav").addClass("bottom-0")
            }
        })
    }
}