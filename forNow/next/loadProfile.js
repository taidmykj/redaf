/*
function add_post(to) {
  document.getElementById(`${to}`).innerHTML = addPost;
}*/

let profilePost = [
  {
    cp: './srcImg/mbappe.jpg',
    dpp: './srcImg/account.svg',
    pname: 'Derick Chirchir',
    pverify: '',  
    plink: 'derick4875',
    pbio: 'I am glad to meet you',
    busname: 'Taid Biz',
    busdir: 'Dr. Derick',
    busemail: '@nowntechy@gmail.com',
    buscontacts: '+254789925370'
  },
  
  {
    cp: './srcImg/mbappe.jpg',
    dpp: './srcImg/account.svg',
    pname: 'Safaricom PLC',
    pverify: '',
    plink: '4uplc',
    pbio: 'Transparent Honest For You',
    busname: 'Safaricom PLC',
    busdir: 'DR. KAS HONGO',
    busemail: '@nowntechy@gmail.com',
    buscontacts: '+2547890000000'
  }

  ];


let index = localStorage.getItem('user');

let profile = profilePost[index];
window.onload = function () {
  
 // window.location.href = 'user_profile.html';/*
  document.getElementById('displayProfile').innerHTML =
  `
    <div class="top-part">
    <div class="back-btn" onclick='window.location.href="dashboard.html"'>Back Home</div><hr>
    <img src="${profile.cp ?? './srcImg/mbappe.jpg'}" class="cover-photo">
    <img src="${profile.dpp ?? './srcImg/account.svg'}" class="dp-photo">
    <p class="user-name">${profile.pname}&nbsp;<img class="verify" src="./srcImg/verify.webp" ${profile.pverify}/></p>
    <p class="user-bio">${profile.pbio}</p>
    <p class="user-link">@_${profile.plink}</p>
    <div class="about-field">
      <fieldset class="user-about-field">
        <legend>Business Name
        <span class="content">${profile.busname}</span></legend>
      </fieldset>
      <fieldset class="user-about-field">
        <legend>Director
        <span class="content">${profile.busdir}</span></legend>
      </fieldset>
      <fieldset class="user-about-field">
        <legend>Email
        <span class="content">${profile.busemail}</span></legend>
      </fieldset>
      <fieldset class="user-about-field">
        <legend>Contacts
        <span class="content">${profile.buscontacts}</span></legend>
      </fieldset>
    </div>
  </div>
 `;
 // alert(profile);
 
 //End Profile
}


//alert(profile.user_profile_name);*/