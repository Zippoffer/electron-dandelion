// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const button = document.createElement('button')
button.textContent = 'hello world'
button.className = 'btn'
document.body.appendChild(button)
