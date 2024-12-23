let userDetail;

$(() => {
    if (userDetail) {
        $('#signin').hide();
    } else {
        $('#signin').show();
    }

    $('#signin-btn').click(() => {
        let usernameArray = addResponse()
                            .open('scouters')
                            .withdraw()
                            .config("name")
                            .return();
        if (usernameArray.includes($('#signin-input').val())) {
            let accounts = addResponse()
                            .open('scouters')
                            .withdraw()
                            .config("name", "permission")
                            .return();
            
            
        } else {
            addRequest().open("scouters")
                        .add({
                            name: $('#signin-input').val(), 
                            permission: "scout"
                        })
                        .submit();

            userDetail = {
                name: $('#signin-input').val(), 
                permission: "scout"
            };
        }
    });
});