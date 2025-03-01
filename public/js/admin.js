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

let currentPage = 'schedule';

let eventScheduleData = [];


$(() => {
  $('.nav-bar span').click(function() {
    $('.tabs-bar').slideToggle();
    $('.tabs-bar').css({'display': 'flex'});
  });
  
  $('#schedule-tab').click(function() {
    $('#schedule-form').css({
       "width": '100%',
       "opacity": '1'
     });
    
    $('#teams-form').css({
       "width": '0%',
       "opacity": '0'
     });
    
    currentPage = 'schedule';
  });
  
  $('#teams-tab').click(function() {
    $('#schedule-form').css({
       "width": '0%',
       "opacity": '0'
     });
    
    $('#teams-form').css({
       "width": '100%',
       "opacity": '1'
     });
    
    currentPage = 'teams';
  });


  // lowk i'm burning out :(

  $('#event-name-submit').click(function() {
    console.log('working');
    addListener()
    .open('schedule')
    .find("event", "==", $('#event-name-input').val())
    .return().then(data => {
      data.sort((a, b) => a.qual - b.qual);
      console.log(data);
      eventScheduleData = data;
      $('#event-schedule').empty();
      for (let match of eventScheduleData) {
        console.log('working');
        $('#event-schedule').append(`
          <div id="${match.event}-${match.qual}" class="match-row">
            <span>Qual ${match.qual}</span>
            <div class="blue-teams" id="${match.event}-${match.qual}-blue">
              <div class="team">${match.blue[0]}</div>
              <div class="team">${match.blue[1]}</div>
              <div class="team">${match.blue[2]}</div>
            </div>
            <div class="red-teams" id="${match.event}-${match.qual}-red">
              <div class="team">${match.red[0]}</div>
              <div class="team">${match.red[1]}</div>
              <div class="team">${match.red[2]}</div>
            </div>
          </div>
          `);
      }
    });
  });

    let deleteMode = false;
    let insertMode = false;


    $("#bulk-delete").click(function() {
      if (!insertMode) {
        if (deleteMode) {
          $('#delete-confirmation').hide();
          deleteMode = false;
        } else {
        $('#delete-confirmation').show();
        deleteMode = true;
        }
      }
    });

    $('#delete-no').click(function() {
      if (!insertMode) {
        $('#delete-confirmation').hide();
        deleteMode = false;
      }
    });

  $('#delete-yes').click(function() {
    addEmitter().open('schedule')
    .find("event", "==", $('#event-name-input').val())
    .delete()
    .commit()
    .then(() => {
      console.log('working');
      addListener()
      .open('schedule')
      .find("event", "==", $('#event-name-input').val())
      .return().then(data => {
        data.sort((a, b) => a.qual - b.qual);
        console.log(data);
        eventScheduleData = data;
        $('#event-schedule').empty();
        for (let match of eventScheduleData) {
          console.log('working');
          $('#event-schedule').append(`
            <div id="${match.event}-${match.qual}" class="match-row">
              <span>Qual ${match.qual}</span>
              <div class="blue-teams" id="${match.event}-${match.qual}-blue">
                <div class="team">${match.blue[0]}</div>
                <div class="team">${match.blue[1]}</div>
                <div class="team">${match.blue[2]}</div>
              </div>
              <div class="red-teams" id="${match.event}-${match.qual}-red">
                <div class="team">${match.red[0]}</div>
                <div class="team">${match.red[1]}</div>
                <div class="team">${match.red[2]}</div>
              </div>
            </div>
            `);
        }
      });
    });

    $('#delete-confirmation').hide();
    deleteMode = false;
  });

  $('#bulk-insert').click(function() {
    if (!deleteMode) {
      if (!insertMode) {
        insertMode = true;
        $('#bulk-insert-popup').show();
      } else {
        insertMode = false;
        $('#bulk-insert-popup').hide();
      }
    }
  });

  $('#insert-submit').click(function() {
    let blue1teams = $('#insert-blue-1').val().split(' ');
    let blue2teams = $('#insert-blue-2').val().split(' ');
    let blue3teams = $('#insert-blue-3').val().split(' ');

    let red1teams = $('#insert-red-1').val().split(' ');
    let red2teams = $('#insert-red-2').val().split(' ');
    let red3teams = $('#insert-red-3').val().split(' ');

    addListener().open('schedule').find("event", "==", $('#event-name-input').val()).return()
    .then(data => {
      data.sort((a, b) => b.qual - a.qual);
      console.log(data);
      let highestQual;
      if (data.length > 0) {
        highestQual = data[0].qual;
      } else {
        highestQual = 0;
      }

      for (let i in blue1teams) {
        let object = {
          qual: parseInt(highestQual) + 1 + parseInt(i),
          event: $('#event-name-input').val(),
          blue: [blue1teams[i], blue2teams[i], blue3teams[i]],
          red: [red1teams[i], red2teams[i], red3teams[i]]
        };

        addEmitter().open('schedule').add(object).commit();
      }
    });
  });
});