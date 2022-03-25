$(document).ready(function() {
  $("form#triangleForm").submit(function(event) {
    event.preventDefault();
    const sideA = parseInt($("input#sideA").val());
    const sideB = parseInt($("input#sideB").val());
    const sideC = parseInt($("input#sideC").val());





    if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideC + sideA <= sideB) {
      alert("That ain't no triangle!");  
  }
  else if (sideA === sideB && sideB === sideC) {
      alert("That's an EQUILATERAL TRIANGLE");
  } else if (sideA === sideB || sideC === sideB || sideC ===sideA) {
      alert("That's an Isosceles");
  } else if (sideA !== sideB && sideB !== sideC)  {
      console.log();
      alert("That's an SCALENE");
  }  else if (sideA === a-z || sideB === [0-9] || sideC != [0-9]) {
     alert("Error: Please Enter Numbers Only");
  } 
  });
});