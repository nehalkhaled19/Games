import {Home,myData} from "./games.module.js";
import {Detailes} from "./details.module.js";


export class Displaydata {
    constructor() {
    }
    displayGames() {
        let temp = ""
        myData.forEach((e) => {
            temp += ` <div class=" f new col-lg-3 col-md-6"  id="${e.id}">
            <div class="border d border-1 rounded-3 border-n">
              <div class="mx-3">
                <a href="#" class="text-decoration-none">
                <div class="fix">
                  <img src="${e.thumbnail}" class="w-100" alt="game_img">
                  <div class="d-flex py-2 mt-2 align-items-center justify-content-between text-white">
                    <h6 class="game-name">${e.title}</h6>
                    <button class="btn  free btn-info rounded-3 text-white">Free</button>
                  </div>
                  <div class="d-flex align-items-center">
                  <p>${e.short_description}</p>
              </div>
              </div>
              </div>
              <div class="  border-top border-2 border-n">
                <div class="mx-3 py-3  type d-flex justify-content-center">
                  <button class="btn de btn-info rounded-2 p-1">${e.genre}</button>
                  <button class="btn btn-info rounded-2 p-1 ms-auto">${e.platform}</button>
                </div>
              </div>
              </a>
    
            </div>
          </div>`
        });
        document.getElementById("myRow").innerHTML = temp
        $(".f").addClass(".new")
        new Home().showDetailes()
    }
    displayDetailes() {
        let temp = ""
        Detailes.forEach((e) => {
            temp += `<div class="col-lg-4">
            <div>
              <img src="${e.thumbnail}" class="w-100 mb-4" alt="image for game">
            </div>
          </div>
          <div class="col-lg-8">
           
            <h3 class="text-white mb-4">
              Title: ${e.title}
            </h3>
            <p>Category:
              <span class="fw-bolder bg-info p-1 rounded-2 ms-1">${e.genre}</span>
            </p>
            <p>Platform:
              <span class="fw-bolder bg-info p-1 rounded-2 ms-1">${e.platform}</span>
            </p>
            <p>Status:
              <span class="fw-bolder bg-info p-1 rounded-2 ms-1">${e.status}</span>
            </p>
            <p>${e.description}</p>
            <a href="${e.game_url}" target="_blank">
            <button class="btn btn-outline-warning text-white"> Show Game</button>
            </a>
          </div>`
        });
        document.getElementById("forDetailes").innerHTML = temp

    }
}