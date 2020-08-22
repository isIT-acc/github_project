class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.deleteMessage();
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3 mb-3">
          <img src="${user.avatar_url}" alt="" class="img-fluid mb-2" />
          <div class="badge badge-success">
            Подписчики:${user.followers}
          </div>
          <div class="badge badge-info">
            Подписки:${user.following}
          </div>
          <div class="badge badge-primary">
            Публичные репозитории:${user.public_repos}
          </div>
        </div>
        <div class="col-md-9">
          <ul class="list-group mb-4">
            <li class="list-group-item">Имя:${user.name}</li>
            <li class="list-group-item">Компания:${user.company}</li>
            <li class="list-group-item">Блог:${user.blog}</li>
            <li class="list-group-item">Местоположение:${user.location}</li>
            <li class="list-group-item">Электронная почта:${user.email}</li>
            <li class="list-group-item">Зарегестрирован:${user.created_at}</li>
          </ul>
          <a
              href="${user.html_url}"
              target="_blank"
              class="btn btn-primary mb-4 btn-block"
              >Перейти к профилю
          </a>
        </div>
      </div>
    </div>
    <h3 class="mb-3 text-center">Последние репозитории</h3>
    <div id="repos"></div>
    `;
  }

  showMessage(mess, classesNames) {
    this.deleteMessage();
    const alert = document.createElement("div");
    alert.className = classesNames;
    alert.appendChild(document.createTextNode(mess));
    const container = document.querySelector(".searchContainer");
    const profile = document.getElementById("profile");
    container.insertBefore(alert, profile);
  }
  deleteMessage() {
    const mess = document.querySelector(".alert");
    if (mess) mess.remove();
  }
  deleteProfile() {
    this.profile.innerHTML = "";
  }
  shownProfile() {
    return this.profile.innerHTML !== "";
  }
  shownMessage() {
    const mess = document.querySelector(".alert");
    if (mess) return true;
  }
  showRepos(repos) {
    let output = "";
    repos.forEach(function (repo) {
      output += `
      <div class="card card-body mb-2">
        <div class="row">  
          <div class="col-md-10">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-2">
            <span class="badge badge-secondary">Просмотров:${repo.watchers_count}</span>
            <span class="badge badge-primary">Звёзд:${repo.stargazers_count}</span>
          </div>
        </div>
      </div>
      `;
    });

    document.getElementById("repos").innerHTML = output;
  }
}
