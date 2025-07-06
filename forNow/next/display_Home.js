let variables = `
  user_dp_link,
  user_profile_name,
  user_profile_link,
  user_image_link,
  user_message`;


let post = [
  {
    user_dp_link: null,
    user_profile_name: 'Derick Chirchir <img class="verify" src="./srcImg/verify.webp" height="20px"/>',
    user_profile_link: 'chach48',
    user_image_link: './srcImg/yamal.jpg',
    comment_1: '!--',
    comment_2: '--',
    user_video_link: './srcImg/dance.mp4',
    vid_comment_1: '!--',
    vid_comment_2: '!--',
    user_message_link: 'pages',
    user_message_text: 'You have received <br>400.0 MakeUrBundle Data. Expiry date 30-06-2025 00:58AM. Click here to enjoy great vibes at Baze Radio /https://bit.ly/4byBy25. Do you like your friend signature as your call sign. Dial 836*51# to set Funny Dynamic /Signatures and inspire your callers. To stop receiving these messages reply STOP.',
    user_coverphoto_link: null,
    user_business_name: 'Yamal Bizz',
    user_profile_bio: 'My Job is mine',
    user_business_email: 'nowntechy@gmail.com',
    user_director_name: 'Dir. Derick Chirh',
    user_business_contacts: '25476889034',
    user_message: 
  
function () {
  let message = this.user_message_text; 
  let newMsg = [];
  for (let values of message.split(' ')) {
    if (values.startsWith('/')) {
      let abc = values.substring(1, values.length);
      newMsg.push(`<a href="${this.user_message_link}">${abc}</a>`);
    }
    else if (values.startsWith('*') && values.endsWith('*')) {
      let abc = values.substring(1, values.length);
      newMsg.push(`<b>${abc}</b>`);
    }
    else {
      newMsg.push(values);
    }
  }
  
  return newMsg.join(' ');
}
  },

    {
    user_dp_link: './srcImg/verify.webp',
    user_profile_name: 'Safaricom Dealers <img class="verify" src="./srcImg/verify.webp" height="20px"/>',
    user_profile_link: 'transparent-honest',
    user_image_link: './srcImg/mbappe.jpg',
    comment_1: '!--',
    comment_2: '--',
      user_video_link: './srcImg/dance.mp4',
    vid_comment_1: '!--',
    vid_comment_2: '!--',
    user_coverphoto_link: null,      
    user_business_name: 'Mbappe Bizz',
    user_profile_bio: 'My Job is not yours',
    user_business_email: 'nowechy@gmail.com',
    user_director_name: 'Dir. Deri Chirh',
    user_business_contacts: '2547689034',      
    user_message_link: 'https://bit.ly/4byBy25',
    user_message_text: `You have received 400.0 *MakeUrBundle Data. Expiry date 30-06-2025 00:58AM. Click here to enjoy great vibes at Baze Radio /https://bit.ly/4byBy25. Do you like your friend's signature? Reply with '1' to set your friend's signature as your call sign.
Dial *836*51# to set Funny Dynamic Signatures and inspire your callers. To stop receiving these messages reply /STOP.`,
    user_message: 
  
function () {
  let message = this.user_message_text; 
  let newMsg = [];
  for (let values of message.split(' ')) {
    if (values.startsWith('/')) {
      let abc = values.substring(1, values.length);
      newMsg.push(`<a href="${this.user_message_link}">${abc}</a>`);
    }
    else if (values.startsWith('*') ) {
      let abc = values.substring(1, values.length);
      newMsg.push(`<b>${abc}</b>`);
    }
    else {
      newMsg.push(values);
    }
  }
  
  return newMsg.join(' ');
}  

}//close function 
]//close post

let addPost = '';
for (let i = 0; i < post.length; i++) {
  addPost += 
  `
  <div class="main-content">
    <img src="${post[i].user_dp_link ?? './srcImg/account.svg'}" class="dp-profile">
    <p class="my-name">${post[i].user_profile_name}</p>
    <p class="my-link">@${post[i].user_profile_link}</p>
    <button class="view-profile" onclick="load(${i})">View Profile</button>
    <div class="my-message">
      <${post[i].comment_1}img src="${post[i].user_image_link}" class="my-image-post"/${post[i].comment_2}>
  <${post[i].vid_comment_1}video class="my-video-post" controls>
        <source src="${post[i].user_video_link}" type="video/mp4">
      </video${post[i].vid_comment_2}>
      <p class="message">${post[i].user_message() ?? ''}    </div>
  </div>
  <hr>  
  `
}


function add_post(to) {
  document.getElementById(`${to}`).innerHTML = addPost;
}

function load(i) {
  localStorage.setItem('user', i);
  window.location.href = 'user_profile.html';
  /*
  function here() {
  document.getElementById('display_Profile').innerHTML =
  `
    <div class="top-part">
    <img src="${post[i].user_coverphoto_link ?? './srcImg/mbappe.jpg'}" class="cover-photo">
    <img src="" class="back-btn">
    <img src="${post[i].user_dp_link ?? './srcImg/account.svg'}" class="dp-photo">
    <p class="user-name">${post[i].user_profile_name}</p>
    <p class="user-link">${post[i].user_profile_link}</p>
    <p class="user-bio">${post[i].user_profile_bio}</p>
    <div class="about-field">
      <fieldset class="user-about-field">
        <legend>Business Name
        <span class="content">${post[i].user_business_name}</span></legend>
      </fieldset>
      <fieldset class="user-about-field">
        <legend>Director
        <span class="content">${post[i].user_director_name}</span></legend>
      </fieldset>
      <fieldset class="user-about-field">
        <legend>Email
        <span class="content">${post[i].user_business_email}</span></legend>
      </fieldset>
      <fieldset class="user-about-field">
        <legend>Contacts
        <span class="content">${post[i].user_business_name}</span></legend>
      </fieldset>
    </div>
  </div>
 `;
  }
  */
 
 //End Profile
}

