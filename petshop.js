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

let search = document.querySelector('#search')
let searchForm = document.querySelector('.search-login')
search.onclick = () => {
    searchForm.classList.toggle('active')
    cartForm.classList.remove('active')
    loginForm.classList.remove('active')
    menuForm.classList.remove('active')
}
   

  

let cart = document.querySelector('#cart')
let cartForm = document.querySelector('.cart')
cart.onclick = () => {
    searchForm.classList.remove('active')
    cartForm.classList.toggle('active')
    loginForm.classList.remove('active')
    menuForm.classList.remove('active')
}
let user = document.querySelector('#user')
let loginForm = document.querySelector('.login-form')
user.onclick = () => {
    searchForm.classList.remove('active')
    cartForm.classList.remove('active')
    loginForm.classList.toggle('active')
    menuForm.classList.remove('active')
}
let menu = document.querySelector('#menu')
let menuForm = document.querySelector('.nav-menu')
menu.onclick = () => {
    menuForm.classList.toggle('active')
    cartForm.classList.remove('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
}
window.addEventListener('scroll',function(){
    const header = document.querySelector('header')
    
    header.classList.toggle("sticky",window.scrollY > 0 )
})
let input = document.querySelector('.input')
let addIcon = document.querySelector('.add-icon')
input.onclick = () => {
    addIcon.classList.toggle('active')
} 
//let like = document.querySelector('.bx-like')
//like.onclick = () => {
    //like.classList.toggle('active')
//}
//let like = document.querySelectorAll('.bx-like')
//like.addEventListener("click",function(){
    //like.classList.toggle('active')
//})
///shop food
let shopContainer = document.querySelector(".food-box-container")
shopContainer.innerHTML = "";
Food.forEach(item => {
       let shopBox = document.createElement("div")
       shopBox.classList.add("food-box");
       shopBox.innerHTML = `
       <div class="icons">
       <a id="addCart" class="bx bxs-cart-add"></a>
       <a href="#" class="fa fa-eye-slash"></a>
       <a href="#" class="bx bxs-download bx-flip-horizontal"></a>
   </div>
   <div class="food-image">
       <img src="${item.image}">
   </div>
   <div class="food-content">
       <h3>${item.name}</h3>
       <div class="amout"><span>${item.price}</span><sup>đ</sup></div>
   </div>
   <div class="btn-2">
       <button id="btn-2" class="read-more">Read more..</button>
       <button id="btn-2" class="button">Order now</button>
   </div>
       `;
       shopContainer.appendChild(shopBox)


})
let readMoreBtn = document.querySelectorAll(".food-box-container .food-box")
for(var i =0; i < readMoreBtn.length; i++ ){
    let readMoreBtn1 = readMoreBtn[i].querySelectorAll(".read-more")
    readMoreBtn1.forEach(item=> {
        item.addEventListener("click",()=> {
            window.location.assign("helloword2.html")
        })
    })
}



//cart 
 const btn = document.querySelectorAll(".button")
//    console.log(btn)
   btn.forEach(function(button,index){
           //console.log(button,index)
           button.addEventListener("click",function(event){
                var btnItem = event.target
                // console.log(btnItem)
                var product = btnItem.parentElement.parentElement
                // console.log(product)
                
                var productImg = product.querySelector(".food-image img").src
                //console.log(productImg)
                var productName = product.querySelector(".food-content h3").innerText
                //console.log(productName)
                var productPrice = product.querySelector(".food-content .amout span").innerText
                //console.log(productPrice)
                //console.log(productImg,productName,productPrice)
                addCart(productImg,productName,productPrice)
           })
   })
   const btnCart = document.querySelectorAll("#addCart")
   //    console.log(btn)
      btnCart.forEach(function(button,index){
              //console.log(button,index)
              button.addEventListener("click",function(event){
                   var btnItem = event.target
                   // console.log(btnItem)
                   var product = btnItem.parentElement.parentElement
                //    console.log(product)
                   
                   var productImg = product.querySelector(".food-image img").src
                   //console.log(productImg)
                   var productName = product.querySelector(".food-content h3").innerText
                   //console.log(productName)
                   var productPrice = product.querySelector(".food-content .amout span").innerText
                   //console.log(productPrice)
                   //console.log(productImg,productName,productPrice)
                   addCart(productImg,productName,productPrice)
              })
      })
   
/*  addCart starts here */   
    function  addCart(productImg,productName,productPrice){
           var addtr = document.createElement('tr')
           var cartItem = document.querySelectorAll('tbody tr')
        //    console.log(cartItem)
           checkName(productName,cartItem)
           var trContent = '<tr><td style="display:flex;align-items: center;"><img style="width:90px;height:70px;" src="'+productImg+'" ><span class="title">'+productName+'</span></td><td><p><span class="total">'+productPrice+'</span><sup>đ</sup></p></td><td><input type="number" style="width:30px; outline:none;" value="1" min="1"></td><td style="cursor:pointer;" class="cart-delete">xoá</td></tr>'
           addtr.innerHTML = trContent
           var cartTable = document.querySelector('tbody')
           //console.log(cartTable)
           cartTable.append(addtr)
           cartTotal()
           deleteCart()

    }
    // /check function 
    function checkName(check,listCheck){
        listCheck.forEach(item => {
           if(item.querySelector(".title").innerText === check) throw alert("Sản phẩm đã có trong giỏ hàng");
               
   
        })

    }
//tính tổng tiền hàng
function cartTotal(){
    var cartItem = document.querySelectorAll('tbody tr')
    var totalC = 0 
    for (var i = 0; i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".total").innerHTML
        var totalA = inputValue*productPrice*1000
        totalC = totalA + totalC

    }
    var cartTotal = document.querySelector(".price-total span")
          cartTotal.innerHTML =totalC.toLocaleString('de-DE')
    inputChange()      
}
function deleteCart(){
     var cartItem = document.querySelectorAll("tbody tr")
     for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        //console.log(productT)
        productT[i].addEventListener("click",function(event){
                 var cartDelete = event.target
                 var cartItemR = cartDelete.parentElement

                 //console.log(cartItemR)
                 cartItemR.remove()
                 cartTotal()
                 
        })
        
     }
}
function inputChange(){
        var cartItem = document.querySelectorAll("tbody tr")
        for(i=0;i<cartItem.length;i++){
            var inputValue = cartItem[i].querySelector("input")
            inputValue.addEventListener("change",function(){
                 cartTotal()
            })
        }
}

