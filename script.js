let playersNumber;
let playersName = [];
let playerName;
let playersMoney = [];
let playerNumber = 0;
let usedTrainLines = [];
let playersInOrder = [];
let places = 1;
let same = 0;
let less = 0;
let more = 0;
let tie = [];
let originalPlayerNumber;
let userInput;
let properties = {};
let plus = true;

document.querySelector("#playersNumberButton").onclick = function(event) {
    event.preventDefault();
    if (document.querySelector("#playersNumberInput").value < 2) {
        alert("Legalább 2 játékos kell!")
    }
    else if (!(document.querySelector("#playersNumberInput").value % 1 == 0)) {
        alert("Egész számot adj meg!")
    }
    else {
        playersNumber = document.querySelector("#playersNumberInput").value;
        document.querySelector("#playersNumberInput").value = "";

        document.querySelector("#playersNumber").remove();
        document.querySelector("#playersNumberInput").remove();
        document.querySelector("#playersNumberButton").remove();


        document.querySelector("#playersName").classList.remove("hidden");
        document.querySelector("#playersNameInput").classList.remove("hidden");
        document.querySelector("#playersNameButton").classList.remove("hidden");

        let i1 = 0;
        let n1 = 1;

        document.querySelector("#playersName").innerHTML = `Hogy hívnak ${n1}. játékos?`;
        document.querySelector("#playersNameButton").onclick = function(event) {
            event.preventDefault();
            if (document.querySelector("#playersNameInput").value == "") {
                alert("Add meg a neved!");
            }
            else if (playersName.includes(` ${document.querySelector("#playersNameInput").value}`)) {
                alert("Ez a felhasználónév már foglalt!");
            }
            else {
                playerName = ` ${document.querySelector("#playersNameInput").value}`;
                playersName[i1] = playerName;
                document.querySelector("#playersNameInput").value = "";
                i1++;
                n1++;
                if (!(i1 < playersNumber)) {
                    document.querySelector("#playersName").remove();
                    document.querySelector("#playersNameInput").remove();
                    document.querySelector("#playersNameButton").remove();
                    

                    document.querySelector("#playersMoney").classList.remove("hidden");
                    document.querySelector("#playersMoneyInput").classList.remove("hidden");
                    document.querySelector("#playersMoneyButton").classList.remove("hidden");

                    let i2 = 0;

                    document.querySelector("#playersMoney").innerHTML = `${playersName[i2]}! Mennyi pénzed van?`;
                    document.querySelector("#playersMoneyButton").onclick = function(event) {
                        event.preventDefault();
                        if (document.querySelector("#playersMoneyInput").value < 0) {
                            alert("Pozitív számot adj meg!");
                        }
                        else if (!(document.querySelector("#playersMoneyInput").value % 1 == 0)) {
                            alert("Egész számot adj meg!");
                        }
                        else {
                            playersMoney[i2] = Number(document.querySelector("#playersMoneyInput").value);
                            document.querySelector("#playersMoneyInput").value = "";
                            i2++;
                            if (!(i2 < playersNumber)) {
                                document.querySelector("#playersMoney").remove();
                                document.querySelector("#playersMoneyInput").remove();
                                document.querySelector("#playersMoneyButton").remove();

                                document.querySelector("#actualPlayer").innerHTML = `Jelenlegei játékos: ${playersName[playerNumber]}`;
                                document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;

                                document.querySelectorAll(".players").forEach(element => {
                                    element.classList.remove("hidden");
                                })
                                document.querySelectorAll(".all").forEach(element => {
                                    element.classList.remove("hiddenAll");
                                })
                            }
                            else {
                            document.querySelector("#playersMoney").innerHTML = `${playersName[i2]}! Mennyi pénzed van?`;
                            }
                        }
                    }
                }
                else {
                document.querySelector("#playersName").innerHTML = `Hogy hívnak ${n1}. játékos?`;
                }
            }
        }
    }
}

document.querySelector("#nextPlayer").onclick = function(event) {
    event.preventDefault();
    playerNumber++;
    if (playerNumber >= playersNumber) {
        document.querySelector(".players").classList.add("hidden");
        document.querySelector(".helpQuestionMark").classList.add("hidden");
        for (n = 0; n < playersNumber; n++) {
            tie = [];
            same = 0;
            less = 0;
            more = 0;
        
            for (i = 0; i < playersNumber; i++) {
                if (i == n) {

                }
                else if (playersMoney[n] == playersMoney[i]) {
                    tie[same] = playersName[i];
                    same++;
                }
                else if (playersMoney[n] < playersMoney[i]) {
                    less++;
                }
                else if (playersMoney[n] > playersMoney[i]) {
                    more++;
                }
            }
        
            if (!(same + less + more == playersNumber - 1)) {
                alert("HIBA");
                console.log(same);
                console.log(less);
                console.log(more);
            }
            else {
                playersInOrder[less] = [playersName[n]];
        
                for (i = 0; i < tie.length; i++) {
                    playersInOrder[less].push(tie[i]);
                }
            }
        }
        playersInOrder = playersInOrder.filter(elem => elem !== "" && elem !== undefined);

        for (i = 0; i < playersInOrder.length; i++) {
            console.log(`${places}.:${playersInOrder[i]}`);
            alert(`${places}.:${playersInOrder[i]}`);
            places++;
        }
    }
    else {
        document.querySelector("#actualPlayer").innerHTML = `Jelenlegei játékos: ${playersName[playerNumber]}`;
        document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;

        if (playerNumber + 1 == playersNumber) {
            document.querySelector("#nextPlayer").innerHTML = `Játék vége`
        }
    }
}

