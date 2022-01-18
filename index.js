const profileImgEl = document.querySelector('.profile-img');
const userNameEl = document.querySelector('.user-name');

fetch(' https://bio.torre.co/api/bios/sorianoalisha')
.then(response => response.json())
.then(userInfo => {
  console.log(userInfo.name)
  profileImgEl.innerHTML = `<img src='${userInfo.pictureThumbnail}' alt='${userInfo.name}\'s profile picture'/>`;
  userNameEl.textContent = `${userInfo.name}`;
})
.catch(error => console.error(error));