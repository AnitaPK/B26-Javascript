// const user=[{id:1,username:'john',password:'john'},
//             {id:1,username:'Tom',password:'tom'}];

// loginCheck1 = document.getElementById('loginCheck')
// loginCheck1.addEventListener('click',()=>{
//        userName1 =  document.getElementById('usrName').value;
//        password = document.getElementById('password').value;

//        console.log(userName1);
//        user.forEach(elmn =>{
//             if(elmn.username !== userName1){
//                 alert('incorrect Username or password');
//             }else{
//                 window.open('./homePage.html');
//             }
//         })

// })














const products = [{id:1, name1:'LAVA', Discription:'display-12 RAM-4 CAMERA-12',price:10},
            {id:2, name1:'NOKIA', Discription:'display-12 RAM-4 CAMERA-12', price:20},
            {id:3, name1:'OPPO', Discription:'display-12 RAM-4 CAMERA-12', price:30}]

ContainerProducts = document.getElementById('ContainerProducts');

products.forEach(element => {
            let newProduct = document.createElement('div');
            newProduct.className= 'card';
            newProduct.style.width = '18rem';
            newProduct.innerHTML = `<div class="card-body">
                                    <h5 class="card-title">${element.name1}</h5>
                                    <p class="card-text">${element.Discription}</p>
                                    <p class="card-text">${element.price}</p>
                                    <a href="#" class="btn btn-primary" type="button" onclick="addToCart(${element.id});"> Add To Cart</a>
                                    </div>`
            ContainerProducts.appendChild(newProduct);
        });

cart=[];

function showCartProducts(){
    let showCartProducts1 = document.getElementById('showCartProducts');
    showCartProducts1.innerHTML='';
    totalPrice=0;
    cart.forEach(elmn=>{
        cartProduct = document.createElement('div');
        // cartProduct.innerHTML='';
        cartProduct.innerHTML=`
                                <h4>${elmn.name1}</h4>
                                <p>${elmn.price}</p>`
        showCartProducts1.appendChild(cartProduct);
        totalPrice+=elmn.price;
        document.getElementById('totalPrice').innerHTML = totalPrice;
    })
}
function addToCart(id){
    addedProduct = products.find(p => p.id === id)
    console.log(addedProduct);
    cart.push(addedProduct);
    console.log(cart);

    document.getElementById('productCount').innerHTML= cart.length;
    showCartProducts();
}








// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>