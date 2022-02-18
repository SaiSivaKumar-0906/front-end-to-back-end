const clickit=document.getElementById('click-it').onclick=()=>{
const username=document.getElementById('username').value
const password=document.getElementById('password').value
const one=document.getElementById('header').innerHTML="is it going to server"

fetch('/data',{
method:'POST',
headers:{
'Content-Type':'application/json'
},
body:JSON.stringify({
username, password, one
})
}).then(res => res.json()).then(data =>{
console.log(data)
})
}


