//assigning var
var winCount
var countDown;
var wordArray = ['function','javascript','commit','content','header']

//grabbing random word
function {
    var randomWord = wordArray[Math.floor(Math.random()*wordArray.length)];
    return wordArray
}

// make underscores in place of letters

//notice input of typeing

// create timer + if runs out game over

//if win statement

//total win/lose counts
function winCountFunc() {
    var num = 0;
    var lettUsed = "";
    var count = word.length;

    while(count > 0) {
        if(lettUsed.includes(word[count - 1])) {

        }

        else{
            num += 1;
            lettUsed += word[count - 1];
        }

        count -= 1;
    }

    return num;
}

// When a user presses a letter key, the user's guess should be captured as a key event.
// When a user correctly guesses a letter, the corresponding blank "_" 
// should be replaced by the letter.
//  For example, if the user correctly selects "a", then "a _ _ a _" should appear.
// When a user wins or loses a game, a message should appear and the timer should stop.
// When a user clicks the start button, the timer should reset.
// When a user refreshes or returns to the brower page, the win and loss counts should persist.