const products=[{id:1,name1:'Lenovo',discription:'Ram-4GB gen-11th p-i3,Grphics-4GB',price:20,imglink:''},
            {id:2,name1:'Dell',discription:'Ram24GB gen-11th p-i3,Grphics-2GB',price:20,imglink:''},
            {id:3,name1:'Asuse',discription:'Ram-4GB gen-11th p-i3,Grphics-4GB',price:20,imglink:''},
            {id:4,name1:'HP',discription:'Ram-8GB gen-11th p-i5,Grphics-4GB',price:20,imglink:''}];

products_Container = document.getElementById('productsContainer');


products.forEach(element=>{
    const product =  document.createElement('div');
    product.className = 'card';
    product.style.width = '18rem';
    product.innerHTML = `
                        <div class="card-body">
                        <h5 class="card-title">${element.name1}</h5>
                        <p class="card-text">${element.discription}</p>
                        <p>Price:${element.price}</p>
                        <button class="btn btn-primary" onclick="addToCart(${element.id});">Add To Cart</button>
                        `;
    products_Container.appendChild(product);
})

cart=[];
cartP = document.getElementById('cartProducts');



function addToCart(id){
   let newProduct =  products.find(elm =>elm.id == id);
   console.log(newProduct);
   if(newProduct){
            cart.push(newProduct);
        }
    console.log(cart);
    document.getElementById('pCount').innerHTML = cart.length;
    
}

cart.forEach(e=>{
    cartP.innerHTML = `
                    <p>${e.name1}    ${e.price}</p>
                    `
})

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>