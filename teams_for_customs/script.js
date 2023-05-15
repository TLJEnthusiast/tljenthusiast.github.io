let [allnames, team1, team2] = [[], [], []];

function random_main() {
    allnames = document.getElementById("inputtextarea").value.split("\n").filter(function(entry) { return /\S/.test(entry); }).sort(() => Math.random() - 0.5);
    full_length = allnames.length
    team1 = allnames;
    console.log(allnames);
    for (let i = 0; i < full_length/2; i++) {
        team2.push(team1.pop());
    };
    console.log(team1, team2);
    
    document.getElementById("team1").innerHTML = team1;
    document.getElementById("team2").innerHTML = team2;

    // cleanup
    [allnames, team1, team2] = [[], [], []];
}

document.getElementById("submit-button").addEventListener("click", random_main);

// IDEE: 
// Um es spannender zu machen, die Spieler einzelnd "revealen". 