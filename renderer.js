'use strict'

const token  = require('./key')


const button = document.querySelector('#button')
const input = document.querySelector('#input')

button.addEventListener('click', function() {
  let url = input.value
  let test = new XMLHttpRequest()
  test.open('GET', `https://api.dandelion.eu/datatxt/nex/v1/?url=${url}&include=types%2Cabstract%2Ccategories&token=${token}`)
  test.send()
  test.addEventListener('load', function() {
    console.log(this.responseText)
  })
})
