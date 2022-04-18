// alert('Hello world!');
// 1 step: random number generator
var randomPicture1 = Math.floor(Math.random() * 6) + 1;
var randomPicture2 = Math.floor(Math.random() * 6) + 1;
//console.log(randomPicture1)

// 2nd step: random image code
var randomImage1 = `images/D${randomPicture1}.png`;
var randomImage2 = `images/D${randomPicture2}.png`;
//console.log(randomImage1)
//var randomSource1 = 

// 3rd step: image location using dom
var image1 = document.querySelectorAll('img')[0];
var image2 = document.querySelectorAll('img')[1];
// 4th dom for image 1 injection to the random img source
image1.setAttribute('src', randomImage1);
image2.setAttribute('src', randomImage2);
// 5th step: Adding dice img var names
var dice1 = 'images/D1.png';
var dice2 = 'images/D2.png';
var dice3 = 'images/D3.png';
var dice4 = 'images/D4.png';
var dice5 = 'images/D5.png';
var dice6 = 'images/D6.png';

// 6th step: conditional statement for the dice number/winner
// player 1 wins for DICE6
if (randomImage1 > randomImage2 && randomImage1 === dice6) {
    document.querySelector('h1').textContent = "DICE #6 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WIN! ♡ ´･ᴗ･ `♡";
    document.querySelector('.p2').textContent = "PLAYER 2  LOSE! ಠ_ಠ";
    // DRAW for DICE6
} else if (randomImage1 === randomImage2 && randomImage1 === dice6) {
    document.querySelector('h1').textContent = "DRAW!";
    // Player 2 wins for DICE6
} else if (randomImage2 > randomImage1 && randomImage2 === dice6) {
    document.querySelector('h1').textContent = "DICE #6 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 LOSE! (`●|_|●´)";
    document.querySelector('.p2').textContent = "PLAYER 2  WINS! ( ͡° ͜ʖ ͡°)";

} // Player 2 wins for DICE5
else if (randomImage1 > randomImage2 && randomImage1 === dice5) {
    document.querySelector('h1').textContent = "DICE #5 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS! ( ๑>ᴗ<๑ )";
    document.querySelector('.p2').textContent = "PLAYER 2  LOSE! ಠ_ಠ";
    // DRAW for DICE5
} else if (randomImage1 === randomImage2 && randomImage1 === dice5) {
    document.querySelector('h1').textContent = "DRAW!";
    // Player 2 wins for DICE5
} else if (randomImage2 > randomImage1 && randomImage2 === dice5) {
    document.querySelector('h1').textContent = "DICE #5 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 LOSE! (－‸ლ)";
    document.querySelector('.p2').textContent = "PLAYER 2  WINS! ( ＾◡＾)っ ♡";

} // Player 2 wins for DICE4
else if (randomImage1 > randomImage2 && randomImage1 === dice4) {
    document.querySelector('h1').textContent = "DICE #4 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS! ¯\_(ツ)_/¯";
    document.querySelector('.p2').textContent = "PLAYER 2  LOSE! ┻━┻︵ヽ(`Д´)ﾉ︵ ┻━┻";
    // DRAW for DICE4
} else if (randomImage1 === randomImage2 && randomImage1 === dice4) {
    document.querySelector('h1').textContent = "DRAW!";
    // Player 2 wins for DICE4
} else if (randomImage2 > randomImage1 && randomImage2 === dice4) {
    document.querySelector('h1').textContent = "DICE #4 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 LOSE! ʕノ•ᴥ•ʔノ ︵ ┻━┻";
    document.querySelector('.p2').textContent = "PLAYER 2 WINS! (づ￣ ³￣)づ";

} // Player 2 wins for DICE3
else if (randomImage1 > randomImage2 && randomImage1 === dice3) {
    document.querySelector('h1').textContent = "DICE #3 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS! ᵔ ᴥ ᵔ";
    document.querySelector('.p2').textContent = "PLAYER 2  LOSE! (¯﹃¯)";
    // DRAW for DICE3
} else if (randomImage1 === randomImage2 && randomImage1 === dice3) {
    document.querySelector('h1').textContent = "DRAW!";
    // Player 2 wins for DICE3
} else if (randomImage2 > randomImage1 && randomImage2 === dice3) {
    document.querySelector('h1').textContent = "DICE #3 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 LOSE! ┻━┻︵ \(°□°)/ ︵ ┻━┻";
    document.querySelector('.p2').textContent = "PLAYER 2  WINS! ฅ^•ﻌ•^ฅ";

} // Player 2 wins for DICE2
else if (randomImage1 > randomImage2 && randomImage1 === dice2) {
    document.querySelector('h1').textContent = "DICE #2 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 WINS! ( ˘ ͜ʖ ˘)";
    document.querySelector('.p2').textContent = "PLAYER 2 LOSE! (╯°□°）╯︵ ┻━┻";
    // DRAW for DICE2
} else if (randomImage1 === randomImage2 && randomImage1 === dice2) {
    document.querySelector('h1').textContent = "DRAW!";
    // Player 2 wins for DICE2
} else if (randomImage2 > randomImage1 && randomImage2 === dice2) {
    document.querySelector('h1').textContent = "DICE #2 WINS!";
    document.querySelector('.p1').textContent = "PLAYER 1 LOSE! (ノಠ益ಠ)ノ彡┻━┻";
    document.querySelector('.p2').textContent = "PLAYER 2  WINS! ¬‿¬";

    // DRAW for DICE1
} else if (randomImage1 === randomImage2 && randomImage1 === dice1) {
    document.querySelector('h1').textContent = "DRAW!";
}