document.querySelector("#first_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#first_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.piac_ter = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 2;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.piac_ter_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 4;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.piac_ter_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 10;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.piac_ter_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 30;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.piac_ter_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 90;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.piac_ter_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 160;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.piac_ter_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 250;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.piac_ter_level = "5";
                    break;
                case "b":
                    delete properties.piac_ter;
                    document.querySelector("#first_element").classList.remove("hidden");
                    break;
            }
            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
                element.classList.remove("hiddenAll");
            })  
        }
    }
    else {
        switch (properties.piac_ter_level) {
            case "a":
                    playersMoney[playerNumber] -= 2;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 4;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 10;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 30;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 90;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 160;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 250;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;  
        }
        document.querySelector("#first_element").classList.add("hiddenYet");
        document.querySelector("#first_element").classList.remove("unHidden");
        delete properties.piac_ter;
        delete properties.piac_ter_level;
    }
}

document.querySelector("#second_element").onclick = function() {
    if (plus) {
    document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#second_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.torok_udvar = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 4;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.torok_udvar_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 8;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.torok_udvar_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 20;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.torok_udvar_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 60;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.torok_udvar_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 180;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.torok_udvar_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 320;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.torok_udvar_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 450;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.torok_udvar_level = "5";
                    break;
                case "b":
                    delete properties.torok_udvar;
                    document.querySelector("#second_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
        }
    }
    else{
        switch (properties.torok_udvar_level) {
            case "a":
                    playersMoney[playerNumber] -= 4;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 8;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 20;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 60;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 180;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 320;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 450;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
    document.querySelector("#second_element").classList.add("hiddenYet");
    document.querySelector("#second_element").classList.remove("unHidden");
    delete properties.torok_udvar;
    delete properties.torok_udvar_level;
    }
}

document.querySelector("#third_element").onclick = function() {
    if (plus) {    
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#third_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.nagykorosi_ut = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 6;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagykorosi_ut_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 12;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagykorosi_ut_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 30;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagykorosi_ut_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 90;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagykorosi_ut_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 270;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagykorosi_ut_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 400;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagykorosi_ut_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 550;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.properties = "5";
                    break;
                case "b":
                    delete properties.nagykorosi_ut;
                    document.querySelector("#third_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.nagykorosi_ut_level) {
            case "a":
                    playersMoney[playerNumber] -= 6;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 12;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 30;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 90;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 270;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 400;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 550;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#third_element").classList.add("hiddenYet");
        document.querySelector("#third_element").classList.remove("unHidden");
        delete properties.nagykorosi_ut;
        delete properties.nagykorosi_ut_level;
    }
}

document.querySelector("#fourth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#fourth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.lestar_ter = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 6;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.lestar_ter_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 12;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.lestar_ter_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 30;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.lestar_ter_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 90;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.lestar_ter_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 270;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.lestar_ter_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 400;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.lestar_ter_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 550;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.lestar_ter_level = "5";
                    break;
                case "b":
                    delete properties.lestar_ter;
                    document.querySelector("#fourth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.lestar_ter_level) {
            case "a":
                    playersMoney[playerNumber] -= 6;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 12;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 30;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 90;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 270;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 400;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 550;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#fourth_element").classList.add("hiddenYet");
        document.querySelector("#fourth_element").classList.remove("unHidden");
        delete properties.lestar_ter;
        delete properties.lestar_ter_level;
    }
}

document.querySelector("#fifth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#fifth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.kisfaludy_ut = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 8;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kisfaludy_ut_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 16;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kisfaludy_ut_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 40;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kisfaludy_ut_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kisfaludy_ut_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 300;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kisfaludy_ut_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 450;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kisfaludy_ut_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 600;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kisfaludy_ut_level = "5";
                    break;
                case "b":
                    delete properties.kisfaludy_ut;
                    document.querySelector("#fifth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.kisfaludy_ut_level) {
            case "a":
                    playersMoney[playerNumber] -= 8;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 16;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 40;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                case "3":
                    playersMoney[playerNumber] -= 300;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 450;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 600;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#fifth_element").classList.add("hiddenYet");
        document.querySelector("#fifth_element").classList.remove("unHidden");
        delete properties.kisfaludy_ut;
        delete properties.kisfaludy_ut_level;
    }
}

document.querySelector("#sixth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#sixth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.egyetem_utca = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 10;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.egyetem_utca_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 20;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.egyetem_utca_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 50;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.egyetem_utca_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 150;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.egyetem_utca_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 450;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.egyetem_utca_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 625;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.egyetem_utca_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 750;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.egyetem_utca_level = "5";
                    break;
                case "b":
                    delete properties.egyetem_utca;
                    document.querySelector("#sixth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.egyetem_utca_level) {
            case "a":
                    playersMoney[playerNumber] -= 10;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 20;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 50;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 150;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 450;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 625;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 750;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#sixth_element").classList.add("hiddenYet");
        document.querySelector("#sixth_element").classList.remove("unHidden");
        delete properties.egyetem_utca;
        delete properties.egyetem_utca_level;
    }
}

document.querySelector("#seventh_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#seventh_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.szinhaz_ter = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 10;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.szinhaz_ter_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 20;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.szinhaz_ter_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 50;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.szinhaz_ter_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 150;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.szinhaz_ter_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 450;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.szinhaz_ter_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 625;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.szinhaz_ter_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 750;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.szinhaz_ter_level = "5";
                    break;
                case "b":
                    delete properties.szinhaz_ter;
                    document.querySelector("#seventh_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.szinhaz_ter_level) {
            case "a":
                    playersMoney[playerNumber] -= 10;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 20;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 50;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 150;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 450;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 625;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 750;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#seventh_element").classList.add("hiddenYet");
        document.querySelector("#seventh_element").classList.remove("unHidden");
        delete properties.szinhaz_ter;
        delete properties.szinhaz_ter_level;
    }
}

document.querySelector("#eighth_element").onclick = function() {
    if(plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#eighth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.janus_pannonius_ut = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 12;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.janus_pannonius_ut_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 24;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.janus_pannonius_ut_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 60;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.janus_pannonius_ut_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 180;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.janus_pannonius_ut_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 500;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.janus_pannonius_ut_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 700;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.janus_pannonius_ut_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 900;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.janus_pannonius_ut_level = "5";
                    break;
                case "b":
                    delete properties.janus_pannonius_ut;
                    document.querySelector("#eighth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.janus_pannonius_ut_level) {
            case "a":
                    playersMoney[playerNumber] -= 12;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 24;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 60;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 180;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 500;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 700;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 900;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#eighth_element").classList.add("hiddenYet");
        document.querySelector("#eighth_element").classList.remove("unHidden");
        delete properties.janus_pannonius_ut;
        delete properties.janus_pannonius_ut_level;
    }
}

document.querySelector("#ninth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#ninth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.petofi_ter = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 14;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.petofi_ter_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 28;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.petofi_ter_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 70;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.petofi_ter_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 200;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.petofi_ter_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 550;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.petofi_ter_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 750;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.petofi_ter_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 950;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.petofi_ter_level = "5";
                    break;
                case "b":
                    delete properties.petofi_ter;
                    document.querySelector("#ninth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.petofi_ter_level) {
            case "a":
                    playersMoney[playerNumber] -= 14;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 28;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 70;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 200;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 550;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 750;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 950;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#ninth_element").classList.add("hiddenYet");
        document.querySelector("#ninth_element").classList.remove("unHidden");
        delete properties.petofi_ter;
        delete properties.petofi_ter_level;
    }
}

document.querySelector("#tenth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#tenth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.nagyerdo = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 14;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagyerdo_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 28;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagyerdo_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 70;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagyerdo_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 200;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagyerdo_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 550;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagyerdo_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 750;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagyerdo_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 950;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.nagyerdo_level = "5";
                    break;
                case "b":
                    delete properties.nagyerdo;
                    document.querySelector("#tenth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.nagyerdo_level) {
            case "a":
                    playersMoney[playerNumber] -= 14;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 28;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 70;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 200;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 550;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 750;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 950;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#tenth_element").classList.add("hiddenYet");
        document.querySelector("#tenth_element").classList.remove("unHidden");
        delete properties.nagyerdo;
        delete properties.nagyerdo_level;
    }
}

document.querySelector("#eleventh_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#eleventh_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.bethlen_utca = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 16;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.bethlen_utca_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 32;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.bethlen_utca_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 80;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.bethlen_utca_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 220;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.bethlen_utca_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 600;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.bethlen_utca_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 800;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.bethlen_utca_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 1000;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.bethlen_utca_level = "5";
                    break;
                case "b":
                    delete properties.bethlen_utca;
                    document.querySelector("#eleventh_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
                element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.bethlen_utca_level) {
            case "a":
                    playersMoney[playerNumber] -= 16;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 32;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 80;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 220;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 600;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 800;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 1000;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#eleventh_element").classList.add("hiddenYet");
        document.querySelector("#eleventh_element").classList.remove("unHidden");
        delete properties.bethlen_utca;
        delete properties.bethlen_utca_level;
    }
}

document.querySelector("#twelfth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#twelfth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.mora_park = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 18;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.mora_park_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 36;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.mora_park_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 90;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.mora_park_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 250;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.mora_park_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 700;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.mora_park_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 875;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.mora_park_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 1050;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.mora_park_level = "5";
                    break;
                case "b":
                    delete properties.mora_park;
                    document.querySelector("#twelfth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.mora_park_level) {
            case "a":
                    playersMoney[playerNumber] -= 18;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 36;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 90;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 250;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 700;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 875;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 1050;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#twelfth_element").classList.add("hiddenYet");
        document.querySelector("#twelfth_element").classList.remove("unHidden");
        delete properties.mora_park;
        delete properties.mora_park_level;
    }
}

document.querySelector("#thirteenth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#thirteenth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.oskola_utca = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 18;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.oskola_utca_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 36;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.oskola_utca_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 90;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.oskola_utca_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 250;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.oskola_utca_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 700;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.oskola_utca_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 875;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.oskola_utca_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 1050;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.oskola_utca_level = "5";
                    break;
                case "b":
                    delete properties.oskola_utca;
                    document.querySelector("#thirteenth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.oskola_utca_level) {
            case "a":
                    playersMoney[playerNumber] -= 18;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 36;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 90;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 250;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 700;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 875;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 1050;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#thirteenth_element").classList.add("hiddenYet");
        document.querySelector("#thirteenth_element").classList.remove("unHidden");
        delete properties.oskola_utca;
        delete properties.oskola_utca_level;
    }
}

document.querySelector("#fourteenth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#fourteenth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.dom_ter = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 20;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dom_ter_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 40;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dom_ter_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dom_ter_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 300;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dom_ter_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 750;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dom_ter_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 925;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dom_ter_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 1100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dom_ter_level = "5";
                    break;
                case "b":
                    delete properties.dom_ter;
                    document.querySelector("#fourteenth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.dom_ter_level) {
            case "a":
                    playersMoney[playerNumber] -= 20;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 40;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 300;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 750;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 925;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 1100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#fourteenth_element").classList.add("hiddenYet");
        document.querySelector("#fourteenth_element").classList.remove("unHidden");
        delete properties.dom_ter;
        delete properties.dom_ter_level;
    }
}

document.querySelector("#fifteenth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#fifteenth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.dobo_ter = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 22;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dobo_ter_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 44;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dobo_ter_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 110;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dobo_ter_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 330;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dobo_ter_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 800;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dobo_ter_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 975;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dobo_ter_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 1150;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dobo_ter_level = "5";
                    break;
                case "b":
                    delete properties.dobo_ter;
                    document.querySelector("#fifteenth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.dobo_ter_level) {
            case "a":
                    playersMoney[playerNumber] -= 22;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 44;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 110;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 330;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 800;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 975;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 1150;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#fifteenth_element").classList.add("hiddenYet");
        document.querySelector("#fifteenth_element").classList.remove("unHidden");
        delete properties.dobo_ter;
        delete properties.dobo_ter_level;
    }
}

document.querySelector("#sixteenth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#sixteenth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.almagyar_utca = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 22;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.almagyar_utca_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 44;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.almagyar_utca_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 110;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.almagyar_utca_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 330;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.almagyar_utca_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 800;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.almagyar_utca_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 975;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.almagyar_utca_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 1150;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.almagyar_utca_level = "5";
                    break;
                case "b":
                    delete properties.almagyar_utca;
                    document.querySelector("#sixteenth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.almagyar_utca_level) {
            case "a":
                    playersMoney[playerNumber] -= 22;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 44;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 110;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 330;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 800;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 975;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 1150;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#sixteenth_element").classList.add("hiddenYet");
        document.querySelector("#sixteenth_element").classList.remove("unHidden");
        delete properties.almagyar_utca;
        delete properties.almagyar_utca_level;
    }
}

document.querySelector("#seventeenth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#seventeenth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.gardonyi_ut = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 24;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.gardonyi_ut_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 48;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.gardonyi_ut_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 120;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.gardonyi_ut_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 360;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.gardonyi_ut_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 850;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.gardonyi_ut_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 1025;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.gardonyi_ut_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 1200;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.gardonyi_ut_level = "5";
                    break;
                case "b":
                    delete properties.gardonyi_ut;
                    document.querySelector("seventeenth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.gardonyi_ut_level) {
            case "a":
                    playersMoney[playerNumber] -= 24;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 48;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 120;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 360;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 850;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 1025;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 1200;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#seventeenth_element").classList.add("hiddenYet");
        document.querySelector("#seventeenth_element").classList.remove("unHidden");
        delete properties.gardonyi_ut;
        delete properties.gardonyi_ut_level;
    }
}

document.querySelector("#eighteenth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#eighteenth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.kofarago_ter = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 26;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kofarago_ter_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 52;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kofarago_ter_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 130;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kofarago_ter_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 390;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kofarago_ter_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 900;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kofarago_ter_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 1100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kofarago_ter_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 1275;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.kofarago_ter_level = "5";
                    break;
                case "b":
                    delete properties.kofarago_ter;
                    document.querySelector("#eighteenth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.kofarago_ter_level) {
            case "a":
                    playersMoney[playerNumber] -= 26;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 52;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 130;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 390;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 900;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 1100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 1275;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#eighteenth_element").classList.add("hiddenYet");
        document.querySelector("#eighteenth_element").classList.remove("unHidden");
        delete properties.kofarago_ter;
        delete properties.kofarago_ter_level;
    }
}

document.querySelector("#nineteenth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#nineteenth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.ovaros = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 26;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.ovaros_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 52;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.ovaros_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 130;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.ovaros_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 390;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.ovaros_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 900;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.ovaros_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 1100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.ovaros_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 1275;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.ovaros_level = "5";
                    break;
                case "b":
                    delete properties.ovaros;
                    document.querySelector("#nineteenth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.ovaros_level) {
            case "a":
                    playersMoney[playerNumber] -= 26;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 52;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 130;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 390;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 900;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 1100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 1275;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#nineteenth_element").classList.add("hiddenYet");
        document.querySelector("#nineteenth_element").classList.remove("unHidden");
        delete properties.ovaros;
        delete properties.ovaros_level;
    }
}

document.querySelector("#twentieth_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#twentieth_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.otvos_utca = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 28;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.otvos_utca_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 56;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.otvos_utca_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 150;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.otvos_utca_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 450;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.otvos_utca_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 1000;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.otvos_utca_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 1200;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.otvos_utca_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 1400;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.otvos_utca_level = "5";
                    break;
                case "b":
                    delete properties.otvos_utca;
                    document.querySelector("#twentieth_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.otvos_utca_level) {
            case "a":
                    playersMoney[playerNumber] -= 28;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 56;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 150;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 450;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 1000;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 1200;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 1400;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#twentieth_element").classList.add("hiddenYet");
        document.querySelector("#twentieth_element").classList.remove("unHidden");
        delete properties.otvos_utca;
        delete properties.otvos_utca_level;
    }
}

document.querySelector("#twenty-first_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#twenty-first_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.vorosmarty_ter = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 35;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.vorosmarty_ter_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 70;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.vorosmarty_ter_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 175;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.vorosmarty_ter_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 500;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.vorosmarty_ter_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 1100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.vorosmarty_ter_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 1300;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.vorosmarty_ter_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 1500;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.vorosmarty_ter_level = "5";
                    break;
                case "b":
                    delete properties.vorosmarty_ter;
                    document.querySelector("#twenty-first_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
            element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.vorosmarty_ter_level) {
            case "a":
                    playersMoney[playerNumber] -= 35;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "s":
                    playersMoney[playerNumber] -= 70;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 175;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 500;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 1100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 1300;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 1500;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#twenty-first_element").classList.add("hiddenYet");
        document.querySelector("#twenty-first_element").classList.remove("unHidden");
        delete properties.vorosmarty_ter;
        delete properties.vorosmarty_ter_level;
    }
}

document.querySelector("#twenty-second_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue2").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        document.querySelector("#twenty-second_element").classList.add("hidden");

        document.querySelector("#button").onclick = function(event) {
            event.preventDefault();
            properties.dunakorzo = playerNumber;
            let selected = document.querySelector("#selector").value;        
            switch (selected){
                case "a":
                    playersMoney[playerNumber] += 50;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dunakorzo_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] += 100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dunakorzo_level = "s";
                    break;
                case "1":
                    playersMoney[playerNumber] += 200;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dunakorzo_level = "1";
                    break;
                case "2":
                    playersMoney[playerNumber] += 600;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dunakorzo_level = "2";
                    break;
                case "3":
                    playersMoney[playerNumber] += 1400;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dunakorzo_level = "3";
                    break;
                case "4":
                    playersMoney[playerNumber] += 1700;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dunakorzo_level = "4";
                    break;
                case "5":
                    playersMoney[playerNumber] += 2000;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dunakorzo_level = "5";
                    break;
                case "b":
                    delete properties.dunakorzo;
                    document.querySelector("#twenty-second_element").classList.remove("hidden");
                    break;
            }

            document.querySelector(".dialogue2").classList.add("hidden");
            document.querySelectorAll(".all").forEach(element => {
                element.classList.remove("hiddenAll");
            })
            
        }
    }
    else {
        switch (properties.dunakorzo_level) {
            case "a":
                    playersMoney[playerNumber] += 50;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    properties.dunakorzo_level = "a";
                    break;
                case "s":
                    playersMoney[playerNumber] -= 100;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "1":
                    playersMoney[playerNumber] -= 200;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "2":
                    playersMoney[playerNumber] -= 600;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "3":
                    playersMoney[playerNumber] -= 1400;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "4":
                    playersMoney[playerNumber] -= 1700;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
                case "5":
                    playersMoney[playerNumber] -= 2000;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                    break;
        }
        document.querySelector("#twenty-second_element").classList.add("hiddenYet");
        document.querySelector("#twenty-second_element").classList.remove("unHidden");
        delete properties.dunakorzo;
        delete properties.dunakorzo_level;
    }
}

