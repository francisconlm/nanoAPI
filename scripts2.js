const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

const card = document.createElement('div');
card.setAttribute('class', 'card');
container.appendChild(card);

const h1 = document.createElement('h1');
h1.textContent = "ETC"; 
card.appendChild(h1);
	  
var request = new XMLHttpRequest();
request.open('GET', 'https://api.nanopool.org/v1/etc/hashrate/0x61C12d0B359b42aDB9F8d1C3fC072df5d07D60f8', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
    const p = document.createElement('p');
    p.textContent = "Current Hashrate: "+data.data+" MH/s";
    
    card.appendChild(p);
	  
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request.send();

var request3 = new XMLHttpRequest();
request3.open('GET', 'https://api.nanopool.org/v1/etc/avghashrate/0x61C12d0B359b42aDB9F8d1C3fC072df5d07D60f8', true);
request3.onload = function () {

  // Begin accessing JSON data here
  var data3 = JSON.parse(this.response);
  if (request3.status >= 200 && request3.status < 400) {

    const p3 = document.createElement('p');
    p3.textContent = "Average Hashrate (6h): "+data3.data.h6;

    card.appendChild(p3);
	  
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request3.send();

var request2 = new XMLHttpRequest();
request2.open('GET', 'https://api.nanopool.org/v1/etc/balance/0x61C12d0B359b42aDB9F8d1C3fC072df5d07D60f8', true);
request2.onload = function () {

  // Begin accessing JSON data here
  var data2 = JSON.parse(this.response);
  if (request2.status >= 200 && request2.status < 400) {

    const p2 = document.createElement('p');
    p2.textContent = "Balance: "+data2.data;

    card.appendChild(p2);
	  
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request2.send();

