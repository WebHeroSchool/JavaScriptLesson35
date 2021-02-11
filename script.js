let url = window.location.toString();
const getName = (url) => {
  let url2 = url.split('=');
  let name = url2[1];
  if (name == undefined) {
    name = 'Lalukins';
  }
return name;
}

fetch(`https://api.github.com/users/${getName(url)}`)
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
})
  .catch(err => alert('Информация о пользователе недоступна'));