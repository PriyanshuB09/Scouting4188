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

let currentPage = 'setup';
let pushed = false;
let alliancePosition = 0;
let allianceColor = '';
let autoMobility = '';
let preload = '';
let selectedMatch;
let timeToClimb = 0;
let startTime = 0;

let autoL1Made = 0;
let autoL2Made = 0;
let autoL3Made = 0;
let autoL4Made = 0;

let autoL1Miss = 0;
let autoL2Miss = 0;
let autoL3Miss = 0;
let autoL4Miss = 0;

let autoProcess = 0;
let autoBarge = 0;

let teleL1Made = 0;
let teleL2Made = 0;
let teleL3Made = 0;
let teleL4Made = 0;

let teleL1Miss = 0;
let teleL2Miss = 0;
let teleL3Miss = 0;
let teleL4Miss = 0;

let teleProcess = 0;
let teleBarge = 0;

let telePark = '';


$(() => {
    // Values for all number divs

    $('#l1-reef-number').text(autoL1Made);
    $('#l2-reef-number').text(autoL2Made);
    $('#l3-reef-number').text(autoL3Made);
    $('#l4-reef-number').text(autoL4Made);

    $('#l1-miss-reef-number').text(autoL1Miss);
    $('#l2-miss-reef-number').text(autoL2Miss);
    $('#l3-miss-reef-number').text(autoL3Miss);
    $('#l4-miss-reef-number').text(autoL4Miss);



  $('#setup').click(function() {
     $('#setup-div').css({
       "width": '100%',
       "opacity": '1'
     });
    
     $('#auto-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#tele-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#notes-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    currentPage = 'setup';
    $('#back-section').hide();
    $('#next-section').show();
    $('#submit-form').hide();

    $('#setup').css({"background-color": "#5C7AFF"});
    $('#auto').css({"background-color": "#0A0941"});
    $('#tele').css({"background-color": "#0A0941"});
    $('#notes').css({"background-color": "#0A0941"});
    
    // $('#auto-div').hide();
    // $('#tele-div').hide();
    // $('#notes-div').hide();
    // $('#setup-div').show();
  });
  
  $('#auto').click(function() {
    
    
     $('#auto-div').css({
       "width": '100%',
       "opacity": '1'
     });
    
    $('#tele-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#notes-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#setup-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    currentPage = 'auto';
    $('#back-section').show();
    $('#next-section').show();
    $('#submit-form').hide();

    $('#setup').css({"background-color": "#0A0941"});
    $('#auto').css({"background-color": "#5C7AFF"});
    $('#tele').css({"background-color": "#0A0941"});
    $('#notes').css({"background-color": "#0A0941"});
    
    // $('#auto-div').show();
    // $('#tele-div').hide();
    // $('#notes-div').hide();
    // $('#setup-div').hide();
  });
  
  $('#tele').click(function() {
    
    
     $('#auto-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#tele-div').css({
       "width": '100%',
       "opacity": '1'
     });
    
    $('#notes-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#setup-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    currentPage = 'tele';
    $('#back-section').show();
    $('#next-section').show();
    $('#submit-form').hide();

    $('#setup').css({"background-color": "#0A0941"});
    $('#auto').css({"background-color": "#0A0941"});
    $('#tele').css({"background-color": "#5C7AFF"});
    $('#notes').css({"background-color": "#0A0941"});
    
    // $('#auto-div').hide();
    // $('#tele-div').show();
    // $('#notes-div').hide();
    // $('#setup-div').tele();
  });
  
  $('#notes').click(function() {
    
    
     $('#auto-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#tele-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#notes-div').css({
       "width": '100%',
       "opacity": '1'
     });
    
    $('#setup-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    currentPage = 'notes';
    $('#back-section').show();
    $('#next-section').hide();
    $('#submit-form').show();

    $('#setup').css({"background-color": "#0A0941"});
    $('#auto').css({"background-color": "#0A0941"});
    $('#tele').css({"background-color": "#0A0941"});
    $('#notes').css({"background-color": "#5C7AFF"});
    
    // $('#auto-div').hide();
    // $('#tele-div').hide();
    // $('#notes-div').show();
    // $('#setup-div').hide();
  });
  
  // $('.nav-bar ul li span').click(function() {
  //   $('#info-modal').slideDown();
  //   $('#background-blur').fadeIn();
  // });
  
  $('#back-section').click(function() {
    if (currentPage == 'setup') {
      
    } else if (currentPage == 'auto') {
      $('#setup-div').css({
       "width": '100%',
       "opacity": '1'
     });
    
     $('#auto-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#tele-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#notes-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    currentPage = 'setup';
      $('#back-section').hide();
    $('#next-section').show();
    $('#submit-form').hide();
    $('#setup').css({"background-color": "#5C7AFF"});
    $('#auto').css({"background-color": "#0A0941"});
    $('#tele').css({"background-color": "#0A0941"});
    $('#notes').css({"background-color": "#0A0941"});
    } else if (currentPage == 'tele') {
      $('#auto-div').css({
       "width": '100%',
       "opacity": '1'
     });
    
    $('#tele-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#notes-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#setup-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    currentPage = 'auto';
      $('#back-section').show();
    $('#next-section').show();
    $('#submit-form').hide();
    $('#setup').css({"background-color": "#0A0941"});
    $('#auto').css({"background-color": "#5C7AFF"});
    $('#tele').css({"background-color": "#0A0941"});
    $('#notes').css({"background-color": "#0A0941"});
    } else if (currentPage == 'notes') {
      $('#auto-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#tele-div').css({
       "width": '100%',
       "opacity": '1'
     });
    
    $('#notes-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#setup-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    currentPage = 'tele';
      $('#back-section').show();
    $('#next-section').show();
    $('#submit-form').hide();
    $('#setup').css({"background-color": "#0A0941"});
    $('#auto').css({"background-color": "#0A0941"});
    $('#tele').css({"background-color": "#5C7AFF"});
    $('#notes').css({"background-color": "#0A0941"});
    }
  });
  
  $('#next-section').click(function() {
    if (currentPage == 'setup') {
      $('#auto-div').css({
       "width": '100%',
       "opacity": '1'
     });
    
    $('#tele-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#notes-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#setup-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    currentPage = 'auto';
    $('#back-section').show();
    $('#next-section').show();
    $('#submit-form').hide();
    $('#back-section').show();
    $('#next-section').show();
    $('#submit-form').hide();
    
    $('#setup').css({"background-color": "#0A0941"});
    $('#auto').css({"background-color": "#5C7AFF"});
    $('#tele').css({"background-color": "#0A0941"});
    $('#notes').css({"background-color": "#0A0941"});
    } else if (currentPage == 'auto') {
      $('#auto-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#tele-div').css({
       "width": '100%',
       "opacity": '1'
     });
    
    $('#notes-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#setup-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    currentPage = 'tele';
    $('#back-section').show();
    $('#next-section').show();
    $('#submit-form').hide();
    $('#setup').css({"background-color": "#0A0941"});
    $('#auto').css({"background-color": "#0A0941"});
    $('#tele').css({"background-color": "#5C7AFF"});
    $('#notes').css({"background-color": "#0A0941"});
    } else if (currentPage == 'tele') {
      $('#auto-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#tele-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    $('#notes-div').css({
       "width": '100%',
       "opacity": '1'
     });
    
    $('#setup-div').css({
       "width": '0',
       "opacity": '0'
     });
    
    currentPage = 'notes';
    $('#back-section').show();
    $('#next-section').hide();
    $('#submit-form').show();
    $('#setup').css({"background-color": "#0A0941"});
    $('#auto').css({"background-color": "#0A0941"});
    $('#tele').css({"background-color": "#0A0941"});
    $('#notes').css({"background-color": "#5C7AFF"});
    }
  });

  // Form Stuff
  $('#far').click(function() {
    $(this).css({"background-color": "seagreen"});
    $('#mid').css({"background-color": "gainsboro"});
    $('#near').css({"background-color": "gainsboro"});

    $(this).css({"color": "white"});
    $('#mid').css({"color": "black"});
    $('#near').css({"color": "black"});
    startingPosition = 'far';
  });
  $('#mid').click(function() {
    $('#far').css({"background-color": "gainsboro"});
    $(this).css({"background-color": "seagreen"});
    $('#near').css({"background-color": "gainsboro"});

    $('#far').css({"color": "black"});
    $(this).css({"color": "white"});
    $('#near').css({"color": "black"});
    startingPosition = 'mid';
  });
  $('#near').click(function() {
    $('#far').css({"background-color": "gainsboro"});
    $('#mid').css({"background-color": "gainsboro"});
    $(this).css({"background-color": "seagreen"});

    $("#far").css({"color": "black"});
    $('#mid').css({"color": "black"});
    $(this).css({"color": "white"});
    startingPosition = 'near';
  });

  $('#color-red').click(function() {
    $(this).css({"background-color": "#b44d45"});
    $('#color-blue').css({"background-color": "#2e3978"});
    allianceColor = 'red';
    updateTeamNumber();
  });
  $('#color-blue').click(function() {
    $(this).css({"background-color": "#4555b4"});
    $('#color-red').css({"background-color": "#7e3631"});
    allianceColor = 'blue';
    updateTeamNumber();
  });

  alliancePosition = '';
  $('#position-1').click(function() {
    $(this).css({'background-color': "seagreen"});
    $('#position-2').css({'background-color': "gainsboro"});
    $('#position-3').css({'background-color': "gainsboro"});

    $(this).css({'color': "white"});
    $('#position-2').css({'color': "black"});
    $('#position-3').css({'color': "black"});
    alliancePosition = 1;
    updateTeamNumber();
  });
  $('#position-2').click(function() {
    $(this).css({'background-color': "seagreen"});
    $('#position-1').css({'background-color': "gainsboro"});
    $('#position-3').css({'background-color': "gainsboro"});

    $(this).css({'color': "white"});
    $('#position-1').css({'color': "black"});
    $('#position-3').css({'color': "black"});
    alliancePosition = 2;
    updateTeamNumber();
  });
  $('#position-3').click(function() {
    $(this).css({'background-color': "seagreen"});
    $('#position-2').css({'background-color': "gainsboro"});
    $('#position-1').css({'background-color': "gainsboro"});

    $(this).css({'color': "white"});
    $('#position-2').css({'color': "black"});
    $('#position-1').css({'color': "black"});
    alliancePosition = 3;
    updateTeamNumber();
  });

  $('#preload-yes').click(function() {
    preload = 'yes';
    $(this).css({'background-color': 'seagreen'});
    $('#preload-no').css({'background-color': 'gainsboro'});

    $(this).css({'color': 'white'});
    $('#preload-no').css({'color': 'black'});
  });

  $('#preload-no').click(function() {
    preload = 'no';
    $(this).css({'background-color': 'seagreen'});
    $('#preload-yes').css({'background-color': 'gainsboro'});

    $(this).css({'color': 'white'});
    $('#preload-yes').css({'color': 'black'});
  });

  $('#auto-mobility-yes').click(function() {
    autoMobility = 'yes';
    $(this).css({'background-color': 'seagreen'});
    $('#auto-mobility-no').css({'background-color': 'gainsboro'});

    $(this).css({'color': 'white'});
    $('#auto-mobility-no').css({'color': 'black'});
  });

  $('#auto-mobility-no').click(function() {
    autoMobility = 'no';
    $(this).css({'background-color': 'seagreen'});
    $('#auto-mobility-yes').css({'background-color': 'gainsboro'});

    $(this).css({'color': 'white'});
    $('#auto-mobility-yes').css({'color': 'black'});
  });

  $('#l1-reef-number-up').click(function() {
    autoL1Made++;
    updateAutoTable();
  });

  $('#l2-reef-number-up').click(function() {
    autoL2Made++;
    updateAutoTable();
  });

  $('#l3-reef-number-up').click(function() {
    autoL3Made++;
    updateAutoTable();
  });

  $('#l4-reef-number-up').click(function() {
    autoL4Made++;
    updateAutoTable();
  });

  $('#l1-reef-number-down').click(function() {
    autoL1Made--;
    updateAutoTable();
  });

  $('#l2-reef-number-down').click(function() {
    autoL2Made--;
    updateAutoTable();
  });

  $('#l3-reef-number-down').click(function() {
    autoL3Made--;
    updateAutoTable();
  });

  $('#l4-reef-number-down').click(function() {
    autoL4Made--;
    updateAutoTable();
  });





  $('#l1-miss-reef-number-up').click(function() {
    autoL1Miss++;
    updateAutoTable();
  });

  $('#l2-miss-reef-number-up').click(function() {
    autoL2Miss++;
    updateAutoTable();
  });

  $('#l3-miss-reef-number-up').click(function() {
    autoL3Miss++;
    updateAutoTable();
  });

  $('#l4-miss-reef-number-up').click(function() {
    autoL4Miss++;
    updateAutoTable();
  });

  $('#l1-miss-reef-number-down').click(function() {
    autoL1Miss--;
    updateAutoTable();
  });

  $('#l2-miss-reef-number-down').click(function() {
    autoL2Miss--;
    updateAutoTable();
  });

  $('#l3-miss-reef-number-down').click(function() {
    autoL3Miss--;
    updateAutoTable();
  });

  $('#l4-miss-reef-number-down').click(function() {
    autoL4Miss--;
    updateAutoTable();
  });

  $('#auto-processor-number-up').click(function() {
    autoProcess++;
    updateAutoTable();
  });

  $('#auto-processor-number-down').click(function() {
    autoProcess--;
    updateAutoTable();
  });

  $('#auto-barge-number-up').click(function() {
    autoBarge++;
    updateAutoTable();
  });

  $('#auto-barge-number-down').click(function() {
    autoBarge--;
    updateAutoTable();
  });






  $('#t-l1-reef-number-up').click(function() {
    teleL1Made++;
    updateAutoTable();
  });

  $('#t-l2-reef-number-up').click(function() {
    teleL2Made++;
    updateAutoTable();
  });

  $('#t-l3-reef-number-up').click(function() {
    teleL3Made++;
    updateAutoTable();
  });

  $('#t-l4-reef-number-up').click(function() {
    teleL4Made++;
    updateAutoTable();
  });

  $('#t-l1-reef-number-down').click(function() {
    teleL1Made--;
    updateAutoTable();
  });

  $('#t-l2-reef-number-down').click(function() {
    teleL2Made--;
    updateAutoTable();
  });

  $('#t-l3-reef-number-down').click(function() {
    teleL3Made--;
    updateAutoTable();
  });

  $('#t-l4-reef-number-down').click(function() {
    teleL4Made--;
    updateAutoTable();
  });





  $('#t-l1-miss-reef-number-up').click(function() {
    teleL1Miss++;
    updateAutoTable();
  });

  $('#t-l2-miss-reef-number-up').click(function() {
    teleL2Miss++;
    updateAutoTable();
  });

  $('#t-l3-miss-reef-number-up').click(function() {
    teleL3Miss++;
    updateAutoTable();
  });

  $('#t-l4-miss-reef-number-up').click(function() {
    teleL4Miss++;
    updateAutoTable();
  });

  $('#t-l1-miss-reef-number-down').click(function() {
    teleL1Miss--;
    updateAutoTable();
  });

  $('#t-l2-miss-reef-number-down').click(function() {
    teleL2Miss--;
    updateAutoTable();
  });

  $('#t-l3-miss-reef-number-down').click(function() {
    teleL3Miss--;
    updateAutoTable();
  });

  $('#t-l4-miss-reef-number-down').click(function() {
    teleL4Miss--;
    updateAutoTable();
  });

  $('#tele-processor-number-up').click(function() {
    teleProcess++;
    updateAutoTable();
  });

  $('#tele-processor-number-down').click(function() {
    teleProcess--;
    updateAutoTable();
  });

  $('#tele-barge-number-up').click(function() {
    teleBarge++;
    updateAutoTable();
  });

  $('#tele-barge-number-down').click(function() {
    teleBarge--;
    updateAutoTable();
  });

  $('#tele-park-none').click(function() {
    telePark = 'none';
    $(this).css({'background-color': 'seagreen'});
    $('#tele-park-ground').css({'background-color': 'gainsboro'});
    $('#tele-park-climb').css({'background-color': 'gainsboro'});

    $(this).css({'color': 'white'});
    $('#tele-park-ground').css({'color': 'black'});
    $('#tele-park-climb').css({'color': 'black'});
  });

  $('#tele-park-ground').click(function() {
    telePark = 'ground';
    $(this).css({'background-color': 'seagreen'});
    $('#tele-park-none').css({'background-color': 'gainsboro'});
    $('#tele-park-climb').css({'background-color': 'gainsboro'});

    $(this).css({'color': 'white'});
    $('#tele-park-none').css({'color': 'black'});
    $('#tele-park-climb').css({'color': 'black'});
  });

  $('#tele-park-climb').click(function() {
    telePark = 'climb';
    $(this).css({'background-color': 'seagreen'});
    $('#tele-park-ground').css({'background-color': 'gainsboro'});
    $('#tele-park-none').css({'background-color': 'gainsboro'});

    $(this).css({'color': 'white'});
    $('#tele-park-ground').css({'color': 'black'});
    $('#tele-park-none').css({'color': 'black'});
  });

  let isDone = false;

  $('#start-timer').click(function() {
    if (!isDone) {
        startTime = Date.now();
    }
    $(this).css({'background-color': "seagreen"});
    $(this).css({"color": "white"});
  });

  $('#pause-timer').click(function() {
    if (!isDone) {
        let temp = (Date.now() - startTime) / 1000;
        timeToClimb += parseFloat(temp.toFixed(1));
        $('#time-seconds').text(timeToClimb);
    }
  });

  $('#end-timer').click(function() {
    if (!isDone) {
        let temp = (Date.now() - startTime) / 1000;
        timeToClimb += parseFloat(temp.toFixed(1));
        $('#time-seconds').text(timeToClimb);
        isDone = true;
    }

    $(this).css({'background-color': "#b44d45"});
    $(this).css({"color": "white"});
  });

  $('#reset-timer').click(function() {
    timeToClimb = 0;
    isDone = false;
    startTime = Date.now();

    $('#start-timer').css({"background-color": "gainsboro"});
    $('#end-timer').css({"background-color": "gainsboro"});

    $('#start-timer').css({"color": "black"});
    $('#end-timer').css({"color": "black"});
    $('#time-seconds').text("0.0");
  });

  $('#team-number-input').on('input', () => {
    updateTeamNumber();
  });

  $('#submit-form').click(() => finalSubmit());
});

function updateAutoTable() {
    $('#l1-reef-number').text(autoL1Made);
    $('#l2-reef-number').text(autoL2Made);
    $('#l3-reef-number').text(autoL3Made);
    $('#l4-reef-number').text(autoL4Made);

    $('#l1-miss-reef-number').text(autoL1Miss);
    $('#l2-miss-reef-number').text(autoL2Miss);
    $('#l3-miss-reef-number').text(autoL3Miss);
    $('#l4-miss-reef-number').text(autoL4Miss);

    $('#auto-processor-number').text(autoProcess);
    $('#auto-barge-number').text(autoBarge);

    $('#t-l1-reef-number').text(teleL1Made);
    $('#t-l2-reef-number').text(teleL2Made);
    $('#t-l3-reef-number').text(teleL3Made);
    $('#t-l4-reef-number').text(teleL4Made);

    $('#t-l1-miss-reef-number').text(teleL1Miss);
    $('#t-l2-miss-reef-number').text(teleL2Miss);
    $('#t-l3-miss-reef-number').text(teleL3Miss);
    $('#t-l4-miss-reef-number').text(teleL4Miss);

    $('#tele-processor-number').text(teleProcess);
    $('#tele-barge-number').text(teleBarge);
}

function updateTeamNumber() {
    console.log('working');
    if (allianceColor != '' && alliancePosition != 0) {
        addListener().open('schedule').find('event', '==', 'gsv').find('qual', '==', parseInt($('#match-number').val())).return().then(matches => {
            selectedMatch = matches[0];
            let teamNumber = selectedMatch[allianceColor][alliancePosition - 1];
            $('#team-number-input').val(teamNumber);
        });
    }
}

function finalSubmit() {
    let validity = true;
    if (!selectedMatch) {
        selectedMatch = [];
        validity = false;
    }


    let dataObject = 
        {
            dataEntryValidity: validity,
            selectedMatch: selectedMatch,
            event: selectedMatch.event,
            scouterName: $('#scouter-name-input').val(),
            matchNumber: $('#match-number').val(),
            startingPosition: startingPosition,
            alliancePosition: alliancePosition,
            allianceColor: allianceColor,
            teamNumber: $('#team-number-input').val(),
            preload: preload,

            autoMobility: autoMobility,
            autoL1Made: autoL1Made,
            autoL1Miss: autoL1Miss,
            autoL2Made: autoL2Made,
            autoL2Miss: autoL2Miss,
            autoL3Made: autoL3Made,
            autoL3Miss: autoL3Miss,
            autoL4Made: autoL4Made,
            autoL4Miss: autoL4Miss,
            autoBarge: autoBarge,
            autoProcessor: autoProcess,

            teleL1Made: teleL1Made,
            teleL1Miss: teleL1Miss,
            teleL2Made: teleL2Made,
            teleL2Miss: teleL2Miss,
            teleL3Made: teleL3Made,
            teleL3Miss: teleL3Miss,
            teleL4Made: teleL4Made,
            teleL4Miss: teleL4Miss,
            teleBarge: teleBarge,
            teleProcessor: teleProcess,
            telePark: telePark,
            timeToClimb: timeToClimb,
            notes: $('#extra-notes-textarea').val()
        };

    
    console.log(dataObject);

    if (!pushed) {
        addEmitter().open('matches')
        .add(dataObject).commit().then(() => {
            console.log('push working');
            $(this).css({"background-color": "seagreen"});
            location.reload();
            return;
        });
    }
}