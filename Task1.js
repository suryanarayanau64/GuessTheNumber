let attempts=10;
let rnum=Math.floor(Math.random()*100+1);
let prompt=require("prompt-sync")();
let count=1;

while(attempts>0)
{
    let guess=Number(prompt(`Enter the number for ${count}: `));
    if(guess=== rnum)
        {
            console.log("Congrats ! Your guess is Correct");
            
        }
        else if(guess >rnum){
            console.log("You r Guess is To high");
            
        }
        else{
            console.log("Your guess is To Low");
            
        }
    count++;
    attempts--;
}
if(attempts===0)
{
    console.log("Sorry Your Attmpts or Over Thank You the Number is " ,rnum);
    
}
