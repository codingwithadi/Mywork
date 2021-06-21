let screen = document.getElementById("input");
buttons = document.querySelectorAll("button");
let screenValue = " ";

// function equal(){
//     screen.value = 0;
//     screenValue = screenValue + screen.value;
//     // screen.value = eval(screen.value);
//     screen.value = screenValue;
// }
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText = e.target.innerText;


        if(buttonText == "X"){
            buttonText = "*";
            screenValue = screenValue + buttonText;
           
            screen.value = screenValue;

        }
        else if(buttonText == "C"){
            screenValue = " ";
            screen.value = screenValue;
        }
        else if(buttonText == "←"){
            screenValue = " ";
            screen.value = screenValue;
        }
        else if (buttonText == "="){
            screenValue = screen.value  //directly get a value from input field
            screen.value = eval(screenValue);
            // screenValue = screenValue + buttonText;
            
        }
        else {
            screenValue = screenValue + buttonText;
            screen.value = screenValue;
        }
        
    });
    
}