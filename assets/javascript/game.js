let characters = {
    'cersei': {
        name: 'Cersei',
        health: 200,
        attack: 13,
        imageUrl: "../images/cersei.jpg",
        win: "cersy",
        lost: "cersyL",
        enemyAttackBack: 15
    },
    'danaerys': {
        name: 'Danaerys',
        health: 180,
        attack: 14,
        imageUrl: "../images/danaerys.jpg",
        win: "danny",
        lost: "dannyL",
        enemyAttackBack: 25
    },
    'nightking': {
        name: 'Night king',
        health: 250,
        attack: 8,
        imageUrl: "../images/nightking.jpg",
        win: "nighty",
        lost: "nightyL",
        enemyAttackBack: 14
    },
    'jonsnow': {
        name: 'Jon Snow',
        health: 230,
        attack: 7,  
        imageUrl: "../images/jonsnow.jpg",
        win: "johny",
        lost: "johnyL",
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

            if (defender != null && userLost != true){
            if (attackerHP >= 0 || defenderHP >= 0) {
                attackerHP -= defenderCP;
                document.querySelector('.attackerHP').innerText = 'HP: ' + attackerHP;

                defenderHP -= attackerAP;
                console.log(defenderHP);
                document.querySelector('.whenAttacks').innerText = attackerNm + " attacked " + defenderNm + " for " + attackerAP + " damage! ";
                document.querySelector('.whenCounters').innerText = defenderNm + " counter attacked for " + defenderCP + " damage!"
                document.querySelector('.defenderHP').innerText = 'HP: ' + defenderHP;

                if (defenderHP <= 0) {
                    enemies--;
                    if (enemies == 0) {
                         $('#sound_tag').animate({volume: 1}, 1000);
                         $('#sound_tag').animate({volume: 0}, 8000);
                        $('.nextOne').hide();
                        $('.container-fluid').hide();
                        $('body').addClass(characters[attacker].win);
                        document.querySelector('.display-4').innerText = 'You Win!';
                        $('.jumbotron').delay(4000).show('slow');
                        setTimeout(function(){ location.reload(); }, 10000);

                    }
                    
                    document.querySelector('.defenderHP').innerText = "0";
                    document.querySelector('.defenderName').innerText = 'Enemy defeated';
                    fightStarted = false;

                    $(".nextOne").show();
                    $('.defender').removeClass(defender);
                    defender = null;
                    $('.attack').off('click');
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
                    userLost = true;
                    $('.attacker').removeClass(attacker);
                    $('#sound_tag').animate({volume: 1}, 1000);


                        $('.nextOne').hide();
                        $('#enemySelector').hide();
                        $('.container-fluid').hide();
                        $('body').addClass(characters[attacker].lost);
                        document.querySelector('.display-4').innerText = 'You Lost!';
                        $('.jumbotron').delay(1000).show('fast');
                        $('#sound_tag').animate({volume: 0}, 2000);
                        setTimeout(function(){ location.reload(); }, 4000);
                }
                console.log(defenderHP);
                attackerAP += characters[attacker].attack;

                console.log(attackerAP);



            }}

        });
    })
}


    


$(document).ready(function () {
    $(".my_audio").trigger('load');
    $(document).one("keyup", function () {
        $('body').removeClass('fitscreen').removeClass('d-none');
        
        $('#sound_tag')[0].play() ;

    });
     



    $('.jumbotron').hide();
    $('#topSelector').show();
    $('#middle').hide();
    $('#enemySelector').hide();
    $("button").hide();
    $(".nextOne").hide();

    $('.char').on("click", function () {

        $('#sound_tag').animate({volume: 0.1}, 3000);

        if (fightStarted == false) {

            if (attacker != null && $(this).find("span").text() != attacker) {
                defenderHP = 0;
                $(".nextOne").hide();
                defender = $(this).find("span").text();

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
                
            }

            if (attacker == null) {
                attacker = $(this).find("span").text();

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
)


