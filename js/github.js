class Github {

   constructor() {
      this.client_id = 'd4f7e8196857336731de';
      this.client_secret = '90b26a7fff7211179dc0fa6ff995b3759bd359ee';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
   }


   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profileData = await profileResponse.json();
      const reposData = await reposResponse.json();

      return {
         profile: profileData,
         repos: reposData
      }
   }
}