// js time :3

/**
 * Starting method to initialize a new CachedEmitter.
 * @returns A Cached Emitter for writing, updating, and deleting queries.
 */
function addEmitter() {
    return new CachedEmitter();
}
/**
 * Starting method to initialize a new CachedListener.
 * @returns A Cached Listener for reading and filtering queries.
 */
function addListener() {
    return new CachedListener();
}




let autoMobility = 'none';
let autoCapable = 'none';
let teleCapable = 'none';
let teleMobility = 'none';
let climbAbility = 'none';

let L1Score = false;
let L2Score = false;
let L3Score = false;
let L4Score = false;

let bargeScore = false;
let processorScore = false;
let groundScore = false;

$(() => {

    $('#am-yes').click(function() {
        console.log('working');
        $(this).css({"background-color": "seagreen"});
        $('#am-no').css({"background-color": "gainsboro"});
        autoMobility = 'yes';
    });

    $('#am-no').click(function() {
        $(this).css({"background-color": "seagreen"});
        $('#am-yes').css({"background-color": "gainsboro"});
        autoMobility = 'no';
    });

    $('#ac-coral').click(function() {
        $(this).css({"background-color": "seagreen"});
        $("#ac-algae").css({"background-color": "gainsboro"});
        $("#ac-both").css({"background-color": "gainsboro"});
        autoCapable = 'coral';
    });

    $('#ac-algae').click(function() {
        $(this).css({"background-color": "seagreen"});
        $("#ac-coral").css({"background-color": "gainsboro"});
        $("#ac-both").css({"background-color": "gainsboro"});
        autoCapable = 'algae';
    });

    $('#ac-both').click(function() {
        $(this).css({"background-color": "seagreen"});
        $("#ac-coral").css({"background-color": "gainsboro"});
        $("#ac-algae").css({"background-color": "gainsboro"});
        autoCapable = 'both';
    });

    $('#tc-both').click(function() {
        $(this).css({"background-color": "seagreen"});
        $("#tc-algae").css({"background-color": "gainsboro"});
        $("#tc-coral").css({"background-color": "gainsboro"});
        teleCapable = 'both';
    });

    $('#tc-coral').click(function() {
        $(this).css({"background-color": "seagreen"});
        $("#tc-algae").css({"background-color": "gainsboro"});
        $("#tc-both").css({"background-color": "gainsboro"});
        teleCapable = 'coral';
    });

    $('#tc-algae').click(function() {
        $(this).css({"background-color": "seagreen"});
        $("#tc-coral").css({"background-color": "gainsboro"});
        $("#tc-both").css({"background-color": "gainsboro"});
        teleCapable = 'algae';
    });

    $('#tc-none').click(function() {
        $(this).css({"background-color": "seagreen"});
        $("#tc-algae").css({"background-color": "gainsboro"});
        $("#tc-coral").css({"background-color": "gainsboro"});
        teleCapable = 'none';
    });

    $('#ca-none').click(function() {
        $(this).css({"background-color": "seagreen"});
        $('#ca-shallow').css({"background-color": "gainsboro"});
        $('#ca-deep').css({"background-color": "gainsboro"});
        climbAbility = 'none';
    });

    $('#ca-shallow').click(function() {
        $(this).css({"background-color": "seagreen"});
        $('#ca-none').css({"background-color": "gainsboro"});
        $('#ca-deep').css({"background-color": "gainsboro"});
        climbAbility = 'shallow';
    });

    $('#ca-deep').click(function() {
        $(this).css({"background-color": "seagreen"});
        $('#ca-shallow').css({"background-color": "gainsboro"});
        $('#ca-none').css({"background-color": "gainsboro"});
        climbAbility = 'deep';
    });

    $('#r-l1').click(function() {
        if (L1Score == false) {
            $(this).css({"background-color": "seagreen"});
            L1Score = true;
        } else {
            $(this).css({"background-color": "gainsboro"});
            L1Score = false;
        }
        
    });

    $('#r-l2').click(function() {
        if (L2Score == false) {
            $(this).css({"background-color": "seagreen"});
            L2Score = true;
        } else {
            $(this).css({"background-color": "gainsboro"});
            L2Score = false;
        }
    });

    $('#r-l3').click(function() {
        if (L3Score == false) {
            $(this).css({"background-color": "seagreen"});
            L3Score = true;
        } else {
            $(this).css({"background-color": "gainsboro"});
            L3Score = false;
        }
    });

    $('#r-l4').click(function() {
        if (L4Score == false) {
            $(this).css({"background-color": "seagreen"});
            L4Score = true;
        } else {
            $(this).css({"background-color": "gainsboro"});
            L4Score = false;
        }
    });

    $('#a-ground').click(function() {
        if (groundScore == false) {
            $(this).css({"background-color": "seagreen"});
            groundScore = true;
        } else {
            $(this).css({"background-color": "gainsboro"});
            groundScore = false;
        }
    });

    $('#a-barge').click(function() {
        if (bargeScore == false) {
            $(this).css({"background-color": "seagreen"});
            bargeScore = true;
        } else {
            $(this).css({"background-color": "gainsboro"});
            bargeScore = false;
        }
    });

    $('#a-processor').click(function() {
        if (processorScore == false) {
            $(this).css({"background-color": "seagreen"});
            processorScore = true;
        } else {
            $(this).css({"background-color": "gainsboro"});
            processorScore = false;
        }
    });


    $('#submit').click(function() {
        console.log('clicked');

        let reefString = '';
        if (L1Score) {
            reefString += " L1 ";
        }
        if (L2Score) {
            reefString += " L2 ";
        }
        if (L3Score) {
            reefString += " L3 ";
        }
        if (L4Score) {
            reefString += " L4 ";
        }

        let algaeString = '';
        if (bargeScore) {
            algaeString += " Barge ";
        }
        if (groundScore) {
            algaeString += " Ground ";
        }
        if (processorScore) {
            algaeString += " Processor ";
        }

        addListener().open('pitteams').find('event', '==', 'gsv').find('team', '==', $('#team-number-input').val()).return().then(data => {
            if (data.length == 1) {
                addEmitter().open('pitscouting').add({
                    dttype: $("#dt-type select").val(),
                    autoMobility: autoMobility,
                    autoCapability: autoCapable,
                    teleCapability: teleCapable,
                    climbAbility: climbAbility,
                    notes: $('#notes-textarea').val(),
                    event: 'gsv',
                    reefScore: reefString,
                    algaeScore: algaeString,
                    team: parseInt(data[0].team)
                }).commit();
            }
        });
    });
});