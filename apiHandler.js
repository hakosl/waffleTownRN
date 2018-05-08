const endpoint = 'https://waffel-town.herokuapp.com';
const getWafflesURL = '/api/waffels/';
const upWaffles = "/upwaffel";
import {setScene} from './sceneHandler.js';

function postImgur(img, cb) {

  if(img === "") {
    cb('https://i.imgur.com/dviYqy5.jpg');
  }
  let parameters = {
    image: img,
  };
  let headers = {
    "Authorization": "Client-ID 13ccd2823d1b45e",
    "Content-Type": "application/x-www-form-urlencoded",
    "multipart": "application/x-www-form-urlencoded"
  };


  let fd = new FormData();

  fd.append("image", img);

  let request = new XMLHttpRequest();


  request.onreadystatechange = (res) => {
    if(request.readyState !== 4) return;

    if(request.status === 200) {
      let response = JSON.parse(request.responseText);

      console.log(200);
      console.log(response);

      let url = response.data.link.replace("http", "https");
      cb(url);
    } else {
      console.log(request.responseText);
    }
  };

  request.open("POST", "https://api.imgur.com/3/image");
  request.setRequestHeader("Authorization", "Client-ID 13ccd2823d1b45e");
  request.setRequestHeader("Content-Type", "multipart/form-data");

  request.send(fd);
}
export function postWaffle(waffleImg, description, consistency, rating, palegg, handler) {
  let url = endpoint + getWafflesURL;
  //base64Img = getBase64Img(waffleImg);
  //let imgurURL = 'https://i.imgur.com/dviYqy5.jpg';

  let sendToServer = (imgurURL) => {
    let body = {
      rating,
      description: 'ikkje bra',
      palegg: ['smør'],
      consistency,
      url: imgurURL
    }
    fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
    })
      .then(res => {
        console.log(res);
        handler(null, 'waffles');
      })
      .catch(res => console.log(res));
    }


    postImgur(waffleImg, sendToServer);

}

export function getBase64Img(img) {
  var outFile = ""
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
    outFile = reader.result;
  };
    reader.onerror = function (error) {
    console.log('Error: ', error);
  };

  return outFile;
}

export function getWaffles(waffle, dataSource) {
  let url = endpoint + getWafflesURL;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      setScene('waffles');
      waffle.setState({
        dataSource: dataSource.cloneWithRows(res),
      });
      return res;
    })
    .catch(err => console.log(err));

}

export function getWaffle(waffleId) {
  let url = endpoint + getwafflesURL + waffleId;
}

export function upWaffle(waffleId) {
  let url = endpoint + getWafflesURL + waffleId + upWaffles;
  console.log(url);
  fetch(url, {
    method: 'POST'
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
