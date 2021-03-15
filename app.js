
const github = new Github;
const ui = new UI;
const searhUser = document.querySelector('#username');
searhUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value;
    if(userText !== ''){
       

        github.getUser(userText)
        .then((data) => {
            if(data.profile.message === "Not Found"){
                
                ui.clearProfile();
            }
            else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repo);
            }   
        })
    }else{
        //clear profile
       ui.clearProfile();
    }
})