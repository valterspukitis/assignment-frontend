let arr = [];

export function router(path, callback) {
  path = (path === "/" ? /^\/$/m : path);
  var o = {regex: ((/:[a-z]*/g).test(path) ? makeRegex(path) : (path === "*" ? /\/\w+/ : new RegExp(path))), callback: callback};
  arr.push(o);
}

export function goto(url){
  for(var i=0; i < arr.length; i++){
    if(arr[i].regex.test(url)){
      var callback = arr[i].callback;
      break;
    }
  }

  if(url !== null && url.indexOf('players') !== -1){
    var surl = url.split("/");
    callback(surl[surl.length-1]);
  } else {
    callback();
  }

  if(window.history.state !== url){
    window.history.pushState(url, "", url);
  }

  return false;
}

function makeRegex(url){
  var arr = url.match(/:[a-z]*/g);
  var newURL = url.replace(arr[0], "[a-z](.*)");

  return new RegExp(newURL);
}