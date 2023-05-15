let [allnames, team1, team2] = [[], [], []];
let hidden_Collection
let timer = 4000
let add_show_index = 0
var adding_all_show
var jump = false


function add_show(team1index) {
    team1index = team1index + add_show_index;
    var team2index = team1index + hidden_Collection.length / 2;
    if (team1index == hidden_Collection.length / 2) {
        clearInterval(adding_all_show);
        return;
    }

    if (jump) {
        console.log("team2index = " + team2index);
        hidden_Collection[team2index].classList.add("show");
        add_show_index = add_show_index + 1;
    }   else {
        console.log("team1index = " + team1index);
        hidden_Collection[team1index].classList.add("show");
    }
    
    
    jump = !jump;
    
}
function start_animation() {
    hidden_Collection = document.getElementsByClassName("hidden");
    setTimeout(function() {
        hidden_Collection[0].classList.add("show")
        hidden_Collection[hidden_Collection.length/2].classList.add("show")
    }, 10)

    adding_all_show = setInterval(add_show, timer, 1);
    
}
function random_main() {
    allnames = document.getElementById("inputtextarea").value.split("\n").filter(function(entry) { return /\S/.test(entry); }).sort(() => Math.random() - 0.5);
    full_length = allnames.length
    team1 = allnames;
    for (let i = 0; i < full_length/2; i++) {
        team2.push(team1.pop());
    };
    
    document.getElementById("team1").innerHTML = `<h3 class="hidden" id="revealtitle">Team 1</h3>`
    for (let i = 0; i != team1.length; i++) {
        document.getElementById("team1").innerHTML = document.getElementById("team1").innerHTML + `<p class="hidden" id="reveal">${team1[i]}</p>`;
    }

    document.getElementById("team2").innerHTML = `<h3 class="hidden" id="revealtitle">Team 2</h3>`
    for (let i = 0; i != team2.length; i++) {
        document.getElementById("team2").innerHTML = document.getElementById("team2").innerHTML + `<p class="hidden" id="reveal">${team2[i]}</p>`;
    }

    setTimeout(start_animation, 500);

    // cleanup
    [allnames, team1, team2] = [[], [], []];
}

document.getElementById("inputtextarea").value = "Bieber\nTrocker\nMika\nTobias\nMalte\nMax\nWhiskas\nHenri";
document.getElementById("submit-button").addEventListener("click", random_main);