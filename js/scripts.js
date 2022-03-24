$(document).ready(function() {
  $("form#triangleForm").submit(function(event) {
    const sideA = parseInt($("input#sideA").val());
    const sideB = parseInt($("input#sideB").val());
    const sideC = parseInt($("input#sideC").val());


  if (sideA === sideB && sideB===sideC) {
    alert("That's an EQUILATERAL TRIANGLE");
  }

  event.preventDefault();
});
});