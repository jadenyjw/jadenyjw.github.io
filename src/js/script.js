const GITHUB_LINK = "https://github.com/jadenyjw"
const LINKEDIN_LINK = "https://linkedin.com/in/jadenyjw/"
const DEVPOST_LINK = "https://devpost.com/jadenyjw"
const EMAIL_ADDRESS ="jadenyjw@gmail.com, jaden.wang@mail.utoronto.ca"
const RESUME_LINK = "resume.pdf"
var command = ""

var PAC_COUNT = 0
var PACMAN_STR = ""

var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        PAC_COUNT = xmlHttp.responseText;
        PACMAN_STR = "As of this week, I've ran pacman -Syu " + PAC_COUNT + " times."
}
xmlHttp.open("GET", "https://stats.jadenyjw.ml/pacman", true); // true for asynchronous
xmlHttp.send(null);


const HELP_STR =
`jsh commands: <br>
  ls - list directories and files. <br>
  cat &lt;file&gt; - open a specific file. <br>
  clear - clear the text on screen`;

const DONATE_STR =
`If you like what I do, please consider donating. <br>
btc: 39A6WTbEpHVvUo38FSwn1n8tWBnm2FLW5e <br>
eth: 0x70e6931bee5d3f158b999aa3b2eae4dded918e53 <br>
ltc: LNiuP5kPx3wqBxD9n3R2RjunsW7thQGmow <br>
xrp: rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh tag:109514665 <br>
grlc: GfT5tBDrKEVpAw4oDEjXGMkx4anqDr3R4u <br>
ppl: paypal.me/jadenyjw`

const ABOUT_STR =
`I'm Jaden Wang, a current Software Engineering specialist and Statistics major at the University of Toronto Scarborough Campus.`

const JSH_STR =
`<span class="username">jaden</span> &nbsp; <span class="at"> @ </span> &nbsp; <span class="hostname">jadenyjw.ml</span>
&nbsp; <span class="at"> in </span> &nbsp; <span class="directory"> ~ </span>`

const RESET_STR =
`<div class="row">
  <span class="username">jaden</span> &nbsp; <span class="at"> @ </span> &nbsp; <span class="hostname">jadenyjw.ml</span>
  &nbsp; <span class="at"> in </span> &nbsp; <span class="directory"> ~ </span>
</div>
<div class="row">
  <span class="dollar"> $ </span> &nbsp; <input type="email" class="trans" id="line" autocorrect="off" autocapitalize="none">
</div>`

const LS_STR = "about email github linkedin devpost resume donate"

const UNKNOWN_COMMAND_STR = "jsh: command not found: ";

const NO_FILE_STR = ": No such file or directory"


$(document).ready(function(){
    window.addEventListener("keypress", eventHandler, false);
    document.getElementById('line').focus();
});

function eventHandler(e){
    document.getElementById('line').focus();
    var keyCode = e.keyCode;
    if(keyCode == 13){
      processCommand(document.getElementById('line').value);
    }
};

function processCommand(command){

  // Super secret function.
  if(command == "rm -rf /"){
    close();
  }

  commandParsed = command.split(" ");
  parentCommand = commandParsed[0]

  if (parentCommand == "cat"){
    if(commandParsed.length >= 2){
      file = commandParsed[1];
      if(file == "github"){
        $("#terminal").append('<div class="row"> <span class="default"><a href="' + GITHUB_LINK + '">' + GITHUB_LINK + '</a></span></div>');
      }
      else if (file == "about"){
        $("#terminal").append('<div class="row"> <span class="default"> ' + ABOUT_STR + " " + PACMAN_STR + '</span></div>');
      }
      else if (file == "email"){
        $("#terminal").append('<div class="row"> <span class="default"> ' + EMAIL_ADDRESS + '</span></div>');
      }
      else if (file == "linkedin"){
        $("#terminal").append('<div class="row"> <span class="default"><a href="' + LINKEDIN_LINK + '">' + LINKEDIN_LINK + '</a></span></div>');
      }
      else if (file == "devpost"){
        $("#terminal").append('<div class="row"> <span class="default"><a href="' + DEVPOST_LINK + '">' + DEVPOST_LINK + '</a></span></div>');
      }
      else if (file == "resume"){
        window.open(RESUME_LINK, '_blank');;
      }
      else if (file == "donate"){
        $("#terminal").append('<div class="row"> <span class="default"> ' + DONATE_STR + '</span></div>');
      }
      else{
        $("#terminal").append('<div class="row"> <span class="default"> ' + "cat: " + file + NO_FILE_STR + '</span></div>');
      }
    }



  }
  else if (parentCommand == "ls"){
    $("#terminal").append('<div class="row"> <span class="ls"> ' + LS_STR + '</span></div>');
  }
  else if (parentCommand == "help"){
    $("#terminal").append('<div class="row"> <span class="default"> ' + HELP_STR + '</span></div>');
  }

  else{
    if (parentCommand != ""){
      $("#terminal").append('<div class="row"> <span class="default"> ' + UNKNOWN_COMMAND_STR + " " + parentCommand + '</span></div>');
    }
  }
  $( "#line" ).prop( "disabled", true );
  $('#line').attr('id', 'old');
  $("#terminal").append('<br>');
  $("#terminal").append(RESET_STR);
  if (parentCommand == "clear"){
    var children = $('#terminal').children();

    for(var x = 2; x < children.length; x++){
      children[x].remove();
    }
    $("#terminal").append('<div class="row"> <span class="dollar"> $ </span> &nbsp; <input type="email" class="trans" id="line" autocorrect="off" autocapitalize="none"></div>')
  }


  document.getElementById('line').focus();
};
