let player_score = 0;
let computer_score = 0;
do{
    let maximum = parseInt(prompt("ENTER MAXIMUM NUMBER"));

    while(isNaN(maximum) || maximum < 25 || maximum > 100){
        console.log("ERROR!");
        if(isNaN(maximum)){
            console.log("PLEASE INPUT A NUMBER!")
        }
        else if(maximum < 25){
            console.log(`${maximum} IS LESS THAN THE MINIMUM NUMBER. PLEASE ENTER AGAIN.`);
        }
        else if(maximum > 100){
            console.log(`${maximum} IS GREATER THAN THE MAXIMUM NUMBER. PLEASE ENTER AGAIN.`);
        }
        else{
            console.log("INVALID INPUT. PLEASE ENTER AGAIN.");
        }
        maximum = parseInt(prompt("ENTER MAXIMUM NUMBER"));
    }

    console.log(`\n\nTHE MAXIMUM NUMBER IS ${maximum}`);
    console.log(`THE RANGE OF THE NUMBER IS 1-${maximum}`);

    let computer_number = Math.floor(Math.random() * maximum) + 1;

    let tries = 5;
    let guess;
    while(tries !== 0){
        guess = parseInt(prompt("GUESS THE COMPUTER GENERATED NUMBER"));
        if(guess === computer_number){
            break;
        }
        else if(guess > computer_number){
            console.log("\nYOUR GUESS IS GREATER THAN THE RANDOM NUMBER! GUESS AGAIN");
        } else if(guess < computer_number){
            console.log("\nYOUR GUESS IS LESS THAN THE RANDOM NUMBER! GUESS AGAIN");
        } else if(isNaN(guess)){
            console.log("\nPLEASE ENTER YOUR GUESS");
            tries += 1;
        } else{
            console.log("\nINVALID INPUT");
            tries += 1;
        }

        tries -= 1;
        console.log(`TRIES LEFT ${tries}`);
    }
    if(tries === 0){
        computer_score += 1;
        console.log("THE COMPUTER WIN THIS ROUND!");
    } else if(guess === computer_number){
        console.log("\nCONGRATULATIONS! YOU GUESSED THE RANDOM NUMBER CORRECTLY");
        player_score += 1;
    }
    
    console.log("\nSCOREBOARD");
    console.log(`PLAYER SCORE: ${player_score}\nCOMPUTER SCORE: ${computer_score}`);

    let choice = prompt("DO YOU WANT TO PLAY AGAIN?(Y or N)").toUpperCase();
    while(choice !== 'Y' || choice !== 'N'){
    if(choice === 'N'){
        break;
    }
    else if(choice === 'Y'){
        break;
    }
    else if(isNaN(choice)){
        console.log("PLEASE ENTER Y OR N!");
    }
    else{
        console.log("PLEASE ENTER Y OR N!");
    }
    choice = prompt("DO YOU WANT TO PLAY AGAIN?(Y or N)").toUpperCase();
    }

    if(choice === 'N'){
        console.log("\nSCOREBOARD SUMMARY");
        console.log(`PLAYER SCORE: ${player_score}\nCOMPUTER SCORE: ${computer_score}`);
        if(player_score > computer_score){
            console.log("CONGRATULATIONS! YOU WON AGAINST THE COMPUTER!");
        }
        else if(player_score < computer_score){
            console.log("THE COMPUTER BEATS YOU!\nBETTER LUCK NEXT TIME");
        }
        else{
            console.log("IT'S A TIE!");
        }
        break;
    }
  
}while(true);

console.log("\nTHANK YOU FOR PLAYING!");