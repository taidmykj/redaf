
function next() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let contacts = document.getElementById('contacts').value;
    let link = document.getElementById('link').value;
    let srcLink = document.getElementById('srcLink').value;
    let msg = document.getElementById('message').value;
    if (name.length > 2 && name.length < 15 && contacts.length > 10 && contacts.length < 14 && msg) {
      let post = [
      {
        user_name: name,
        user_mail: email,
        user_dplink: './srcImg/yamal.jpg',
        user_msg: msg,
        user_contacts: contacts,
        user_link: link,
        user_img_link: srcLink,
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
      ];
      
      document.getElementById('mainDisplay').innerHTML = 
      `  <div>
    <img src="${post[0].user_dplink}" class="dp" alt=" "/>
        <p class="username">${post[0].user_name}<img src="./srcImg/verify.webp" height="20px" alt=" "> <span class="profile">See More</span></p>
        <p class="userlink">${ post[0].user_mail }</p>
        
        <p class="msg">${post[0].convert()}</p>
            <img class="image" src="${post[0].user_img_link ?? './svgImg/home.svg'}" alt=" " height="400px" width="80%"/>
     
    <div class="homeTap">
                <img src="./svgImg/cart.svg" height="30px" class="svg cart" id="cart" onclick="alert('car')">
                <img src="./svgImg/like.svg" height="30px" class="svg like">
                <img src="./svgImg/dislike.svg" height="30px" class="svg dislike">
                <img src="./svgImg/crown.svg" height="30px" class="svg crown">
                <img src="./svgImg/promote.svg" height="30px" class="svg promote">
     </div><div>
                <p class="define">
                    <span class="wordcart" id="car">Add to Cart</span>
                    <span class="wordlike">Like</span>
                    <span class="worddislike">Dislike</span>
                    <span class="wordcrown">Crown</span>
                    <span class="wordpromote">Promote</span>
                </p>
           </div>
`;
      document.getElementById('next').innerHTML = `<button class="continue" onclick="window.location.href = 'page1.html'">DONE</button>`;
     }
  
    else {
      alert('Wrong')
    }
}