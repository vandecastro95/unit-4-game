let characters = {
    'cersei': {
        name: 'Cersei',
        health: 200,
        attack: 8,
        imageUrl: "../images/cersei.jpg",
        win: "../images/cerseiwin.gif",
        enemyAttackBack: 15
    },
    'danaerys': {
        name: 'Danaerys',
        health: 180,
        attack: 14,
        imageUrl: "../images/danaerys.jpg",
        win : "danaeryswin.gif",
        enemyAttackBack: 5
    },
    'nightking': {
        name: 'Night king',
        health: 250,
        attack: 8,
        imageUrl: "../images/nightking.jpg",
        win : "nightkingwin.gif",
        enemyAttackBack: 20
    },
    'jonsnow': {
        name: 'Jon Snow',
        health: 280,
        attack: 7,
        imageUrl: "../images/jonsnow.jpg",
        win : '../images/jonsnowwin.gif',
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
                attackerHP -= defenderCP;
                document.querySelector('.attackerHP').innerText = 'HP: ' + attackerHP;
                
                defenderHP -= attackerAP;
                document.querySelector('.whenAttacks').innerText = attackerNm + " attacked " + defenderNm + " for " + attackerAP + " damage! ";
                document.querySelector('.whenCounters').innerText = defenderNm + " counter attacked for " + defenderCP + " damage!"
                
                document.querySelector('.defenderHP').innerText = 'HP: ' + defenderHP;
                attackerAP += attackPower;
                


            }


            if (defenderHP <= 0) {
                enemies--;
                if (enemies == 0) {
                    $('body').css('background-image', 'url("' + characters[attacker].win + '")');
                    $('body').hide();
                }

                document.querySelector('.defenderHP').innerText = "";
                document.querySelector('.defenderName').innerText = 'Enemy defeated';
                fightStarted = false;
                
                $(".nextOne").show();
                $('.defender').removeClass(defender);
                defender = null;
            }

            if (attackerHP <= 0) {
                $('.attacker')
                $(".nextOne").hide();
                document.querySelector('.attackerHP').innerText = "0";
                document.querySelector('.attackerName').innerText = "You Lost, Press any key to start again"; 
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
        

    document.onkeyup = function (evt) {
        $('body').hide().addClass('fitscreen');

        
        
        {
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
                        defenderCP = characters[defender].enemyAttackBack;

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

