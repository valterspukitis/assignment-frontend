import uuidGenerator from 'uuid';

export function es5() {
  var module = require('../utils')
  return module.uuid()
}

export function es6() {
    return uuidGenerator.v4();
}
