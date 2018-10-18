// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//
//     ctx.beginPath();
//     ctx.moveTo(75, 50);
//     ctx.lineTo(100, 75);
//     ctx.lineTo(100, 25);
//     ctx.fill();
//   }
// }


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


    // function draw() {
//
//
// var canvas = document.getElementById('triangle-canvas');
// var ctx = canvas.getContext('2d');
//
// var R1=120, R2=140, R3=90;
// var Ax=0, Ay=0;
// var Bx=R3, By=0;
// var Cx=(R2*R1+R3*R3-R1*R1)/(2*R3);
// var Cy=Math.sqrt(R2*R2-Cx*Cx);
//
// var Ox = canvas.width / 2 - Bx/2;
// var Oy = canvas.height / 2 + Cy/2;
//
//
// ctx.beginPath();
// ctx.moveTo(Ox+Ax, Oy-Ay);
// ctx.lineTo(Ox+Bx, Oy-By);
// ctx.lineTo(Ox+Cx, Oy-Cy);
// ctx.closePath();
// ctx.fillStyle="gold"; ctx.lineWidth=2;
// ctx.stroke(); ctx.fill();
//
// }

  event.preventDefault();

  });

});
