let userDetail;

function addRequest() {
    return new CachedRequest();
}

function addResponse() {
    return new CachedResponse();
}

$(() => {
    if (userDetail) {
        $('#signin').hide();
        $('#welcome').show();
    } else {
        $('#signin').show();
        $('#welcome').hide();
    }

    $('#signin-btn').click(() => {
        
        addRequest().open('scouters').returnAttributes('name').withdraw().then(usernameArrayInObject => {
            console.log(usernameArrayInObject);
            let usernameArray = [];
            for (let acc of usernameArrayInObject) usernameArray.push(acc.name);
            console.log(usernameArray);
            if (usernameArray.includes($('#signin-input').val())) {
                addRequest().open('scouters').returnAttributes('name', 'permission').addFilters({attribute: "name", condition: attr => attr == $('signin-input').val()}).withdraw().then(detail => {
                    userDetail = detail[0];
                    $('#signin').hide();
                    console.log('found existing account, registered under it');
                });
            } else {
                addResponse().open('scouters').add({
                    name: $('#signin-input').val(), 
                    permission: "scout",
                    assignments: []
                }).submit().then(() => {
                    userDetail = {
                        name: $('#signin-input').val(), 
                        permission: "scout",
                        assignments: []
                    };
                    $('#signin').hide();
                    console.log('created new account, registered under it');
                });
            }

        });
    });
});

async function updateHomePage() {
    addRequest.open("notifications")

    $('#notifications').html(`
        <div class="welcome-heading">
            Welcome ${userDetail.name}!<br/>
            <div class="notif-section">
                
            </div>
        </div>
        `);
}