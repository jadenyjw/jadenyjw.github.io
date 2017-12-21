const GITHUB_LINK = "https://github.com/jadenyjw"
const LINKEDIN_LINK = "https://linkedin.com/in/jadenyjw/"
const EMAIL_ADDRESS ="jadenyjw@gmail.com"
const RESUME_LINK = "resume.pdf"
var current_dir = "~"
var command = ""

const HELP_STR =
`jsh commands:\n
 ls - list directories and files.\n
 cd - change into a directory.\n `;

$(document).ready(function(){
    window.addEventListener("keypress", eventHandler, false);
    document.getElementById('line').focus();
});

function eventHandler(e){
    document.getElementById('line').focus();
    var keyCode = e.keyCode;
    console.log(keyCode);
    if(keyCode == 13){

    }
};

function processCommand(command){
  
};
