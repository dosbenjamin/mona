export const $ = (selector, scope = document) => scope.querySelector(selector)
export const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector))
export const on = (event, callback, scope = document) => scope.addEventListener(event, callback)
