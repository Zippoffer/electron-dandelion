'use strict'

const token  = require('./key')


const button = document.querySelector('#button')
const input = document.querySelector('#input')
const outputDiv = document.querySelector('#holder')

button.addEventListener('click', function() {
  let url = input.value
  let test = new XMLHttpRequest()
  test.open('GET', `https://api.dandelion.eu/datatxt/nex/v1/?url=${url}&include=types%2Cabstract%2Ccategories&token=${token}`)
  test.send()
  test.addEventListener('load', function() {
    // console.log(JSON.parse(this.responseText))
    const data = JSON.parse(this.responseText)
    console.log(data)
    // data.annotations.forEach(x=>{x.categories.forEach((y,i)=>console.log(y,i))})
    let titleBar = `<div col s12><h1><a href=${data.url}>${data.url}</a></h1><p>${data.text}</div>`
    outputDiv.innerHTML += titleBar
    data.annotations.forEach(x => {
      let newCard = `
        <div class="col s4">
          <div class="card">
            <div class="card-image">
              <img src="${x.uri}">
              <span class="card-title">${x.title}</span>
            </div>
            <div class="card-content">
              <p>${x.abstract}</p>
            </div>
            <div class="card-action">
              <a href="${x.uri}">${x.uri}</a>
            </div>
          </div>
        </div>
      `
      outputDiv.innerHTML += newCard
    })
  })
})
