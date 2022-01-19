const profileImgEl = document.querySelector('.profile-img');
const userNameEl = document.querySelector('.user-name');
const masteredSkillsDiv = document.querySelector('.mastered-skills');
const expertSkillsDiv = document.querySelector('.expert-skills');
const proficientSkillsDiv = document.querySelector('.proficient-skills');
const noviceSkillsDiv = document.querySelector('.novice-skills');
const interestedSkillsDiv = document.querySelector('.interested-in-skills');

function removeSpace(string) {
  if(/\s/g.test(string)) {
    string = string.split(/[ ]+/).join('-')
  }
  // console.log(string)
  return string;
}

function getUserSkills(userInfo) {
  let masteredSkillsList = [];
  profileImgEl.innerHTML = `<img src='${userInfo.person.pictureThumbnail}' alt='${userInfo.name}\'s profile picture'/>`;
  userNameEl.textContent = `${userInfo.person.name}`;


  userInfo.strengths.forEach(strength => {
    if(strength.proficiency === 'master')
      masteredSkillsList.push(strength.name);
    else if(strength.proficiency === 'expert')
      expertSkillsList.push(strength.name);
    else if(strength.proficiency === 'proficient')
      proficientSkillsList.push(strength.name);
    else if(strength.proficiency === 'novice')
      noviceSkillsList.push(strength.name);
    else if(strength.proficiency === 'no-experience-interested')
      interestedSkillsList.push(strength.name);
  });

  creatMasterSkillsButtons(masteredSkillsList, 'master');
  creatMasterSkillsButtons(expertSkillsList, 'expert');
  creatMasterSkillsButtons(proficientSkillsList, 'proficient');
  creatMasterSkillsButtons(noviceSkillsList, 'novice');
  creatMasterSkillsButtons(interestedSkillsList, 'no-experience-interested');
}

function createSkillsButtons(skillsArr, category) {
  if(skillsArr.length > 0) {
    skillsArr.forEach(skill => {
        let skillNoSpace = removeSpace(skill).toLowerCase();
        let skillBtn = document.createElement('button');
        skillBtn.textContent = skill;
        skillBtn.setAttribute('id', skillNoSpace);
        skillBtn.classList.add(`${category}-skill-btn`,'btn');
        switch(category) {
            case 'master':
                masteredSkillsDiv.appendChild(skillBtn);
                break;
            case 'expert':
                expertSkillsDiv.appendChild(skillBtn);
                break;
            case 'proficient':
                proficientSkillsDiv.appendChild(skillBtn);
                break;
            case 'novice':
                noviceSkillsDiv.appendChild(skillBtn);
                break;
            case 'no-experience-interested':
                interestedSkillsDiv.appendChild(skillBtn);
                break;
            }
      });
  }
  else {
    switch(category) {
      case 'master':
        masteredSkillsDiv.style.display = 'none';
        break;
      case 'expert':
        expertSkillsDiv.style.display = 'none';
        break;
      case 'proficient':
        proficientSkillsDiv.style.display = 'none';
        break;
      case 'novice':
        noviceSkillsDiv.style.display = 'none';
        break;
      case 'no-experience-interested':
        interestedSkillsDiv.style.display = 'none';
        break;
    }
  }
}

function btnAddEvent(){
  expertSkillBtns.forEach(btn => btn.addEventListener('click', e => expandSkill(e, userInfo)));
}

function closeModal(modal) {
    modal.classList.remove('show');
}

function expandSkill(event, userInfoObj) {
  let modal = document.createElement('div');
  modal.classList.add('modal', 'show');
  let skillName = addSpace(event.currentTarget.getAttribute('id'));
  if(skillName === 'Git') {
    skillName = 'GIT';
  }
  else if(skillName === 'Css3') {
    skillName = 'CSS3';
  }
  else if(skillName === 'Html5') {
    skillName = 'HTML5';
  }
  else if(skillName === 'Sql') {
    skillName = 'SQL';
  }
  else if(skillName === 'Mysql') {
    skillName = 'MySQL';
  }
  else if(skillName === 'Typescript') {
    skillName = 'TypeScript';
  }

  userInfoObj.strengths.forEach(s => {
    if(s.name == skillName) {
      modal.innerHTML = `
        <p>Skill</p>
        <h2>${s.name}</h2>
        <div class='recommendations'>
          ${s.recommendations}<br>
          recommendations
        </div>
        <div class='rec-weight'>
          ${s.weight}
          recommendation weight
        </div>
        `;
      let closeBtn = document.createElement('button');
      closeBtn.setAttribute('id', 'close-modal');
      closeBtn.textContent = 'X';
      modal.appendChild(closeBtn);
      closeBtn.addEventListener('click', e => closeModal(modal));
    }
  });
  expertSkillsDiv.appendChild(modal);
}

fetch(' https://bio.torre.co/api/bios/sorianoalisha')
.then(response => response.json())
.then(userInfo => {
  // console.log(userInfo.name)
  displayUserSkills(userInfo)

})
.catch(error => console.error(error));