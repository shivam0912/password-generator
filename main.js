const length = document.getElementById('length');
const upperCase = document.getElementById('upperCase');
const lowerCase = document.getElementById('lowerCase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const result = document.getElementById('result');
const generate = document.getElementById('button');
const clipboard = document.getElementById('clipboard')

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const symbolLetters = "!@#$%^&*_=";

console.log(getRandomSymbols(symbolLetters));


generate.addEventListener('click',()=>{
    console.log("clicked")
    const passLen = +length.value;
   // console.log(passLen)
    
    

    let password ='';
    for(let i=0;i<passLen;i++){
        const x =  generatePassword()
        password+=x;
    }
    
    //console.log(hasUpper);
    result.innerHTML = password;
})

function generatePassword(){

   const pass = [];

   if(upperCase.checked) pass.push(getRandomLetter(upperCaseLetters));
   if(lowerCase.checked) pass.push(getRandomLetter(lowerCaseLetters));
   if(numbers.checked) pass.push(getRandomNumber());
   if(symbols.checked) pass.push(getRandomSymbols(symbolLetters));

    if(pass.length===0)return "";


    return pass[Math.floor(Math.random()*pass.length)];
}





console.log(getRandomLetter(lowerCaseLetters))
console.log(getRandomNumber())


function getRandomLetter(letter){
    return letter[Math.floor(Math.random()*letter.length)];
}
function getRandomNumber(){
    return Math.floor(Math.random()*9)+1;
}
function getRandomSymbols(symbolLetters){
    return symbolLetters[Math.floor(Math.random()*symbolLetters.length)];

}

clipboard.addEventListener('click', async () => {
    const password = result.innerText;
      
    if (!password) {
      return;
    }
  
    try {
      await navigator.clipboard.writeText(password);
      alert('Password copied to clipboard');
    } catch (err) {
      console.error('Failed to copy password: ', err);
    }
  });
  