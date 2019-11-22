let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    let leftNums = dodger.style.left.replace('px', '');
    let left = parseInt(leftNums, 10);

    if(left > 0){
        dodger.style.left = `${left - 1}px`;
    }
};

function moveDodgerRight(){
    let leftNums = dodger.style.left.replace('px', '');
    let left = parseInt(leftNums, 10);

    if(left > 0){
        dodger.style.left = `${left + 1}px`;
    }
};
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
});

document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowLeft'){
        moveDodgerLeft();
    }
});