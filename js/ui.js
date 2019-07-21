class UI {

  constructor() {
    this.profile = document.getElementById('profile');
  }
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="container p-2 bg-dark">
        <div class="container-content">
          <div class="item">
            <img src="${user.avatar_url}" alt="">
          </div>
          <div class="item">
            <h2>${user.name}</h2>
          </div>
          <div class="item">
            <a href="${user.html_url}" class="btn btn-black" target="_blank">View Profile</a>
          </div>
          <div class="item">
            <ul class="links">
              <li><a class="btn btn-primary">Public Repos: ${
                user.public_repos}</a>
              </li>
              <li><a  class="btn btn-secondary">Followers: ${
                user.followers}</a>
              </li>
              <li><a class="btn btn-ternary">Following:${user.following
              }</a>
              </li>
            </ul>
          </div>
          <div class="item" id="about">
            <ul class="about">
              <li>Website/Blog: <a href="${user.blog}">${user.blog}</a></li>              
              <li>Location: ${user.location}</li>
              <li>Company: ${ user.company }</li>
              <li>Joined: ${ user.created_at}</li>
            </ul>
          </div>          
        </div>
      </div>         
      `;
  }

  showRepos(repo) {
    let output = '';
    repo.forEach(function (rep) {
      output += `
      <div class="item" id="repos">
        <ul class="repos">
          <li><a href="${rep.html_url}" target="_blank" >${rep.name}</a><ul>
              <li> <a class="btn btn-primary ">Stars:${rep.stargazers_count } </a> </li>
              <li><a class="btn btn-secondary ">Watchers:${rep.watchers_count} </a></li>
              <li> <a class="btn  btn-ternary">Forks:${rep.forks_count}</a></li>
            </ul>
          </li>
          </ul>
          </div>    `;

      document.getElementById('Repos').innerHTML = `
       <div class="repos-content">
      <div class="heading">
        <h1>Latest Repositories</h1>
      </div>
      ${output}
      </div>       
       `;
    });
  }

  showAlert() {
    this.clear();
    document.getElementById('icon').innerHTML = `
    <div class="icon">
    <img src="./img/empty.svg" alt="">
    <h1> User Doesn't Exist </h1>
    </div>    `;
    setTimeout(this.RemoveMessage, 2000);
  }

  RemoveMessage() {
    document.getElementById('icon').innerHTML = `
    <div class="icon">
    <img src="./img/empty.svg" alt="">
    </div>
    `;
  }

  showMessage() {
    this.clear();
    document.getElementById('icon').innerHTML = `
    <div class="icon">
    <img src="./img/empty.svg" alt="">
    <h1>Please, Enter Username</h1>
    </div>
    `;
    setTimeout(this.RemoveMessage, 2000);
  }

  clear() {
    document.getElementById('Repos').innerHTML = '';
    document.getElementById('profile').innerHTML = '';
  }
}