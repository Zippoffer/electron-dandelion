// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const button = document.createElement('button')
button.textContent = 'hello world'
button.className = 'btn'
document.body.appendChild(button)



const token =  '1a959ab612494d869ddc155a790b44bb'
const url = 'http://www.reddit.com'

 




function reqListener () {
  console.log(JSON.stringify(this.responseText));
}

const apiCall = new XMLHttpRequest();
apiCall.addEventListener("load", reqListener);
apiCall.open("GET", `https://api.dandelion.eu/datatxt/nex/v1/?url=${url}&include=types%2Cabstract%2Ccategories&token=${token}`);
apiCall.send();



