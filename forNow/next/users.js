

let home = [
  //Start of User 1
  //[
  {
    num: 4,
    pname: "Derick-Speaker",
    plink: "derick42",
    tick1: "",
    tick2: "",
    dplink: "./srcImg/account.svg",
    imglink: "./srcImg/der.jpg",
    pc1: "",
    pc2: "",
    vidlink: "",
    vc1: "!--",
    vc2: "--",
    msglink: "page2.html",
    msgc1: "",
    msgc2: "",
    msgtext: "😂😂😂"
  },
  {
    num: 1,
    pname: "KE_Kevin_Enginia",
    plink: "kk_44",
    tick1: "",
    tick2: "",
    dplink: "./srcImg/account.svg",
    imglink: "./srcImg/kk.jpg",
    pc1: "",
    pc2: "",
    vidlink: "",
    vc1: "!--",
    vc2: "--",
    msglink: "page2.html",
    msgc1: "",
    msgc2: "",
    msgtext: "Tutaanza aje kusema  \"Hii sio nyama\"..😂😂"
  },

 // ],//End of User 1
  
//  [ //Start of User 2
  {
    num: 3,
    pname: "Brian_Doctor-Love",
    plink: "brian_morioh",
    tick1: "",
    tick2: "",
    dplink: "./srcImg/account.svg",
    imglink: "./srcImg/bran.jpg",
    pc1: "",
    pc2: "",
    vidlink: "",
    vc1: "!--",
    vc2: "--",
    msglink: "page1.html",
    msgc1: "",
    msgc2: "",
    msgtext: "What I want vs what I get..🥲🥲.<br>"
  },
  {
    num: 2,
    pname: "Kylian Mbappe",
    plink: "mbappe7",
    tick1: "",
    tick2: "",
    dplink: "./srcImg/mbappe.jpg",
    imglink: "./srcImg/mbappe.jpg",
    pc1: "",
    pc2: "",
    vidlink: "",
    vc1: "!--",
    vc2: "--",
    msglink: "page2.html",
    msgc1: "",
    msgc2: "",
    msgtext: "I am a footballer.....🥶🥶"
  }

 // ] //End of user 2
  
  ];
  
function link(msg, msglink) {
  let newMsg = [];
  for (let values of msg.split(' ')) {
    if (values.startsWith('/')) {
      let abc = values.substring(1, values.length);
      newMsg.push(`<a href="${msglink}">${abc}</a>`);
    }
    else if (values.startsWith('*') && values.endsWith('*')) {
      let abc = values.substring(1, values.length - 1);
      newMsg.push(`<b>${abc}</b>`);
    }
    else {
      newMsg.push(values);
    }
  }
  
  return newMsg.join(' ');
 
}
let date = new Date();
let addPost = '';
let i = [1,2,3,4,5,6];
let arr = [];
for (let values of i) {
  for (post of home) {
   // for (let post of users) {
      if (post.num == values) {
       addPost += 
         `
  <div class="main-content">
    <img src="${post.dplink ?? './srcImg/account.svg'}" class="dp-profile">
    <p class="my-name">${post.pname} <${post.tick1}img class="verify" src="./srcImg/verify.webp"/${post.tick2}></p>
    <p class="my-link">@${post.plink}</p><!--p class="my-link time"></p-->
    <button class="view-profile" onclick="locate('${post.plink}')">View Profile</button>
    <div class="my-message">
        <p class="message">${link(post.msgtext, post.msglink) ?? ''} </p>
      <${post.pc1}img src="${post.imglink}" class="my-image-post"/${post.pc2}>
  <${post.vc1}video class="my-video-post" controls>
        <source src="${post.vidlink}" type="video/mp4">
      </video${post.vc2}>
       </div>
  </div>
  
  `;
        
      }
    //}
  }
}

