const profileImgEl = document.querySelector('.profile-img');
const userNameEl = document.querySelector('.user-name');
const masteredSkillsDiv = document.querySelector('.mastered-skills');
const expertSkillsDiv = document.querySelector('.expert-skills');
const proficientSkillsDiv = document.querySelector('.proficient-skills');
const noviceSkillsDiv = document.querySelector('.novice-skills');
const interestedSkillsDiv = document.querySelector('.interested-in-skills');

function displayUserSkills(userInfo) {
  profileImgEl.innerHTML = `<img src='${userInfo.pictureThumbnail}' alt='${userInfo.name}\'s profile picture'/>`;
  userNameEl.textContent = `${userInfo.name}`;

  let masteredSkillsList = userInfo.strengths.filter(strength => strength.proficiency = 'master');
  console.log(masteredSkillsList)
}

fetch(' https://bio.torre.co/api/bios/sorianoalisha')
.then(response => response.json())
.then(userInfo => {
  // console.log(userInfo.name)
  displayUserSkills(userInfo)

})
.catch(error => console.error(error));