let x =10;
let y =20;
console.log(x+y);
console.log(x%y);
let num=7;
if (num%2==0){
    console.log("Divisible by 2");
}else{
    console.log("Not Divisible By 2");
    }
    

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            console.log( false);
        }
        j--;
    }
     console.log(true);
}
 isPalindrome("str")