var link25 = document.getElementById("links25");
var link25= document.getElementById("links25");
var link35 = document.getElementById("links35");
var links45 = document.getElementById("links45");
var links55 = document.getElementById("links55"); 
var btn2 = document.getElementById("btn2");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var first = ""; 
var last = "";
var answer; 
var is_answer = false; 
var c; 
var if_else_number = false;
function Commands_Plus(){
    if_else_number = true;
}
function Command_One(){
    Numbers("1");
}
function Command_Two(){
    Numbers("2");
}
function Command_Three(){
    Numbers("3");
}
function Command_Four(){
    Numbers("4");
}
function Command_Five(){
    Numbers("5");
}
function Command_Six(){
    Numbers("6");
}
function Command_Seven(){
    Numbers("7");
}
function Command_Eight(){
    Numbers("8");    
} 
function Command_Nine(){
    Numbers("9");
}
function Command_C(){
    document.getElementById("The_Answer").innerHTML = "";
    is_answer = false; 
    first = "";
    last = ""; 
    answer = 0;
    if_else_number = false; 
    c = ""; 
}
function Command_Plus(){
    CAL("+");
}
function Command_Minuas(){
    CAL("-");
}
function Command_Three(){
    CAL("/");
}
function Command_Double(){
    CAL("*");
}
function SubmitAnswer(){
    if(!is_answer && if_else_number){
        is_answer = true; 
        if(c == "+")answer = parseInt(first) + parseInt(last);
        else if(c == "/")answer = parseInt(first) / parseInt(last);
        else if(c == "-")answer = parseInt(first) - parseInt(last);
        else if(c == "*")answer = parseInt(first) * parseInt(last);
        document.getElementById("The_Answer").innerHTML = answer; 
    }
}
function CAL(sum){
    if(!if_else_number){
        c = sum;
        document.getElementById("The_Answer").innerHTML = first + " " + c;
        if_else_number = true;       
    }
}
function Numbers(num){
    if(!is_answer){
        if(if_else_number){
            last = last + num;
            document.getElementById("The_Answer").innerHTML =  first + " " + c + " " + last;
        }
        else
        {
            first = first + num; 
            document.getElementById("The_Answer").innerHTML =  first; 
        }  
    }
}