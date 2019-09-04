import $ from 'jquery'
import 'bootstrap';
import './index.scss'

import b1 from './img/gallery/b1.jpg'
import b2 from './img/gallery/b2.jpg'
import b3 from './img/gallery/b3.jpg'
import s1 from './img/gallery/s1.jpg'
import s2 from './img/gallery/s2.jpg'
import s3 from './img/gallery/s3.jpg'

let array = [b1, b2, b3, s1, s2, s3]
let gallery = array.map((item) => `<div class="col-4"><img src="${item}"/></div>`).join("")

$(document).ready(() => {
    $('#header').append(`
        <div class="col-2" id="logo">
            <a href="index.html"><span>MCU</span></a>          
        </div>
        <div class="col-8" id="menu">
            <ul>
                <li><a href="introduction.html">簡介</a></li>
                <li><a href="#">人物</a></li>
                <li><a href="#">電影</a></li>
                <li><a href="#">電視劇</a></li>            
                <li><a href="#">道具</a></li>
            </ul>
        </div>
        <div class="col-2" id="tools">
              
        </div>
    `)


    $('.carousel').carousel({
        interval: 5000
    });

    // $('#gallery').append(`<div class="row">${gallery}</div>`)
})