document.querySelector("#twenty-third_element").onclick = function() {
    if (plus) {
        document.querySelector(".dialogue3").classList.remove("hidden");
        document.querySelectorAll(".all").forEach(element => {
            element.classList.add("hiddenAll");
        })
        usedTrainLines = [];

        document.querySelector("#trainLineButton").onclick = function(event) {
            event.preventDefault();
            document.querySelectorAll('input[name="option"]:checked').forEach((checkbox) => {
                usedTrainLines.push(checkbox.value);
            });
                        
            let boughtTrainLines = 0;
            if (properties.eszaki_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }
            if (properties.keleti_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }
            if (properties.deli_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }
            if (properties.nyugati_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }

            switch (boughtTrainLines) {
                case 0:
                    playersMoney[playerNumber] -= 0;
                    break;
                case 1:
                    playersMoney[playerNumber] -= 25;
                    break;
                case 2:
                    playersMoney[playerNumber] -= 100;
                    break;
                case 3:
                    playersMoney[playerNumber] -= 300;
                    break;
                case 4:
                    alert("HIBA");  //Ha mind a 4 vasútvonal meg van véve, akkor nem lehet megnyitni. (If all of the 4 trainlines are bought, you can't open it.)
                    playersMoney[playerNumber] -= 800;
                    break;   
            }

            if (usedTrainLines.length == 0) {
                document.querySelector(".dialogue3").classList.add("hidden");
                document.querySelectorAll(".all").forEach(element => {
                    element.classList.remove("hiddenAll");
                })
            }
            else {
                for(i = 0; i < usedTrainLines.length; i++) {
                    switch (usedTrainLines[i]) {
                        case "É":
                            document.querySelector("#É").classList.add("hidden");
                            properties.eszaki_vasutvonal = playerNumber;
                            document.querySelector(".dialogue3").classList.add("hidden");
                            if (usedTrainLines.length == 4) {
                                document.querySelector("#twenty-third_element").classList.add("hidden");
                                document.querySelectorAll(".all").forEach(element => {
                                element.classList.remove("hiddenAll");
                                
                            })
                            }
                            else {
                            document.querySelectorAll(".all").forEach(element => {
                                element.classList.remove("hiddenAll");
                            })
                            }
                            break;
                        case "K":
                            document.querySelector("#K").classList.add("hidden");
                            properties.keleti_vasutvonal = playerNumber;
                            document.querySelector(".dialogue3").classList.add("hidden");
                            if (usedTrainLines.length == 4) {
                                document.querySelector("#twenty-third_element").classList.add("hidden");
                                document.querySelectorAll(".all").forEach(element => {
                                element.classList.remove("hiddenAll");
                                
                            })
                            }
                            else {
                            document.querySelectorAll(".all").forEach(element => {
                            element.classList.remove("hiddenAll");
                            })
                            }
                            break;
                        case "D":
                            document.querySelector("#D").classList.add("hidden");
                            properties.deli_vasutvonal = playerNumber;
                            document.querySelector(".dialogue3").classList.add("hidden");
                            if (usedTrainLines.length == 4) {
                                document.querySelector("#twenty-third_element").classList.add("hidden");
                                document.querySelectorAll(".all").forEach(element => {
                                element.classList.remove("hiddenAll");
                                
                            })
                            }
                            else {
                            document.querySelectorAll(".all").forEach(element => {
                            element.classList.remove("hiddenAll");
                            })
                            }
                            break;
                        case "Ny":
                            document.querySelector("#Ny").classList.add("hidden");
                            properties.nyugati_vasutvonal = playerNumber;
                            document.querySelector(".dialogue3").classList.add("hidden");
                            if (usedTrainLines.length == 4) {
                                document.querySelector("#twenty-third_element").classList.add("hidden");
                                document.querySelectorAll(".all").forEach(element => {
                                element.classList.remove("hiddenAll");
                                
                            })
                            }
                            else {
                            document.querySelectorAll(".all").forEach(element => {
                            element.classList.remove("hiddenAll");
                            })
                            }
                            break;
                    }
                }

            }
            boughtTrainLines = 0;
            if (properties.eszaki_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }
            if (properties.keleti_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }
            if (properties.deli_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }
            if (properties.nyugati_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }

            switch (boughtTrainLines) {
                case 0:
                    playersMoney[playerNumber] += 0;
                    break;
                case 1:
                    playersMoney[playerNumber] += 25;
                    break;
                case 2:
                    playersMoney[playerNumber] += 100;
                    break;
                case 3:
                    playersMoney[playerNumber] += 300;
                    break;
                case 4:
                    playersMoney[playerNumber] += 800;
                    break;   
            }
            document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
        }
    }/*
    else {
        document.querySelectorAll(".unChosed").forEach(element => {
            element.classList.add("hidden");
        })

        document.querySelector(".dialogue3").classList.remove("hidden");
        document.querySelectorAll(".chosed").forEach(element => {
            element.classList.remove("unHidden");
        })
        usedTrainLines = [];

        document.querySelector("#trainLineButton").onclick = function(event) {
            event.preventDefault();
            document.querySelectorAll('input[name="option"]:checked').forEach((checkbox) => {
                usedTrainLines.splice(usedTrainLines.indexOf(checkbox.value), 1);
            });
                        
            let boughtTrainLines = 0;
            if (properties.eszaki_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }
            if (properties.keleti_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }
            if (properties.deli_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }
            if (properties.nyugati_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }

            switch (boughtTrainLines) {
                case 0:
                    alert("HIBA");  //Ha egy vasútvonalat sem vásárolt meg, akkor nem tudja ezt megnyitni. (If you haven't bought any of the trainlines, you can't open that element.)
                    playersMoney[playerNumber] -= 0;
                    break;
                case 1:
                    playersMoney[playerNumber] -= 25;
                    break;
                case 2:
                    playersMoney[playerNumber] -= 100;
                    break;
                case 3:
                    playersMoney[playerNumber] -= 300;
                    break;
                case 4:
                    playersMoney[playerNumber] -= 800;
                    break;   
            }

            if (usedTrainLines.length == 0) {
                document.querySelector(".dialogue3").classList.add("hidden");
                document.querySelectorAll(".all").forEach(element => {
                    element.classList.remove("hiddenAll");
                })
            }
            else {
                for(i = 0; i < usedTrainLines.length; i++) {
                    switch (usedTrainLines[i]) {
                        case "É":
                            document.querySelector("#É").classList.remove("unHidden");
                            document.querySelector("#É").classList.add("hidden");
                            delete properties.eszaki_vasutvonal;
                            document.querySelector(".dialogue3").classList.add("hidden");
                            if (usedTrainLines.length == 4 == 0) {
                                document.querySelector("#twenty-third_element").classList.add("hidden");
                                document.querySelector("#twenty-third_element").classList.add("chosedTrainLine");
                            }
                            break;
                        case "K":
                            document.querySelector("#K").classList.remove("unHidden");
                            document.querySelector("#K").classList.add("hidden");
                            delete properties.keleti_vasutvonal;
                            document.querySelector(".dialogue3").classList.add("hidden");
                            if (usedTrainLines.length == 4 == 0) {
                                document.querySelector("#twenty-third_element").classList.add("hidden");
                                document.querySelector("#twenty-third_element").classList.add("chosedTrainLine");
                            }
                            break;
                        case "D":
                            document.querySelector("#D").classList.remove("unHidden");
                            document.querySelector("#D").classList.add("hidden");
                            delete properties.deli_vasutvonal;
                            document.querySelector(".dialogue3").classList.add("hidden");
                            if (usedTrainLines.length == 4 == 0) {
                                document.querySelector("#twenty-third_element").classList.add("hidden");
                                document.querySelector("#twenty-third_element").classList.add("chosedTrainLine");
                            }
                            break;
                        case "Ny":
                            document.querySelector("#Ny").classList.remove("unHidden");
                            document.querySelector("#Ny").classList.add("hidden");
                            delete properties.nyugati_vasutvonal;
                            document.querySelector(".dialogue3").classList.add("hidden");
                            if (usedTrainLines.length == 4 == 0) {
                                document.querySelector("#twenty-third_element").classList.add("hidden");
                                document.querySelector("#twenty-third_element").classList.add("chosedTrainLine");
                            }
                            break;
                    }
                }

            }
            boughtTrainLines = 0;
            if (properties.eszaki_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }
            if (properties.keleti_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }
            if (properties.deli_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }
            if (properties.nyugati_vasutvonal == playerNumber) {
                boughtTrainLines++;
            }

            switch (boughtTrainLines) {
                case 0:
                    playersMoney[playerNumber] += 0;
                    break;
                case 1:
                    playersMoney[playerNumber] += 25;
                    break;
                case 2:
                    playersMoney[playerNumber] += 100;
                    break;
                case 3:
                    playersMoney[playerNumber] += 300;
                    break;
                case 4:
                    playersMoney[playerNumber] += 800;
                    break;   
            }
            document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
        }
    }*/
}

