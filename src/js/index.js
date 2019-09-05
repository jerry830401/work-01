import $ from 'jquery'
import 'bootstrap'
import '../css/index.scss'
import { moviesData } from './data'

let movies = moviesData.map((item) => `
    <div class="col-xl-4 col-md-6 col-12">
        <img src="./img/movie/${item.img}.jpg" width="100%">
    </div>
`).join("")

$(document).ready(() => {
   
    $('#header').append(`
        <nav class="navbar navbar-expand-sm navbar-light">
            <a class="navbar-brand" href="index.html" id="logo">MCU</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
  
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="introduction.html">簡介</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="character.html">復仇者</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="movie.html">電影</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">電視劇</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>    
    `)

    $('.carousel').carousel({
        interval: 5000
    });

    $('#movie').append(movies)
})