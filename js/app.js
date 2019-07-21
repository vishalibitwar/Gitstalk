const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searchUser');
const searchButton = document.getElementById('searchbutton');
const me = document.getElementById('me');

me.addEventListener('click', () => {
  searchUser.value = "vishalibitwar";
  search();

});


searchUser.addEventListener('click', function () {
  this.style.backgroundColor = 'white';
});

searchButton.addEventListener('click', search);

function search(e) {
  const userText = searchUser.value;
  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          ui.showAlert();
        } else {
          //show profile
          document.getElementById('icon').innerHTML = '';
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    ui.showMessage();
  }

}