document.querySelector("#helpQuestionMark").onclick = function() {
    mistake0();
    
}

function mistake0() {
    document.querySelectorAll(".all").forEach(element => {
        element.classList.add("hiddenAll");
    })
    document.querySelector(".helpSelector").classList.remove("hidden");
}

document.querySelector("#helpButton").onclick = function(event) {
    event.preventDefault();
    mistake();
}

function mistake(){
    originalPlayerNumber = playerNumber;
    switch (document.querySelector("#helpSelector").value){
        case "plus":
            userInput = prompt("Hogy hívnak?");
            if (playersName.includes(` ${userInput}`)) {

                if (originalPlayerNumber < playersName.indexOf(` ${userInput}`)) {
                    alert("A Te ingatlanjaid később kerülnek kiszámolásra");
                }
                else if (originalPlayerNumber == playersName.indexOf(` ${userInput}`)) {
                    alert("Te vagy az aktuális játékos!");
                }
                else if (originalPlayerNumber > playersName.indexOf(` ${userInput}`)) {
                    playerNumber = playersName.indexOf(` ${userInput}`);
                    document.querySelector(".helpSelector").classList.add("hidden");
                    document.querySelectorAll(".all").forEach(element => {
                        element.classList.remove("hiddenAll");
                    })
                    document.querySelector(".helpQuestionMark").classList.add("hidden");
                    document.querySelector(".nextPlayer").classList.add("hidden");
                    document.querySelector(".back").classList.remove("hidden");
                    document.querySelector("#actualPlayer").innerHTML = `Jelenlegei játékos: ${playersName[playerNumber]}`;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
                }
                else {
                    alert("HIBA");
                }
            }
            else if (userInput == "") {
                alert("Add meg a neved!");
            }
            else {
                alert("A megadott név nem található");
            }
            break;
        case "minus":
            alert ("A vasútvonalakat műszaki okokból nem lehet visszaváltani. Amenyiben ilyen jellegű probléma adódott, kezdjenek egy új játékot, vagy oldja meg a fejlesztői eszközöknél. Amennyiben egyik lehetőség sem áll rendelkezésére, a játék végén számolja ki a pontos összegeket. Köszönöm a megértésüket!");
            plus = false;
            userInput = prompt("Hogy hívnak?");
            if (playersName.includes(` ${userInput}`)) {

                if (originalPlayerNumber < playersName.indexOf(` ${userInput}`)) {
                    alert("A Te ingatlanjaid később kerülnek kiszámolásra");
                }
                else if (originalPlayerNumber >= playersName.indexOf(` ${userInput}`)) {
                    playerNumber = playersName.indexOf(` ${userInput}`);
                    document.querySelector(".helpSelector").classList.add("hidden");
                    document.querySelector(".helpQuestionMark").classList.add("hidden");
                    document.querySelector(".players").classList.remove("hiddenAll");
                    document.querySelector("#back").classList.remove("hidden");
                    document.querySelector("#nextPlayer").classList.add("hidden");
                    document.querySelector("#actualPlayer").innerHTML = `Jelenlegei játékos: ${playersName[playerNumber]}`;
                    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;

                    
                    document.querySelector("#É").classList.add("unChosed");
                    document.querySelector("#K").classList.add("unChosed");
                    document.querySelector("#D").classList.add("unChosed");
                    document.querySelector("#Ny").classList.add("unChosed");

                    for (property in properties) {
                        if (properties[property] == playerNumber) {
                            switch (property) {
                                case "piac_ter":
                                    document.querySelector("#first_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "torok_udvar":
                                    document.querySelector("#second_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "nagykorosi_ut":
                                    document.querySelector("#third_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "lestar_ter":
                                    document.querySelector("#fourth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "kisfaludy_ut":
                                    document.querySelector("#fifth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "egyetem_utca":
                                    document.querySelector("#sixth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "szinhaz_ter":
                                    document.querySelector("#seventh_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "janus_pannonius_ut":
                                    document.querySelector("#eighth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "petofi_ter":
                                    document.querySelector("#ninth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "nagyerdo":
                                    document.querySelector("#tenth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "bethlen_utca":
                                    document.querySelector("#eleventh_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "mora_park":
                                    document.querySelector("#twelfth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "oskola_utca":
                                    document.querySelector("#thirteenth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "dom_ter":
                                    document.querySelector("#fourteenth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "dobo_ter":
                                    document.querySelector("#fifteenth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "almagyar_utca":
                                    document.querySelector("#sixteenth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "gardonyi_ut":
                                    document.querySelector("#seventeenth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "kofarago_ter":
                                    document.querySelector("#eighteenth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "ovaros":
                                    document.querySelector("#nineteenth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "otvos_utca":
                                    document.querySelector("#twentieth_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "vorosmarty_ter":
                                    document.querySelector("#twenty-first_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "dunakorzo":
                                    document.querySelector("#twenty-second_element").classList.add("unHidden");
                                    document.querySelector("#first_element").classList.add("chosed");
                                    break;
                                case "eszaki_vasutvonal":
                                    document.querySelector("#É").classList.add("unHidden");
                                    document.querySelector("#É").classList.add("chosedTrainLine");
                                    document.querySelector("#É").classList.remove("unChosed");
                                    document.querySelector("#twenty-third_element").classList.add("unHidden");
                                    break;
                                case "keleti_vasutvonal":
                                    document.querySelector("#K").classList.add("unHidden");
                                    document.querySelector("#K").classList.add("chosedTrainLine");
                                    document.querySelector("#K").classList.remove("unChosed");
                                    document.querySelector("#twenty-third_element").classList.add("unHidden");
                                    break;
                                case "deli_vasutvonal":
                                    document.querySelector("#D").classList.add("unHidden");
                                    document.querySelector("#D").classList.add("chosedTrainLine");
                                    document.querySelector("#D").classList.remove("unChosed");
                                    document.querySelector("#twenty-third_element").classList.add("unHidden");
                                    break;
                                case "nyugati_vasutvonal":
                                    document.querySelector("#Ny").classList.add("unHidden");
                                    document.querySelector("#Ny").classList.add("chosedTrainLine");
                                    document.querySelector("#Ny").classList.remove("unChosed");
                                    document.querySelector("#twenty-third_element").classList.add("unHidden");
                                    break;
                            }
                        }
                    }
                }
                else {
                    alert("HIBA");
                }
            }
            else if (userInput == "") {
                alert("Add meg a neved!");
            }
            else {
                alert("A megadott név nem található");
            }
            break;
        case "other":
            alert("Kersed fel a játék készítőjét, vagy nyugodtan oldd meg a fejlesztői eszközöknél.");
        case "back":
            playerNumber = originalPlayerNumber;
            document.querySelector(".helpSelector").classList.add("hidden");
                document.querySelectorAll(".all").forEach(element => {
                    element.classList.remove("hiddenAll");
            })
            document.querySelector("#actualPlayer").innerHTML = `Jelenlegei játékos: ${playersName[playerNumber]}`;
            document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
            document.querySelector(".helpQuestionMark").classList.remove("hidden");
            document.querySelector(".nextPlayer").classList.remove("hidden");
            break;
    }
}

document.querySelector("#back").onclick = function(event) {
    event.preventDefault();
    plus = true;
    playerNumber = originalPlayerNumber;
    document.querySelector("#actualPlayer").innerHTML = `Jelenlegei játékos: ${playersName[playerNumber]}`;
    document.querySelector("#actualMoney").innerHTML = `${playersMoney[playerNumber]} Monopoly`;
    document.querySelector(".helpQuestionMark").classList.remove("hidden");
    document.querySelector(".nextPlayer").classList.remove("hidden");
    document.querySelector(".back").classList.add("hidden");
    document.querySelectorAll(".all").forEach(element => {
        element.classList.remove("unHidden");
        element.classList.remove("hiddenAll");
    });
    document.querySelectorAll(".hiddenYet").forEach(element => {
        element.classList.remove("hidden");
        element.classList.remove("hiddenYet");
    });
    document.querySelectorAll(".minus").forEach(element => {
        element.classList.remove("unHidden");
        element.classList.remove("hiddenAll");
        element.classList.remove("hidden");
    });
    document.querySelectorAll(".unChosed").forEach(element => {
        element.classList.remove("Hidden");
        element.classList.remove("unChosed");
    })
    document.querySelectorAll(".chosedTrainLine").forEach(element => {
    })


}