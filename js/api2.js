fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
.then(function(item){
return item.json()
})
.then(function(task){
   var element =task.recipes
    var result = ""
    for (var i = 0; i < element.length; i++) {
        var cartona = `<div class="col-md-4 mb-3 text-center">    
                     <img class="w-100" style="    height: 350px;" src="${element[i].image_url}">
                     <h4>${element[i].title}</h4>
                     <h5>${element[i].publisher}</h5>        
                     </div>`;
        result =  result +cartona;
    }
    document.querySelector(".test").innerHTML = result;
})