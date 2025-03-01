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

let currentPage = 'scout';

$(() => {
    updateScoutData();
    updatePitData();

    $('#scout').click(function() {
        $('#scout-div').css({
          "width": '100%',
          "opacity": '1'
        });
       
        $('#pit-div').css({
          "width": '0',
          "opacity": '0'
        });
       
       $('#average-div').css({
          "width": '0',
          "opacity": '0'
        });
       
       $('#chart-div').css({
          "width": '0',
          "opacity": '0'
        });
       
       currentPage = 'scout';
   
       $('#scout').css({"background-color": "#5C7AFF"});
       $('#pit').css({"background-color": "#0A0941"});
       $('#chart').css({"background-color": "#0A0941"});
       $('#average').css({"background-color": "#0A0941"});
     });



     $('#pit').click(function() {
        $('#pit-div').css({
          "width": '100%',
          "opacity": '1'
        });
       
        $('#scout-div').css({
          "width": '0',
          "opacity": '0'
        });
       
       $('#average-div').css({
          "width": '0',
          "opacity": '0'
        });
       
       $('#chart-div').css({
          "width": '0',
          "opacity": '0'
        });
       
       currentPage = 'pit';
   
       $('#pit').css({"background-color": "#5C7AFF"});
       $('#scout').css({"background-color": "#0A0941"});
       $('#chart').css({"background-color": "#0A0941"});
       $('#average').css({"background-color": "#0A0941"});
     });


     $('#average').click(function() {
        $('#average-div').css({
          "width": '100%',
          "opacity": '1'
        });
       
        $('#pit-div').css({
          "width": '0',
          "opacity": '0'
        });
       
       $('#scout-div').css({
          "width": '0',
          "opacity": '0'
        });
       
       $('#chart-div').css({
          "width": '0',
          "opacity": '0'
        });
       
       currentPage = 'average';
   
       $('#average').css({"background-color": "#5C7AFF"});
       $('#pit').css({"background-color": "#0A0941"});
       $('#chart').css({"background-color": "#0A0941"});
       $('#scout').css({"background-color": "#0A0941"});
     });



     $('#chart').click(function() {
        $('#chart-div').css({
          "width": '100%',
          "opacity": '1'
        });
       
        $('#pit-div').css({
          "width": '0',
          "opacity": '0'
        });
       
       $('#average-div').css({
          "width": '0',
          "opacity": '0'
        });
       
       $('#scout-div').css({
          "width": '0',
          "opacity": '0'
        });
       
       currentPage = 'chart';
   
       $('#chart').css({"background-color": "#5C7AFF"});
       $('#pit').css({"background-color": "#0A0941"});
       $('#scout').css({"background-color": "#0A0941"});
       $('#average').css({"background-color": "#0A0941"});
     });
});

function updatePitData() {
    addListener().open('pitscouting').find('event', '==', 'gsv').return().then(data => {
        console.log(data, "pit");
        // data.sort((a, b) => a.matchNumber - b.matchNumber);
        // data.sort((a, b) => a.alliancePosition - b.alliancePosition);
        for (let doc of data) {
            console.log('appending');
            $('.pit-table').append(`
                <tr>
            <td>${doc.event}</td>
            <td>${doc.team}</td>
            <td>${doc.dttype}</td>
            <td>${doc.autoMobility}</td>
            <td>${doc.autoCapability}</td>
            <td>${doc.teleCapability}</td>
            <td>${doc.reefScore}</td>
            <td>${doc.algaeScore}</td>
            <td>${doc.climbAbility}</td>
            <td>${doc.notes}</td>
          </tr>
            `);
        }
    });
}

function updateScoutData() {
    addListener().open('matches').find('event', "==", 'gsv').return().then(data => {
        console.log(data);
        for (let doc of data) {
            console.log('appending');
            $('.scout-table').append(`
                <tr>
            <td>${doc.selectedMatch.event}</td>
            <td>${doc.scouterName}</td>
            <td>${doc.matchNumber}</td>
            <td>${doc.teamNumber}</td>
            <td>${doc.allianceColor}</td>
            <td>${doc.alliancePosition}</td>
            <td>${doc.startingPosition}</td>
            <td>${doc.preload}</td>
            
            <td>${doc.autoMobility}</td>
            <td>${doc.autoL1Made}</td>
            <td>${doc.autoL2Made}</td>
            <td>${doc.autoL3Made}</td>
            <td>${doc.autoL4Made}</td>
            <td>${doc.autoL1Miss}</td>
            <td>${doc.autoL2Miss}</td>
            <td>${doc.autoL3Miss}</td>
            <td>${doc.autoL4Miss}</td>
            <td>${doc.autoBarge}</td>
            <td>${doc.autoProcessor}</td>
            
            <td>${doc.teleL1Made}</td>
            <td>${doc.teleL2Made}</td>
            <td>${doc.teleL3Made}</td>
            <td>${doc.teleL4Made}</td>
            <td>${doc.teleL1Miss}</td>
            <td>${doc.teleL2Miss}</td>
            <td>${doc.teleL3Miss}</td>
            <td>${doc.teleL4Miss}</td>
            <td>${doc.teleBarge}</td>
            <td>${doc.teleProcessor}</td>
            <td>${doc.telePark}</td>
            <td>${doc.timeToClimb}</td>
            <td>${doc.notes}</td>
          </tr>
            `);
        }
    });
}