var age;
var height;


$(document).ready(function() {
  $('#thundermountain').hide();
  $('#missiontomars').hide();
  $('#screamer').hide();
  $('#palerider').hide();
  $('#mellowyellow').hide();
  $('#sorry').hide();
  $("form#info").submit(function(event) {
    age = $("input#age").val();
    height = $("input#height").val();



  $("#result").show();

if (parseInt(age) >= 12 && (height) >= 100 && (height) < 160) {
  $('#mellowyellow').show();
}
if ((parseInt(age) >= 15) && (height) >= 110) {
  $('#missiontomars').show();
}
if (parseInt(age) >= 16 && (height) >= 130) {
  $('#screamer').show();
}
if (parseInt(age) >= 18 && (height) >= 160) {
  $('#thundermountain').show();
}
if ((parseInt(age) >= 20 && (age) < 60) && ((height) >= 170 && (height) < 300)) {
  $('#palerider').show();
}
else {
  $('#sorry').show();
}
    event.preventDefault();
 });

});
