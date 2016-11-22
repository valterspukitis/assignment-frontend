import $ from 'jquery'

const routes = new Map()

function init(){
  //set eventhandlers
  $(document).on('click', 'a', handleLinkEvent);
  $(window).on('popstate', handlePopStateEvent);

  const path = window.location.pathname //gets uri of current page
  goto(path)
}

function handleLinkEvent(event) {
  var rel = $(event.currentTarget).attr('rel')

  if(rel === 'download' || rel === 'external' || $(event.currentTarget).get(0).host !== location.host)
  {
    return
  }

  event.preventDefault()

  var href = $(event.currentTarget).attr('href')

  goto(href)
}

function handlePopStateEvent(event) {
  goto(history.state)
}

export default function(route, fn) {
  // register new route
  if(route && fn){
    routes.set(route, fn)
    return
  }
  // init if no params
  if(!route && !fn){
    init()
  }
}

function goto(route) {
  let regex = /(\/players\/)([a-z0-9]+)/i
  let name = ""

  //if route changed, add it to the history
  if (route != history.state) {
    history.pushState(route, "", route);
  }

  //if route contains a player
  if(route.match(regex))
  {
    //player name
    name = regex.exec(route)[2]
    route = route.replace(name,":player")
  }

  //if route doesnt exist
  if(!routes.has(route))
    route = '*'

  //get content
  let content = routes.get(route)
  content(name)
}