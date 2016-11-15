import $ from 'jquery';
import {router, goto} from './router';
import homeTpl from './templates/home.hbs';
import contactTpl from './templates/contact.hbs';
import notFoundTpl from './templates/not-found.hbs';
import magnusTpl from './templates/magnus.hbs';
import sergeyTpl from './templates/sergey.hbs';



$('a').on('click', function(){
  let url = $(this).attr('href');

  if($(this).attr('rel') != "download" && $(this).attr('rel') != "external"){
    goto(url);
    return false;
  }

})

const $app = $('#app');

function index() {
  $app.html(homeTpl());
}

function contact() {
  $app.html(contactTpl());
}

function player(partString){
  switch(partString){
    case "magnus":
      $app.html(magnusTpl());
      break;
    case "sergey":
      $app.html(sergeyTpl());
      break;
  }
}

function notFound() {
  $app.html(notFoundTpl());
}


router('/contact', contact);
router('/players/:player', player);
router('/players/:player/test', player);
router('/', index);
router('*', notFound);


$(document).ready(goto(window.location.pathname))

$(window).bind('popstate', function(e){
  e.preventDefault();
  if(e.state !== null){
    goto(e.originalEvent.state)
  }

})