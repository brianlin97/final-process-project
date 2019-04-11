var number = 1;

$("#number").append("<h2>1</h2");

$("#myAudio").attr("src","music/"+number+".wav");

// function play() {
//   var audio = new Audio('music/1.wav');
//   audio.play();
//   audio.controls = true;
//   $("#number.h2").html(number);
// }

function next() {
  number++;
  $("#myAudio").attr("src","music/"+number+".wav");
  $("h2").html(number);
    console.log(number);
}
