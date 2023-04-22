function clearScreen() {
    
    document.getElementById("result").value = "";
}

function display(v) {
   
    document.getElementById("result").value += v;
}

function calculate() {
  
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
}

function del(){
    
    document.getElementById("result").value = document.getElementById("result").value.slice(0,-1);
}

function sqrt(){
   
    var a = document.getElementById("result").value;
    var b = Math.sqrt(a);
    document.getElementById("result").value = b;
}