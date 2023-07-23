
// let img = document.querySelector(`image`);
// let text = document.querySelector(`description`);
// let title = document.querySelector(`title`);

    let img = document.getElementById("img");
    let title = document.getElementById("title");
    let text = document.getElementById("text");
    let card = document.getElementById("card");

    



function getData(){

        let promesa= fetch("https://fakestoreapi.com/products/", {
            method: "GET"
        });
        promesa.then( (response)=> {
            response.json()//intentará convertir todo a un json
            .then((data)=>{
                createCards(data);
            })
            .catch((error)=>{
                console.log("Problema en el JSON", error);
            });
        })
        .catch((error)=> {
            console.log(error, "Ocurrió un error en la solicitud");
        });

} //getData
getData();

function createCards(data){
    data.forEach(producto => {

        console.log(producto)

        
        card.insertAdjacentHTML("afterbegin",`<div class="card text-center" id= "card" style="width: 18rem;">
        <img src= ${producto.image} id= "img" class="card-img-top" alt="...">
        <div class="card-body" >
            <h5 class="card-title" id="title">${producto.title}</h5>
            <p class="card-text" id="text">${producto.description}</p>
        </div>`);

        


        
        
    });
}//create cards


