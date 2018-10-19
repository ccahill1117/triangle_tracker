
$(document).ready(function() {
  $("form#triangleNumbers").submit(function(event) {

    var lengthA = parseInt($("input#sideA").val());
    var lengthB = parseInt($("input#sideB").val());
    var lengthC = parseInt($("input#sideC").val());


    if (lengthA + lengthB < lengthC || lengthB + lengthC < lengthA || lengthA + lengthC < lengthB) {
       $("#notTriangle").show();
     }
     else if (lengthA === lengthB && lengthA === lengthC || lengthB === lengthC && lengthA === lengthC) {
       $("#equilateral").show();
    }
    else if (lengthA === lengthB || lengthB === lengthC || lengthA === lengthC) {
      $("#isoceles").show();
    }
    else if (lengthA != lengthB && lengthB != lengthC && lengthA != lengthC) {
      $("#scalene").show();
    }


    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();

event.preventDefault();

  });

});
