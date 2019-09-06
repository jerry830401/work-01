import $ from 'jquery'
import 'bootstrap'
import '../css/index.scss'
import { moviesData, moviesInfoData } from './data.js'

let movies = moviesData.map((item) => `
    <div class="col-xl-4 col-md-6 col-12">
        <a href="movie_info.html?id=${item.id}">
            <img src="./img/movie/${item.img}.jpg" width="100%" >
        </a>
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



    let url = location.href;
    let parameter = {};
    if (url.indexOf('?') != -1) {

        let ary = url.split('?')[1].split('&');

        for (let i = 0; i <= ary.length - 1; i++) {
            parameter[ary[i].split('=')[0]] = ary[i].split('=')[1]
        }
    }
    console.log(parameter)

    // get param
    let movie_info = {}
    for (let i = 0; i < moviesInfoData.length; i++) {
        if (String(moviesInfoData[i].id) === parameter.id) {
            console.log(moviesInfoData[i])
            movie_info = moviesInfoData[i]
        }
    }

    console.log(movie_info)


    $('#movie_info_img').append(
        `<img src="./img/movie/${movie_info['img']}.jpg" width="100%" ></img>`
    )

    $('#movie_info_plot').append(
        `${movie_info['plot']}`
    )

    $('#movie_info_video').append(
        `<div class="col-xl-4 col-md-6 col-12">
            <iframe width="100%" src="${movie_info['video'][0]}"></iframe>
        </div>
        `
    )

})