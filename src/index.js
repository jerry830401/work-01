import config from './config'
import $ from 'jquery'
import 'bootstrap';
import './index.scss'

let array = ['b1', 'b2', 'b3', 's1', 's2', 's3']
let gallery = array.map((item) => `<div class="col-4"><img src="./img/gallery/${item}.jpg"/></div>`).join("")

$(document).ready(() => {
    $(".carousel").carousel({
        interval: 5000
    });

    $('#gallery').append(`<div class="row">${gallery}</div>`)
})