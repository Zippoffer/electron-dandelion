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
    // console.log(JSON.parse(this.responseText))
    const data = JSON.parse(this.responseText)
    // data.annotations.forEach(x=>{x.categories.forEach((y,i)=>console.log(y,i))})
    data.annotations.forEach(x=>console.log(x))
  })
})

