 //init
const gitRepo = new Github();
const ui = new UI();

//search repo
const searchRepo = document.querySelector('.searchGit');

//Add event
searchRepo.addEventListener('keyup', e=>{

//get input text
const userText = e.target.value;

if(userText !== ' '){

    //make http call to Github Api
    gitRepo.getRepo(userText).then(data=>{
        //diplay results
        
        ui.showRepo(data.repo);

    });
}
else{
//nothing yet

}




})
