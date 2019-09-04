import $ from 'jquery'
import 'bootstrap'
import '../css/index.scss'

// import b1 from './img/gallery/b1.jpg'
// import b2 from './img/gallery/b2.jpg'
// import b3 from './img/gallery/b3.jpg'
// import s1 from './img/gallery/s1.jpg'
// import s2 from './img/gallery/s2.jpg'
// import s3 from './img/gallery/s3.jpg'

// let array = [b1, b2, b3, s1, s2, s3]
// let gallery = array.map((item) => `<div class="col-4"><img src="${item}"/></div>`).join("")

$(document).ready(() => {
    // $('#header').append(`
    //     <div class="col-2" id="logo">
    //         <a href="index.html"><span>MCU</span></a>          
    //     </div>
    //     <div class="col-8" id="menu">
    //         <ul>
    //             <li><a href="introduction.html">簡介</a></li>
    //             <li><a href="character.html">復仇者</a></li>
    //             <li><a href="#">電影</a></li>
    //             <li><a href="#">電視劇</a></li>            
    //             <li><a href="#">道具</a></li>
    //         </ul>
    //     </div>
    //     <div class="col-2" id="tools">
              
    //     </div>
    // `)

    $('#header').append(`
        <nav class="navbar navbar-expand-sm navbar-light">
            <a class="navbar-brand" href="index.html" id="logo">MCU</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
  
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="introduction.html">簡介</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="character.html">復仇者</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">電影</a>
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

    // $('#gallery').append(`<div class="row">${gallery}</div>`)
})