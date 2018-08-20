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
        health: 100,
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

let attacker;
let defender;

$(document).ready(function() {

    
    $('#middle').hide();
    $('#enemySelector').hide();

     $('.char').on("click", function() {

        if (attacker == null){
        attacker = $(this).text();
        alert(attacker);
        $('#topSelector').hide();
        $('#middle').show();
        $('.attacker').css("backgroundImage", "url('attacker.imageUrl') no-repeat");
        $('#enemySelector').show();
        }

        if (attacker != ''){
        defender = $(this).text();

        }

     });
});
        