function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
}
let box = document.querySelector(".search-login .box");

// // console.log(box)
box.innerHTML ="";
Food.forEach(item => {
     let box1 = document.createElement("div");
     box1.classList.add("box-1")
     box1.innerHTML = ` 
      <div class="search-image">
            <img src="${item.image}"  alt="">
      </div>
       <div class="search-name">${item.name}</div>
       <div class="search-price"><p><span>${item.price}</span>đ</p></div>
        <div class="search-button">
             <a  class="see-more">See more</a>
         </div>`
 box.appendChild(box1);
})
//see more


let readBox = document.querySelectorAll(".search-login .box .box-1")

readBox.forEach( item => {
     let seeMore = item.querySelector(".see-more")

            seeMore.addEventListener("click",(e)=> {
                 let pos = e.target.parentElement.parentElement
                //  console.log(pos)
                 let readImage = pos.querySelector(".search-image img").src
                 let readName = pos.querySelector(".search-name").innerText
                 let readPrice = pos.querySelector(".search-price p span").innerText
                  var tt = new Array(readImage,readName,readPrice)
                //   console.log(tt)
                sessionStorage.setItem("tt",JSON.stringify(tt));
                window.location.assign("helloword2.html")
          


                


     })
})

//search

let searchInput = document.querySelector(".search input")
searchInput.addEventListener("input", e => {
    let searchText = e.target.value.trim().toLowerCase()
    let searchTextFilter = removeVietnameseTones(searchText)
    // console.log(searchTextFilter)
    let listFood = document.querySelectorAll(".search-login .box .box-1");
    // console.log(listFood)
    listFood.forEach(item => {
        let listFoodText = item.innerText.toLowerCase();
        if(removeVietnameseTones(listFoodText).includes(searchTextFilter)){
            item.style.display="flex";
        
      

        } else {
            item.style.display="none";
   
        }
    })
  
  
})
//password


