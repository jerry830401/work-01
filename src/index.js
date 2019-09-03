import config from './config'
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
    $(".carousel").carousel({
        interval: 5000
    });

    $('#gallery').append(`<div class="row">${gallery}</div>`)
})