const $buttonSchool = document.querySelector('.school-btn');
const $buttonKnee = document.querySelector('.knee-btn');
const $buttonNothing = document.querySelector('.nothing-btn');
const $countSchool = document.querySelector('.school-count');
const $countKnee = document.querySelector('.knee-count');
const options = {
  school: 0,
  knee: 0
};

function handleSchoolClick(event) {
  options.school = options.school + 1;
  $countSchool.textContent = 'Vote: ' + options.school;
}

function handleKneeClick(event) {
  if (options.knee < 2) {
    options.knee++;
  } else {
    options.knee = options.knee * options.knee;
  }
  $countKnee.textContent = 'Vote: ' + options.knee;
}

function handleNothingClick(event) {
  options.knee = options.knee * 2;
  $countKnee.textContent = 'Vote: ' + options.knee;
}

$buttonSchool.addEventListener('click', handleSchoolClick);
$buttonKnee.addEventListener('click', handleKneeClick);
$buttonNothing.addEventListener('click', handleNothingClick);
