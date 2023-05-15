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
    
    document.getElementById("team1").innerHTML = "<h3>Team 1</h3>"
    for (let i = 0; i != team1.length; i++) {
        document.getElementById("team1").innerHTML = document.getElementById("team1").innerHTML + `<p>${team1[i]}</p>`;
    }

    document.getElementById("team2").innerHTML = "<h3>Team 2</h3>"
    for (let i = 0; i != team2.length; i++) {
        document.getElementById("team2").innerHTML = document.getElementById("team2").innerHTML + `<p>${team2[i]}</p>`;
    }

    // cleanup
    [allnames, team1, team2] = [[], [], []];
}

document.getElementById("submit-button").addEventListener("click", random_main);

// IDEE: 
// Um es spannender zu machen, die Spieler einzelnd "revealen". 