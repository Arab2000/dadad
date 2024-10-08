function getApi(){
    var Xhttp=new XMLHttpRequest;
    Xhttp.onreadystatechange=function(){
        if(this.readyState=4 && this.status==200){
            var task = Xhttp.responseText;
            var item=JSON.parse(task);
            var element=item.products;
            var result="";
            for (var i = 0; i < element.length; i++) {
                var cartona = `<div class="col-md-4 mb-3 text-center">    
                <img class="w-100" style="    height: 350px;" src="${element[i].image[i]}">
                <h4>${element[i].title}</h4>
                <h5>${element[i].id}</h5>        
                <h5>${element[i].price}</h5>        
                </div>`;
                result =  result +cartona;
                document.querySelector(".test").innerHTML = result;
            }
            Xhttp.send();
            Xhttp.open("GET","https://jsonplaceholder.typicode.com/photos",true);
}
}
        }
    
getApi();