let seen = document.querySelector("#seen")
let inputType = document.querySelector(".box-eye")
seen.addEventListener("click", ()=> {
    if(inputType.getAttribute("type") == "password"){
           inputType.setAttribute("type","text")
           seen.setAttribute("class","fa fa-eye-slash")
    }else {
        inputType.setAttribute("type","password")
        seen.setAttribute("class","fa fa-eye")
    }

})
//press enter for comments
let commentsBoxContainer = document.querySelector(".comments-box-container")
commentsBoxContainer.innerHTML ="";
 var inputPress = document.querySelector(".input");
 inputPress.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
      let commentContent = inputPress.value
      let listStudent = localStorage.getItem("list-student") ? JSON.parse(localStorage.getItem("list-student")) : [] ;
      listStudent.push({
        comment: commentContent
      })
      localStorage.setItem("list-student",JSON.stringify(listStudent))
      let commentBox = document.createElement("div")
      commentBox.classList.add("comments-box")
       commentBox.innerHTML = `
             <div class="comments-box-sml">
                  <div class="comments-image">     
                      <img src="/image/anhnen.jpg">
                 </div>
          
             <div class="comments-content">
                  <h2>Đại Phong <span>1 tháng trước</span></h2>
                   <p>${commentContent}</p>                    <div class="comments-icon">
                       <i class='bx bx-like'></i>
                        <i class='bx bx-dislike' ></i>
                        <div class="rep">Phản hồi</div>
                   </div>
             </div>
           </div>
           <div class="comments-menu">
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
           </div>
             `;
    //   commentsBoxContainer.appendChild(commentBox)
      renderComments()
      inputPress.value =""

 
       
    }
  
});
function renderComments(){
    commentsBoxContainer.innerHTML ="";
    let listStudent = localStorage.getItem("list-student") ? JSON.parse(localStorage.getItem("list-student")) : [] ;
    listStudent.map((value,index)=> {
        
        commentsBoxContainer.innerHTML += `
        <div class="comments-box">
        <div class="comments-box-sml">
          <div class="comments-image">     
              <img src="/image/anhnen.jpg">
          </div>
  
          <div class="comments-content">
              <h2>Đại Phong <span>1 tháng trước</span></h2>
               <p>${value.comment}</p>
               <div class="comments-icon">
                   <i class='bx bx-like'></i>
                    <i class='bx bx-dislike' ></i>
                    <div class="rep">Phản hồi</div>
               </div>
         </div>
    </div>
         `;

    })
}
let commentBtn = document.querySelector(".btn-comments")

commentBtn.addEventListener("click", ()=> {
    let commentContent = inputPress.value
      let commentBox = document.createElement("div")
      commentBox.classList.add("comments-box")
      commentBox.innerHTML = `
            <div class="comments-box-sml">
                  <div class="comments-image">     
                      <img src="/image/anhnen.jpg">
                  </div>
          
                  <div class="comments-content">
                      <h2>Đại Phong <span>1 tháng trước</span></h2>
                       <p>${commentContent}</p>
                       <div class="comments-icon">
                           <i class='bx bx-like'></i>
                            <i class='bx bx-dislike' ></i>
                            <div class="rep">Phản hồi</div>
                       </div>
                 </div>
             </div>
            <div class="comments-menu">
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
             `;
      commentsBoxContainer.appendChild(commentBox)
     
 
})
let desBtn = document.querySelector(".btn-des")
desBtn.addEventListener("click", ()=>{
         inputPress.value="";
         let addIcon = document.querySelector(".add-icon");
         addIcon.style.display="none";
         inputPress.addEventListener("click",()=>{
            addIcon.style.display="flex";
         })
})
let heart = document.querySelector(".heart")
let heartIcon = document.querySelector(".heart i")
heart.addEventListener("click",()=> {
    
        heartIcon.style.color="red"
        heart.style.animation = "heartChange 0.1s 3"
   

      
      
})





