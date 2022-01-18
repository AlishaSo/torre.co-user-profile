const profileImgEl = document.querySelector('.profile-img');
const userNameEl = document.querySelector('.user-name');
const masteredSkillsDiv = document.querySelector('.mastered-skills');
const expertSkillsDiv = document.querySelector('.expert-skills');
const proficientSkillsDiv = document.querySelector('.proficient-skills');
const noviceSkillsDiv = document.querySelector('.novice-skills');
const interestedSkillsDiv = document.querySelector('.interested-in-skills');

function getUserSkills(userInfo) {
  let masteredSkillsList = [];
  profileImgEl.innerHTML = `<img src='${userInfo.person.pictureThumbnail}' alt='${userInfo.name}      \'s profile picture'/>`;
  userNameEl.textContent = `${userInfo.person.name}`;


userInfo.strengths.forEach(strength => {
    if(strength.proficiency === 'master')
      masteredSkillsList.push(strength.name)
});

getMasterSkillsHtml(masteredSkillsList)
//   console.log(masteredSkillsList)
}

function getMasterSkillsHtml(masterSkillsArr) {
  if(masterSkillsArr) {
      masterSkillsArr.forEach(skill => {
          // console.log(skill)
          let skillBtn = document.createElement('button');
          skillBtn.setAttribute('id', skill);
          skillBtn.classList.add(`${skill}-btn`,'btn')
          // console.log(skillBtn)
      })
  }
  else {
      masteredSkillsDiv.style.display = 'none';
  }
}

function displayUserSkills() {
}

fetch(' https://bio.torre.co/api/bios/sorianoalisha')
.then(response => response.json())
.then(userInfo => {
  // console.log(userInfo.name)
  displayUserSkills(userInfo)

})
.catch(error => console.error(error));