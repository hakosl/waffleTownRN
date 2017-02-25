const endpoint = 'https://waffel-town.herokuapp.com';
const getWafflesURL = '/api/waffels/';
const upWaffles = "/upwaffle";

export function postWaffle(waffleImg, comment, consistency, rating, palegg) {
  let url = endpoint + getWafflesURL;
  //base64Img = getBase64Img(waffleImg);
  let imgurURL = 'http://i.imgur.com/dviYqy5.jpg';

  let body = {
    rating,
    comment,
    palegg,
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
    .then(res => console.log(res))
    .catch(res => console.log(res));

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
      waffle.setState({
        dataSource: dataSource.cloneWithRows(res),
        loading: false
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
  fetch(url, {
    method: 'POST'
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
