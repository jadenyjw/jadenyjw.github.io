const GITHUB_LINK = "https://github.com/jadenyjw"
const LINKEDIN_LINK = "https://linkedin.com/in/jadenyjw/"
const EMAIL_ADDRESS ="jadenyjw@gmail.com"
const RESUME_LINK = "resume.pdf"
var current_dir = "~"
var command = ""


$(document).ready(function(){
    window.addEventListener("keypress", myEventHandler, false);
    document.getElementById('line').focus();
});

function myEventHandler(e){
    var keyCode = e.keyCode;
    console.log(keyCode);
    if(keyCode == 13){

    }
};

function processCommand(command){

};
