class Github {
  constructor() {
    this.client_id = "7f01dcaaba17569538d8";
    this.client_secret = "a24daee307d928d7b9533757e7664cb251a53a71";
    this.repos_count = 5;
    this.repos_sort = "updated:desc";
  } //в реальном проекте так делать нельзя, надо посмотреть как делать тоже самое на стороне сервера, почему? Одна из причин- client_id и client_secret видны в инструментах разработчика в браузере

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();
    return { profile: profile, repos: repos };
  }
}
