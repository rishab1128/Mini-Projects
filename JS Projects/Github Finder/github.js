class Github{
    constructor(){
        this.client_id='d3b1d4efc1f04a5729d4';
        this.client_secret='2e3c393ad5565a744240782f9edc2decdabcd4a9';
        this.repos_count=5;
        this.repos_sort='created: asc';
    }

    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile= await profileResponse.json();
        const repos= await repoResponse.json();

        return {profile,repos} ; //returning an object profile
    }

}