let characters = {
    'cersei': {
        name: 'cersei',
        health: 120,
        attack: 8,
        imageUrl: "../images/cersei.jpg",
        enemyAttackBack: 15
    },
    'danaerys': {
        name: 'danaerys',
        health: 120,
        attack: 14,
        imageUrl: "../images/danaerys.jpg",
        enemyAttackBack: 5
    },
    'nightking': {
        name: 'nightking',
        health: 150,
        attack: 8,
        imageUrl: "../images/nightking.jpg",
        enemyAttackBack: 20
    },
    'jonsnow': {
        name: 'jonsnow',
        health: 180,
        attack: 7,
        imageUrl: "../images/jonsnow.jpg",
        enemyAttackBack: 20
    }
};


let userLost = false;
let fightStarted = false;

let attacker = null;
let defender;
let attackPower;
let enemies = 3;

let attackerNm;
let attackerHP;
let attackerAP;
let attackerCP;

let defenderNm;
let defenderHP;
let defenderAP;
let defenderCP;

function fightSequence() {
    $(document).ready(function () {
        $('.attack').on("click", function () {

            if (attackerHP >= 0 || defenderHP >= 0) {
                attackerHP -= characters[defender].enemyAttackBack;
                document.querySelector('.attackerHP').innerText = 'HP: ' + attackerHP;
                console.log(characters[defender].enemyAttackBack)
                defenderHP -= attackerAP;
                document.querySelector('.whenAttacks').innerText = attackerNm + " attacked " + defenderNm + " for " + attackerAP + " damage! ";
                document.querySelector('.whenCounters').innerText = defenderNm + " counter attacked for " + characters[defender].enemyAttackBack + " damage!"
                console.log(defenderHP)
                document.querySelector('.defenderHP').innerText = 'HP: ' + defenderHP;
                attackerAP += attackPower;
                console.log(attackerAP)


            }


            if (defenderHP <= 0) {
                document.querySelector('.defenderHP').innerText = "";
                document.querySelector('.defenderName').innerText = 'Enemy defeated';
                fightStarted = false;
                enemies--;
                $(".nextOne").show();
                $('.defender').removeClass(defender);
                defender = null;
            }

            if (attackerHP <= 0) {
                $('.attacker')
                $(".nextOne").hide();
                document.querySelector('.attackerName').innerText = "You Lost, Press any key to start again";
                document.querySelector('.attackerHP').innerText = "";
                document.querySelector('.defenderName').innerText = '';
                document.querySelector('.whenCounters').innerText = '';
                document.querySelector('.whenAttacks').innerText = '';
                fightStarted = true;
                $('.attacker').removeClass(attacker);
                
                userLost = true;

            }

        });
    })
}






$(document).ready(function () {

    

    // let audioElement = document.createElement("audio");
    // audioElement.setAttribute("src", "../game_of_thrones.mp3");
        $('body').hide().addClass('fitscreen');

    document.onkeyup = function (evt) {
        $('body').hide().addClass('fitscreen');

        if (userLost == true) {
            $('.bot').show();
            defender = null;
            attacker = null;
            fightStarted = false;
            
        }
        
        if (userLost == false) {
            $('body').show().removeClass("fitscreen");
            $('#topSelector').show();
            $('#middle').hide();
            $('#enemySelector').hide();
            $("button").hide();
            $(".nextOne").hide();

            $('.char').on("click", function () {

                


                if (fightStarted == false) {

                    if (attacker != null && $(this).text() != attacker) {
                        $(".nextOne").hide();
                        defender = $(this).text();

                        $('#' + defender).hide("fast");
                        $('.defender').addClass(defender);

                        defenderNm = characters[defender].name;
                        defenderHP = characters[defender].health;
                        defenderAP = characters[defender].attack;

                        document.querySelector('.defenderName').innerText = defenderNm;
                        document.querySelector('.defenderHP').innerText = 'HP: ' + defenderHP;
                        $("button").show("slow");

                        fightStarted = true;
                        fightSequence();
                        // audioElement.play();
                    }

                    if (attacker == null) {
                        attacker = $(this).text();
                        attackPower = characters[attacker].attack;

                        $('#topSelector').hide();
                        $('#middle').show("slow");
                        $('.attacker').addClass(attacker);

                        attackerNm = characters[attacker].name;
                        attackerHP = characters[attacker].health;
                        attackerAP = characters[attacker].attack;

                        document.querySelector('.attackerName').innerText = characters[attacker].name;
                        document.querySelector('.attackerHP').innerText = 'HP: ' + attackerHP;
                        $('#enemySelector').show("slow");
                        $('#' + attacker).hide();

                    }

                }


            });

        } 

    }
});