let profilePost = [
  {
    cp: './srcImg/sunset.jpg',
    dpp: './srcImg/chip.jpg',
    pname: 'Derick Chirchir',
    pverify: '',  
    plink: 'derick42',
    pbio: 'I am glad to meet you',
    busname: 'Taid Biz',
    busdir: 'Dr. Derick',
    busemail: '@nowntechy@gmail.com',
    buscontacts: '+254789925370'
  },
  
  {
    cp: './srcImg/wall.jpg',
    dpp: './srcImg/mbappe.jpg',
    pname: 'Kylian Mbappe',
    pverify: '',
    plink: 'mbappe7',
    pbio: 'Transparent Honest For You',
    busname: 'Safaricom PLC',
    busdir: 'DR. KAS HONGO',
    busemail: '@nowntechy@gmail.com',
    buscontacts: '+2547890000000'
  },

  {
    cp: './srcImg/yamal.jpg',
    dpp: './srcImg/account.svg',
    pname: 'KE_Kevin_Enginia',
    pverify: '',
    plink: 'kk_44',
    pbio: 'Transparent Honest For You',
    busname: 'Safaricom PLC',
    busdir: 'DR. KAS HONGO',
    busemail: '@nowntechy@gmail.com',
    buscontacts: '+2547890000000'
  },

  {
    cp: null,
    dpp: null,
    pname: 'Brian_Doctor-Love',
    pverify: '',
    plink: 'brian_morioh',
    pbio: 'Transparent Honest For You',
    busname: 'Safaricom PLC',
    busdir: 'DR. KAS HONGO',
    busemail: '@nowntechy@gmail.com',
    buscontacts: '+2547890000000'
  }

  ];



function profile(withLink) {
  //window.location.href = 'user_profile.html';
  let postThisProfile = ''; let a = 0;
let addThisPost = '';

  for (let users of profilePost) {
    if (users.plink === withLink) {
      postThisProfile += 
        `
    <div class="top-part">
    <div class="back-btn" onclick='window.location.href="dashboard.html"'>Back Home</div><hr>
    <img src="${users.cp ?? './srcImg/sunset.jpg'}" class="cover-photo">
    <img src="${users.dpp ?? './srcImg/account.svg'}" class="dp-photo">
    <p class="user-name">${users.pname}&nbsp;<img class="verify" src="./srcImg/verify.webp" ${users.pverify}/></p>
    <p class="user-bio">${users.pbio}</p>
    <p class="user-link">@_${users.plink}</p>
    <!--div class="about-field">
      <fieldset class="user-about-field">
        <legend>Business Name
        <span class="content">${users.busname}</span></legend>
      </fieldset>
      <fieldset class="user-about-field">
        <legend>Director
        <span class="content">${users.busdir}</span></legend>
      </fieldset>
      <fieldset class="user-about-field">
        <legend>Email
        <span class="content">${users.busemail}</span></legend>
      </fieldset>
      <fieldset class="user-about-field">
        <legend>Contacts
        <span class="content">${users.buscontacts}</span></legend>
      </fieldset>
    </div-->
  </div>
 `;
 
    }
  }
  
  for (let post of home) {
   // for (let post of users) {
      if (post.plink === withLink) {
        addThisPost += 
         `
  <div class="main-content">
    <img src="${post.dplink ?? './srcImg/account.svg'}" class="dp-profile">
    <p class="my-name">${post.pname} <${post.tick1}img class="verify" src="./srcImg/verify.webp"/${post.tick2}></p>
    <p class="my-link">@${post.plink}</p>
    <!--button class="view-profile" >On Profile</button-->
    <div class="my-message">
        <p class="message">${link(post.msgtext, post.msglink) ?? ''} </p>
      <${post.pc1}img src="${post.imglink}" class="my-image-post"/${post.pc2}>
  <${post.vc1}video class="my-video-post" controls>
        <source src="${post.vidlink}" type="video/mp4">
      </video${post.vc2}>
        </div>
        </div>
  `;
  
      }
   // }
  }
  
  return postThisProfile + addThisPost;
  //window.location.href = 'user_profile.html';
  //window.onload = function () {alert('Yes')};
  //document.getElementById('displayP').innerHTML = `${postThisProfile + addThisPost}`;
}

function add_post(to) {
  document.getElementById(`${to}`).innerHTML = addPost;
}


/*
function addProfile(link) {
  //alert(profile('mbappe7'));
  document.getElementById('displayP').innerHTML = profile(link);
}
*/
function locate(me) {
  document.getElementById('display').innerHTML = profile(me);
}

function gettime(numb) {
  //Get Time in Am and Pm using Javascript

let d = new Date();
let h = d.getHours() - numb;
let min = d.getMinutes() - numb;
let mdf = '';

let hm = h % 12;

if (h > 0 && h < 12) {
 (min < 10) ? mdf = '0' : mdf = '';
  return `${hm} : ${mdf}${min} AM`;
}

else if (h > 12 && h < 24) {
 (min < 10) ? mdf = '0' : mdf = '';
  return `${hm} : ${mdf}${min} PM`;
}

else if (h === 0) {
  (min < 10) ? mdf = '0' : mdf = '';
  return `12 : ${mdf}${min} AM`;
}

else {
  (min < 10) ? mdf = '0' : mdf = '';
  return `12 : ${mdf}${min} PM`;
}


}