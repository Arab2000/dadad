// document.querySelector("#api").addEventListener("click",getApi);
// function getApi(){
//     var Xhttp = new XMLHttpRequest;
//     Xhttp.onreadystatechange = function (){
//         if (this.readyState==4 && this.status==200){
//             document.querySelector("#demo").innerHTML =this.responseText;
//         }
//     }
// Xhttp.open("https://jsonplaceholder.typicode.com/photos",true);
// Xhttp.send();
// }
// fetch("https://jsonplaceholder.typicode.com/photos")
// .then(function(item){
//     return item.json()
// })
// .then(function(element){

//     document.querySelector("img").src=element[1].title;
// })
// async function getApi(){
//     var task = await fetch('https://jsonplaceholder.typicode.com/photos');
//     var element = await task.json();
// document.querySelector("img").src=element[0].url;
// }
// getApi();
// function getApi(){
//     var Xhttp=new XMLHttpRequest;
//     Xhttp.onreadystatechange=function (){
//         if (this.readyState==4&&this.status==200){
// Xhttp.responseText
//         }
//     }
// Xhttp.open("GET","https://jsonplaceholder.typicode.com/photos",true);
// Xhttp.send();
// // }
// fetch("https://jsonplaceholder.typicode.com/photos")
// .then(function(Xhttp){
// return Xhttp.json()
// })
// .then(function(element){
// document.querySelector("img").src=element[0].url
// document.querySelector("h2").innerHTML=element[0].title
// document.querySelector("h4").innerHTML=element[0].id
// }
// )
(async function getApi() {
    var Xhttp = await fetch("https://jsonplaceholder.typicode.com/photos");
    var element = await Xhttp.json();
    var result = ""
    for (var i = 0; i < element.length; i++) {
        var cartona = `<div class="col-md-4 mb-3 text-center">    
                     <img class="w-100" src="${element[i].url}">
                     <h4>${element[i].title}</h4>
                     <h5>${element[i].id}</h5>        
                     </div>`;
        result =  result +cartona;
    }
    document.querySelector(".test").innerHTML = result;
}

)()


