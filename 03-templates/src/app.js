import $ from 'jquery'
import router from './router'
import homeTpl from './templates/home.hbs'
import magnusTpl from './templates/magnus.hbs'
import sergeyTpl from './templates/sergey.hbs'
import contactTpl from './templates/contact.hbs'
import notFoundTpl from './templates/not-found.hbs'

const $app = $('#app')


const $chessplayers = {
  'magnus': {
      name: 'Magnus Carlsen',
      image: 'https://cdn.worldchess.com/static/img/ny2016v2/carlsen.png',
      description: 'Carlsen is a former chess prodigy. He became a Grandmaster in 2004, at the age of 13 years, 148 days. This made him the third-youngest grandmaster in history.'
  },
  'sergey': {
      name: 'Sergey Karjakin',
      image: 'https://cdn.worldchess.com/static/img/ny2016v2/karjakin.png',
      description: 'On March 28, 2016, Sergey Karjakin became the Challenger to Magnus Carlsen in the World Chess Championship 2016 after winning the Candidates Tournament 2016 in Moscow.'
  }
}


function index() {
  $app.html(homeTpl())
}

function contact() {
  $app.html(contactTpl())
}

function players(ctx) {
  let tpl = () => {}
  switch (ctx.params.player) {
    case 'magnus':
      tpl = magnusTpl
      break;
    case 'sergey':
      tpl = sergeyTpl
      break;
  }
  $app.html(tpl())
}

function notFound() {
  $app.html(notFoundTpl())
}

router('/', index)
router('/players/:player', players)
router('/contact', contact)
router('*', notFound)
router()