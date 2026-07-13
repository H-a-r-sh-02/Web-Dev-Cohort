/* Make first and last letter of each word uppercase
 let test = "hello bhai kidhr ho m milne aaya hu";
let word = test.split(" ");
let ans = "";
for (let i=0; i<word.length; i++) {
        if(word[i].length <= 2) ans += word[i].toUpperCase() + " ";
        else ans += word[i][0].toUpperCase() + word[i].substring(1,word[i].length-1) + 
        word[i][word[i].length-1].toUpperCase() + " ";
}
console.log(ans); */