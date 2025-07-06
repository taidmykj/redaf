/*
let usermail = localStorage.getItem('mail');
let usernem = localStorage.getItem('bothName');*/
function menuOptions() {
    document.getElementById('aside').innerHTML = 
    `<aside class="aside">
             <div class="move-out"><img onclick="moveOut()" src="./svgImg/close.svg" height="30px"></div>
            <img class="dp dashboard" src="./srcImg/account.svg">
            <p class="userN">Redaf User</p>
            <p class="userL">redaf@gmail.com</p>
            <hr>
             <!--div class="homeTap"><img src="./svgImg/dashboard.svg" height="30px"></div><div class="homeT">Dashboard</div>
             <hr-->
             <div class="homeTap"><img src="./svgImg/home.svg" height="30px"></div><div class="homeT" onclick="window.location.href= 'dashboard.html'">Home</div>
             <hr>
             <!--div class="homeTap"><img src="./svgImg/news.svg" height="30px"></div><div class="homeT">News</div>
             <hr-->
             <div class="homeTap"><img src="./svgImg/create.svg" height="30px"></div><div  class="homeT" onclick="this.innerHTML = '<marquee>Sorry to say this page is still on manufactur...Please bare with us....</marquee>'; ">Add post</div>
             <hr>
             <!--div class="homeTap"><img src="./svgImg/settings.svg" height="30px"></div><div class="homeT">Settings</div>
             <hr-->
             <div class="homeTap"><img src="./svgImg/logOut.svg" height="30px"></div><div class="homeT" onclick="window.location.href = ''">Log-out</div>
             <footer>All rights reserved<br>
                 &copy; 2025 Chacha Ree
             </footer>
         
        </aside>`;
    
}

function moveOut() {
    document.getElementById('aside').innerHTML = '';
}

/*

function mainPage() {
    //document.getElementById('main').style.color = 'tomato';
    let sum = '';
 function () {
  let message = this.user_msg; let newMsg = [];
  for (let values of message.split(' ')) {
    if (values.startsWith('/')) {
      let abc = values.substring(1, values.length);
      newMsg.push(`<a href="${this.user_link}">${abc}</a>`);
    }
    else {
      newMsg.push(values);
    }
  }
  
  return newMsg.join(' ');
}
},

{
  user_name: 'Derick Chirchir',
  user_mail: 'myktaidj@gmail.com',
  user_dplink: null,
  user_msg: 'I /will Do it',
  user_contacts: '789925',
  user_link: 'page3.html',  
  user_img_link: './srcImg/mbappe.jpg',
  convert: 

function () {
  let message = this.user_msg; let newMsg = [];
  for (let values of message.split(' ')) {
    if (values.startsWith('/')) {
      let abc = values.substring(1, values.length);
      newMsg.push(`<a href="${this.user_link}">${abc}</a>`);
    }
    else {
      newMsg.push(values);
    }
  }
  
  return newMsg.join(' ');
}
},
    
{
  user_name: 'Desire Doue',
  user_mail: 'desireDoue@gmail.com',
  user_dplink: './srcImg/lamine.jpg',
  user_msg: 'Hear of a prince who /never became a king ..Shocking',
  user_contacts: '789925',
  user_link: "page2.html",  
  user_img_link: './srcImg/lamine.jpg',
  convert: 

function () {
  let message = this.user_msg; let newMsg = [];
  for (let values of message.split(' ')) {
    if (values.startsWith('/')) {
      let abc = values.substring(1, values.length);
      newMsg.push(`<a href="${this.user_link}">${abc}</a>`);
    }
    else {
      newMsg.push(values);
    }
  }
  
  return newMsg.join(' ');
}
       
let post = [
  
{
  user_name: 'Lamine Yamal',
  user_mail: 'lamine@gmail.com',
  user_dplink: './srcImg/yamal.jpg',
  user_msg: 'Am not too /young to be hyped',
  user_contacts: '789925',
  user_link: 'page1.html',  
  user_img_link: './srcImg/yamal.jpg',
  convert: 
},
    
{
  user_name: 'Resquare Electronics',
  user_mail: 'resquare@gmail.com',
  user_dplink: './srcImg/lamine.jpg',
  user_msg: 'Colect Your /goods',
  user_contacts: '789925',
    user_link: 'page3.html',  
  user_img_on: 0,
    user_hide: 'hidden',
    com1: '!--',
    com2: '--',
  convert: 

function () {
  let message = this.user_msg; let newMsg = [];
  for (let values of message.split(' ')) {
    if (values.startsWith('/')) {
      let abc = values.substring(1, values.length);
      newMsg.push(`<a href="${this.user_link}">${abc}</a>`);
    }
    else {
      newMsg.push(values);
    }
  }
  
  return newMsg.join(' ');
}
    
}    
    
]
let display = ' ';
//alert(post[0].name);
for (let i = 0; i < post.length; ++i) {
  /*if (post[i].user_img_link === null) {
      let display = 'none';
  }*//*
  sum += `
  <div>
    <img src="${post[i].user_dplink ?? './srcImg/account.svg' }" class="dp" alt=" "/>
        <p class="username">${post[i].user_name}<img src="./srcImg/verify.webp" height="20px" alt=" "> <span class="profile">See More</span></p>
        <p class="userlink">${post[i].user_mail}</p>
        
        <p class="msg">${post[i].convert()}</p>
          <${post[i].com1}img class="mainImg" src="${post[i].user_img_on}" alt=" " ${post[i].user_hide}/${post[i].com2}>
     
    <div class="homeTap">
                <img src="./svgImg/cart.svg" height="30px" class="svg cart" id="cart${i}" onclick="alert('cart${i}')">
                <img src="./svgImg/like.svg" height="30px" class="svg like">
                <img src="./svgImg/dislike.svg" height="30px" class="svg dislike">
                <img src="./svgImg/crown.svg" height="30px" class="svg crown">
                <img src="./svgImg/promote.svg" height="30px" class="svg promote">
     </div><div>
                <p class="define">
                    <span class="wordc" id="car${i}">Add to Cart</span>
                    <span class="wordl">Like</span>
                    <span class="wordd">Dislike</span>
                    <span class="word">Crown</span>
                    <span class="wordp">Promote</span>
                </p>
           </div><hr>
     `;
}
    document.getElementById('display').innerHTML = sum;

}
*/

function tap(id1, id2) {
    document.getElementById(`${id1}`).style.backgroundColor = 'tomato';
    document.getElementById(`${id2}`).style.color = 'tomato';
}
