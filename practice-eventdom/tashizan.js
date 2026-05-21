function calc() {

    
    let left = document.getElementById("left").value;

  
    let right = document.getElementById("right").value;

   
    let x = parseInt(left);
    let y = parseInt(right);


    let kotae = x + y;

   
    let span = document.getElementById("answer");
    span.textContent = kotae;
}


document.getElementById("calc").addEventListener("click", calc);