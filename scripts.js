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
h1.textContent = "[ETC]"
card.appendChild(h1);

var request0 = new XMLHttpRequest();
request0.open('GET', 'https://api.nanopool.org/v1/etc/network/lastblocknumber', true);
request0.onload = function () {
  var data0 = JSON.parse(this.response);
  if (request0.status >= 200 && request0.status < 400) {
    
    const p12 = document.createElement('p');
	p12.textContent = " Block Number: "+data0.data;
	card.appendChild(p12);
	
	  
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request0.send();
	
	  
var request = new XMLHttpRequest();
request.open('GET', 'https://api.nanopool.org/v1/etc/hashrate/0x61C12d0B359b42aDB9F8d1C3fC072df5d07D60f8', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    
    const p = document.createElement('p');
    p.textContent = "Current Hashrate: "+data.data+" MH/s";
	
	
	const apiurl= 'https://api.nanopool.org/v1/etc/approximated_earnings/'+data.data
	var request11 = new XMLHttpRequest();
	request11.open('GET', apiurl, true);
	request11.onload = function () {
 	var data11 = JSON.parse(this.response);
	if (request11.status >= 200 && request11.status < 400) {    
		const p11 = document.createElement('p');
		p11.textContent = "Daily Reward: "+data11.data.day.coins+" ETC";    
		card.appendChild(p11);	  
	} else {
		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = `Gah, it's not working!`;
		app.appendChild(errorMessage);
		}
	}
	request11.send();
	
    
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
    p3.textContent = "Average Hashrate (6h): "+data3.data.h6+" MH/s";

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
    p2.textContent = "Balance: "+data2.data+" ETC";

    card.appendChild(p2);
	  
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
request2.send();

const card2 = document.createElement('div');
card2.setAttribute('class', 'card');
container.appendChild(card2);
const h2 = document.createElement('h1');
h2.textContent = "[ETH]"
card2.appendChild(h2);


var requestETH1 = new XMLHttpRequest();
requestETH1.open('GET', 'https://api.nanopool.org/v1/eth/network/lastblocknumber', true);
requestETH1.onload = function () {
  var dataETH1 = JSON.parse(this.response);
  if (requestETH1.status >= 200 && requestETH1.status < 400) {
    
    const p22 = document.createElement('p');
	p22.textContent = " Block Number: "+dataETH1.data;
	
	card2.appendChild(p22);
	  
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
requestETH1.send();


var requestETH2 = new XMLHttpRequest();
requestETH2.open('GET', 'https://api.nanopool.org/v1/eth/hashrate/0x8951fb5873fb6d65f44e0984ad257a8f2216f7e3', true);
requestETH2.onload = function () {

  // Begin accessing JSON data here
  var dataETH2 = JSON.parse(this.response);
  if (requestETH2.status >= 200 && requestETH2.status < 400) {
    
    const p31 = document.createElement('p');
    p31.textContent = "Current Hashrate: "+dataETH2.data+" MH/s";
	
	
	const apiurlETH2= 'https://api.nanopool.org/v1/eth/approximated_earnings/'+dataETH2.data
	var requestETH21 = new XMLHttpRequest();
	requestETH21.open('GET', apiurlETH2, true);
	requestETH21.onload = function () {
 	var dataETH21 = JSON.parse(this.response);
	if (requestETH21.status >= 200 && requestETH21.status < 400) {    
		const pETH2 = document.createElement('p');
		pETH2.textContent = "Daily Reward: "+dataETH21.data.day.coins+" ETC";    
		card2.appendChild(pETH2);	  
	} else {
		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = `Gah, it's not working!`;
		app.appendChild(errorMessage);
		}
	}
	requestETH21.send();
	
    
    card2.appendChild(p31);
	  
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
requestETH2.send();

var requestETH3 = new XMLHttpRequest();
requestETH3.open('GET', 'https://api.nanopool.org/v1/eth/avghashrate/0x8951fb5873fb6d65f44e0984ad257a8f2216f7e3', true);
requestETH3.onload = function () {

  // Begin accessing JSON data here
  var dataETH3 = JSON.parse(this.response);
  if (requestETH3.status >= 200 && requestETH3.status < 400) {

    const pETH3 = document.createElement('p');
    pETH3.textContent = "Average Hashrate (6h): "+dataETH3.data.h6+" MH/s";

    card2.appendChild(pETH3);
	  
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
requestETH3.send();

var requestETH4 = new XMLHttpRequest();
requestETH4.open('GET', 'https://api.nanopool.org/v1/eth/balance/0x8951fb5873fb6d65f44e0984ad257a8f2216f7e3', true);
requestETH4.onload = function () {

  // Begin accessing JSON data here
  var dataETH4 = JSON.parse(this.response);
  if (requestETH4.status >= 200 && requestETH4.status < 400) {

    const pETH4 = document.createElement('p');
    pETH4.textContent = "Balance: "+dataETH4.data+" ETC";

    card2.appendChild(pETH4);
	  
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}
requestETH4.send();

