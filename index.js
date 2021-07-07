// Your code here

var dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";


  function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
  }

  function moveDodgerRight() {
      console.log('should be moving')
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left +5}px`;
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } 
    else if(e.key === "ArrowRight") {
         
            moveDodgerRight(); 
    }
    
  });