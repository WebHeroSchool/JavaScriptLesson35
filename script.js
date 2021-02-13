let url = window.location.toString();
let preloader = document.getElementById('loading');
  setTimeout(function() {
  preloader.classList.add('hide');
}, 5000);

const getInfo = (url) => {
  let url2 = url.split('=');
  let name = url2[1];
  if (name == undefined) {
    name = 'Lalukins';
  }
 let url1 = 'https://api.github.com/users/'+ name;
return url1;
}

let getURL = getInfo(url);

const getName = new Promise((resolve,reject) => {
  setTimeout(() => getURL ? resolve(getURL) : reject('Имя неопределено'), 2000);
});

let now = new Date();
const getDate = new Promise ((resolve, reject) => {
  setTimeout(() => now ? resolve(now) : reject('Дата неопределена'), 5000);
});

Promise.all([getDate, getName])
  .then(([now,getURL]) => fetch(getURL))
  .then(res => res.json())
  .then(json => {
    console.log(json.avatar_url);
    console.log(json.name);
    console.log(json.bio);
    console.log(json.html_url);
    let link = document.createElement('a');
    link.href = json.html_url;
    link.text = json.name;
    document.body.append(link);
    let info = document.createElement('p');
    info.innerHTML = json.bio;
    document.body.append(info);
    let img = document.createElement('img');
    img.src = json.avatar_url;
    document.body.append(img);
    let date = document.createElement('p');
    date.innerHTML = now;
    document.body.append(date);
    console.log(now);
})
  .catch(err => alert('Информация о пользователе недоступна'));