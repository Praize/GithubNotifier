class Github{

    constructor(){
        this.client_id = '486fdc1ef6a07bbc9387';
        this.client_secret = '1304d2dd375a2b99dc15647b5030343dfc0831f7';
        this.repo_count = 8;
    }

    async getRepo(userText){

        const repo_response =  await fetch(`https://api.github.com/search/repositories?q=${userText}&client_id
        =${this.client_id}&client_secret=${this.client_secret}&per_page=${this.repo_count}`); 

       const repo = await repo_response.json();
        //console.log(repo.items);
       return{
         repo : repo.items
       }
          
    }
}