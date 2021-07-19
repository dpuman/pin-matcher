let randomPin='';


const pinGeneratorBtn = document.getElementById('pin-generator-btn');
const pinGeneratorDisplay=document.getElementById('pin-generator-display');


//Pin generator
pinGeneratorBtn.addEventListener('click', function(e) {
    randomPin=Math.floor(Math.random() *(9999-1000+1)+1000);
    
    randomPin=randomPin.toString();
    pinGeneratorDisplay.value=randomPin;

});

// const buttons=document.getElementsByClassName('calc-body');


// for(let i=0; i<buttons.length; i++){
    //     console.log(buttons[i]);
    // }

//Pin Checker
const calcBody = document.getElementById('calc-body');
const pinCheckerDisplay= document.getElementById('pin-checker-display');

calcBody.addEventListener('click',function(e){
    let buttonValue = e.target.innerText;

    checkerDisplay(buttonValue);
})

function checkerDisplay(buttonValue){
    

    if(buttonValue==='Submit'){
        pinChecker();
    }else if(buttonValue==='C'){
        pinCheckerDisplay.value=''
    }else if(buttonValue==='<'){
        let tempValue =pinCheckerDisplay.value
        tempValue=tempValue.slice(0,-1);
        pinCheckerDisplay.value=tempValue
        
    }
    else{
        pinCheckerDisplay.value+=buttonValue;
    }
}
//pin Checker
function pinChecker(){
    
    if(pinCheckerDisplay.value===randomPin){
        document.getElementById('success-notification').style.display='block';
        document.getElementById('wrong-notification').style.display='none';

        pinGeneratorDisplay.value='';
        pinCheckerDisplay.value='';

    }else{
        document.getElementById('wrong-notification').style.display='block';
        document.getElementById('success-notification').style.display='none';
        pinTryCheck();
    }
}
//Pin try Check
const pinTrySpan= document.getElementById('pin-try');

function pinTryCheck(){
    let pinTryValue=pinTrySpan.innerText;
    pinTryValue=parseInt(pinTryValue);
    pinTrySpan.innerText=pinTryValue-1;

    if(pinTryValue==1){
        document.getElementById('submit-btn').disabled=true;
    }

}