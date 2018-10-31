var age;
var height;


$(document).ready(function() {
  $("form#info").submit(function(event) {
    age = $("input#age").val();
    height = $("input#height").val();



if (parseInt(age) >= 12 && (height) >= 100 && (height) < 160) {
  $('#mellowyellow').addClass("canride");
}
if ((parseInt(age) >= 15) && (height) >= 110) {
  $('#missiontomars').addClass("canride");
}
if (parseInt(age) >= 16 && (height) >= 130) {
  $('#screamer').addClass("canride");
}
if (parseInt(age) >= 18 && (height) >= 160) {
  $('#thundermountain').addClass("canride");
}
if ((parseInt(age) >= 20 && (age) < 60) && ((height) >= 170 && (height) < 300)) {
  $('#palerider').addClass("canride");
}
else {
  $('#sorry').addClass("canride");
}
    event.preventDefault();
 });

});
