const clickit=document.getElementById('click-it').onclick=()=>{
const username=document.getElementById('username').value
const password=document.getElementById('password').value

fetch('/get',{
method:'POST',
headers:{
'Content-Type': 'application/json'
},
body:JSON.stringify({
username, password
})
}).then(res=>res.json()).then(get=>{
console.log(get)
})
}


