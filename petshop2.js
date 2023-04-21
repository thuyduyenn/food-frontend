
const Food = [
    {
        image:"./image/phở.jpg",
        name:"Phở",
        price:35000,
        type:"sang",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/banhxeo.jpg",
        name:"Bánh xèo",
        price:30000,
        type:"sang",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/bunbohue.jpg",
        name:"Bún bò Huế",
        price:35000,
        type:"sang",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/hủ tiếu .jpg",
        name:"Hủ tiếu",
        price:25000,
        type:"sang",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/banhcanh.jpg",
        name:"Bánh canh",
        price:30000,
        type:"sang",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/banhmi.jpg",
        name:"Bánh mì",
        price:15000,
        type:"sang",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/bundaumamtom.jpg",
        name:"Bún đậu mắm tôm",
        price:45000,
         type:"sang",
         text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/bunoc.jpg",
        name:"Bún ốc",
        price:25000,
        type:"sang",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/bunrieu.jpg",
        name:"Bún riêu",
        price:30000,
        type:"sang",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/bunthitnuong.jpg",
        name:"Bún thịt nướng",
        price:20000,
        type:"sang",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/banhbaochien.jpg",
        name:"Bánh bao chiên",
        price:35000,
        type:"vat",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/banhtrancuon.jpg",
        name:"Bánh tráng cuốn",
        price:25000,
        type:"vat",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/banhtrannuong.jpg",
        name:"Bánh tráng nướng",
        price:15000,
        type:"vat",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/banhtrantron.jpg",
        name:"Bánh tráng trộn",
        price:25000,
        type:"vat",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/chao.jpg",
        name:"Cháo",
        price:10000,
        type:"sang",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/chedauden.jpg",
        name:"Chè đậu đen",
        price:20000,
        type:"nuoc",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/chethai.jpg",
        name:"Chè thái",
        price:20000,
        type:"nuoc",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/trabidao.jpg",
        name:"Trà bí đao",
        price:20000,
        type:"nuoc",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/trachanh.jpg",
        name:"Trà chanh",
        price:10000,
        type:"nuoc",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/tradao.jpg",
        name:"Trà đào",
        price:25000,
        type:"nuoc",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    {
        image:"./image/trasua.jpg",
        name:"Trà sữa",
        price:20000,
        type:"nuoc",
        text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?",

    },
    
]

let foodBoxContainer = document.querySelector(".food-menu .food-box-container");
foodBoxContainer.innerHTML ="";
Food.forEach(item => {
    let food = document.createElement("div")
    food.classList.add("food")
      food.innerHTML = `
      <div class="food-img">
      <img src="${item.image}">
  </div>
  <div class="food-content">
      <h3>${item.name}</h3>
      <div class="amout"><span>${item.price}</span><sup>đ</sup></div>
  </div>
  <div class="btn-2">
      <button id="btn-2" class="read">Read more..</button>
      <button id="btn-2" class="button">Order now</button>
  </div>
      `;
      foodBoxContainer.appendChild(food) 
    //   press(foodBoxContainer);
  

    
})




let listMenuBtn = document.querySelectorAll(".list-menu div")
listMenuBtn.forEach(item => {
    item.addEventListener("click", e =>{
        foodBoxContainer.innerHTML ="";
        Food.forEach(element => {
            if (item.getAttribute("type")=== element.type){
                let food = document.createElement("div")
                food.classList.add("food")
                food.innerHTML = `
                <div class="food-img">
                <img src="${element.image}">
            </div>
            <div class="food-content">
                <h3>${element.name}</h3>
                <div class="amout"><span>${element.price}</span><sup>đ</sup></div>
            </div>
            <div class="btn-2">
                <button id="btn-2">Read more..</button>
                <button id="btn-2" class="button">Order now</button>
            </div>
                `;
                foodBoxContainer.appendChild(food)

            }
        })


    })
})
let menuBtn = document.querySelector(".menu")
menuBtn.addEventListener("click",()=> {
    foodBoxContainer.innerHTML ="";
    Food.forEach(item => {
        let food = document.createElement("div")
        food.classList.add("food")
          food.innerHTML = `
          <div class="food-img">
          <img src="${item.image}">
      </div>
      <div class="food-content">
          <h3>${item.name}</h3>
          <div class="amout"><span>${item.price}</span><sup>đ</sup></div>
      </div>
      <div class="btn-2">
          <button id="btn-2">Read more..</button>
          <button id="btn-2" class="button">Order now</button>
      </div>
          `;
          foodBoxContainer.appendChild(food)
          
        
    })
    
})
let orderBtn = foodBoxContainer.querySelectorAll(".button")
// console.log(orderBtn)

orderBtn.forEach(item => {
   
    item.addEventListener('click', e => {
        let pos = e.target.parentElement.parentElement;
        orderBtn.forEach(element => {
            element.parentElement.parentElement.classList.remove('border')
        })
        pos.classList.add("border")
        let productName= pos.querySelector("h3").innerText;
        let productImg = pos.querySelector(".food-img img").src
         let productPrice = pos.querySelector(".amout span").innerText
        //  console.log(productName,productImg,productPrice)
         check(productName)
        
         addReadMore(productName,productImg,productPrice)
         addCart(productName,productImg,productPrice)



        
    })
})
function check(h){
     let listCart = letBoxContainer.querySelectorAll(".left-box")
    //  console.log(listCart)
    listCart.forEach(item => {
        if(item.querySelector("#name").innerText == h) throw alert("Sản phẩm đã có trong giỏ hàng");
    })
}
function cartLength(g){
 
    let heartCart = document.querySelector(".header-cart p")
    heartCart.innerText = g.length;


}
function addReadMore(a,b,c) {
  let rightContainer = document.querySelector(".right-container .food-box-container")
  rightContainer.innerHTML = `
         <div class="food-box">
                
                <div class="food-image">
                    <img src="${b}">
                </div>
                <div class="food-content">
                    <h3>${a}</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, placeat?</p>
                    <div class="amout"><span>${c}</span><sup>đ/sp</sup></div>
                </div>
               

            </div>
            
  `;



}
let letBoxContainer = document.querySelector(".left-box-container");
     letBoxContainer.innerHTML = "";
function addCart(d,e,f){
     let cartIcon = document.createElement("div");
     cartIcon.classList.add("left-box")
     cartIcon.innerHTML = `
                   <div class="left-image">
                        <img src="${e}">
                    </div>
                    <div class="left-content">
                          <div class="left-name">
                            <p id="name">${d}</p>
                            <p id="price"><span>${f}</span></p>
                          </div>
                          
                    </div>
                    <input type="number" value="1" min="1">
                    <a>xoá</a>
     `;
     letBoxContainer.appendChild(cartIcon)

     let deleteBtn = letBoxContainer.querySelectorAll(".left-box")
    //  console.log(deleteBtn)
    cartLength(deleteBtn)
    deleteCart(deleteBtn)
    addDeal();
  


     
    
    
}

let heartCartBtn = document.querySelector(".header-cart");
heartCartBtn.addEventListener("click", () => {
        let leftCart = document.querySelector(".left-cart")
        let lengthT = letBoxContainer.querySelectorAll(".left-box");
        let lengthNumber =lengthT.length
        
        if(leftCart.style.display="none" && lengthNumber > 0){
            leftCart.style.display ="block"
        }else {
            leftCart.style.display ="none"
        }
})
//delete car
function  deleteCart(t){
    deleteCartLength = t.length;
    // console.log(deleteCartLength)
    t.forEach(item => {
       let cart = item.querySelectorAll("a");
    //    console.log(cart)
         cart.forEach(element => {
               element.addEventListener("click", e => {
                    let posDelete = e.target.parentElement
                    
                    posDelete.remove()
                   
                  
                  
               })
         })
    })
}
 let readBtn = foodBoxContainer.querySelectorAll(".read")

readBtn.forEach(item => {
    item.addEventListener("click", e=>{
        let pos = e.target.parentElement.parentElement;
        let productName= pos.querySelector("h3").innerText;
        let productImg = pos.querySelector(".food-img img").src
        let productPrice = pos.querySelector(".amout span").innerText
        addReadMore(productName,productImg,productPrice)
    })
})
//redirect
let btn = document.querySelector(".left-cart button")
 let leftCart =  document.querySelector(".left-cart")
let submit = document.querySelector(".submit")
let rightContainer = document.querySelector(".right-container")
btn.addEventListener("click", ()=> {
         submit.style.display="block";
         rightContainer.style.display="none"
         leftCart.style.display="none"

})
let  submitBoxContainer = document.querySelector(".submit-box-container");
   submitBoxContainer.innerHTML="";
function addDeal(){
    var cartItem = document.querySelectorAll(".left-box-container .left-box")
    submitBoxContainer.innerHTML="";
    cartItem.forEach(item => {
        let submitBox = document.createElement("div");
        submitBox.classList.add("submit-box")
        let image = item.querySelector(".left-image img").src
        let name = item.querySelector("#name").innerText
        let price = item.querySelector("#price").innerText
        submitBox.innerHTML = `
            <div class="submit-image">
               <img src="${image}">
            </div>
            <div class="submit-content">
             <h3>${name}</h3>
             <p><span class="price">${price}</span>đ<sup>/sp</sup></p>
           </div>
          <input type="number" value="1" min="1" class="input-value">
           <a class="xoa">xoá</a>
        `;
        submitBoxContainer.appendChild(submitBox)
    })
    cartTotal();
    deleteCart2();
 

}
//cart total
function cartTotal(){
       var cartItem = document.querySelectorAll(".submit-box-container .submit-box")
       var totalC = 0;
       for(var i= 0; i<cartItem.length;i++){
           let productPrice = cartItem[i].querySelector(".price").innerText
            let inputValue = cartItem[i].querySelector(".input-value").value
            let totalA = productPrice *inputValue
            totalC = totalC +totalA;
            // console.log(totalC )
       }
       let result = document.querySelector(".submit-total p span")
       result.innerText = VND.format(totalC)
       inputChange()
      
        
       
}


///Gửi
let submitBtn = document.querySelector("#submit")
let  submitRightBottom = document.querySelector(".submit-right-bottom");
submitBtn.addEventListener("click", ()=> {
    submitRightBottom.style.display="block"
})
//change input
function inputChange(){
    var cartItem = document.querySelectorAll(".submit-box-container .submit-box")
    for(i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
             cartTotal()
        })
    }
}
function deleteCart2(){
    var cartItem = document.querySelectorAll(".submit-box-container .submit-box")
    for (var i= 0;i<cartItem.length;i++){
        var deleteCart = document.querySelectorAll(".xoa")
       
     
        deleteCart[i].addEventListener("click",(e)=> {
               let pos = e.target.parentElement
             
               pos.remove()
               cartTotal()
        })
       
        
    }
}

//quy ước tiền tệ

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  //comeback 
  let comeBack = document.querySelector(".comeback")
  comeBack.addEventListener("click",()=> {
    submit.style.display="none";
    rightContainer.style.display="block"
    leftCart.style.display="block"
         
  })








