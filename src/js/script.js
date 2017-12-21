const GITHUB_LINK = "https://github.com/jadenyjw"
const LINKEDIN_LINK = "https://linkedin.com/in/jadenyjw/"
const EMAIL_ADDRESS ="jadenyjw@gmail.com"
const RESUME_LINK = "resume.pdf"
var command = ""

const HELP_STR =
`jsh commands: <br>
  ls - list directories and files. <br>
  get - fetch a specific file/link. <br>`;

const DONATE_STR =
`If you like what I do, please consider donating. <br>
btc: 39A6WTbEpHVvUo38FSwn1n8tWBnm2FLW5e <br>
eth: 0x70e6931bee5d3f158b999aa3b2eae4dded918e53 <br>
ltc: LNiuP5kPx3wqBxD9n3R2RjunsW7thQGmow <br>`

const JSH_STR =
`<span class="username">jaden</span> &nbsp; <span class="at"> @ </span> &nbsp; <span class="hostname">jadenyjw.github.io</span>
&nbsp; <span class="at"> in </span> &nbsp; <span class="directory"> ~ </span>`

const RESET_STR =
`<div class="row">
  <span class="username">jaden</span> &nbsp; <span class="at"> @ </span> &nbsp; <span class="hostname">jadenyjw.github.io</span>
  &nbsp; <span class="at"> in </span> &nbsp; <span class="directory"> ~ </span>
</div>
<div class="row">
  <span class="dollar"> $ </span> &nbsp; <input type="text" class="trans" id="line" autocapitalize="none">
</div>`

const UNKNOWN_COMMAND_STR = "jsh: command not found: ";

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
  commandParsed = command.split(" ");
  parentCommand = commandParsed[0]

  if (parentCommand == "get"){

  }
  else if (parentCommand == "ls"){

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

  document.getElementById('line').focus();
};
