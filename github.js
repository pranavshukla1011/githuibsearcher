class Github{
    constructor(){
        this.client_id = '64c9013e2422e89fadbf';
        this.client_secret = '7ad0af6343a2135e9e152ba981b081dab835a9e3';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?&grant_type=client_credentials&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();
        
        return {
            profile: profileData,
            repo:repoData
        }
    }
}