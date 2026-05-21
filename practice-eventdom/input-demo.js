function greeting() {

    
    let i = document.querySelector('input[name="shimei"]');

    
    let shimei = i.value;

   
    let aisatsu = "こんにちは，" + shimei + "さん";

 
    let p = document.getElementById("message");

   
    p.textContent = aisatsu;
}

document.getElementById("print").addEventListener("click", greeting);