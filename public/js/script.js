// let userDetail;

// /**
//  * Starting method to initialize a new CachedEmitter.
//  * @returns A Cached Emitter for writing, updating, and deleting queries.
//  */
// function addEmitter() {
//     return new CachedEmitter();
// }
// /**
//  * Starting method to initialize a new CachedListener.
//  * @returns A Cached Listener for reading and filtering queries.
//  */
// function addListener() {
//     return new CachedListener();
// }



// $(() => {
//     if (userDetail) {
//         $('#signin').hide();
//         $('#welcome').show();
//     } else {
//         $('#signin').show();
//         $('#welcome').hide();
//     }

//     $('#signin-btn').click(() => {
//         addListener().open('scouters').return('name').then(usernameArrayInObject => {
//             console.log(usernameArrayInObject);
//             let usernameArray = [];
//             for (let acc of usernameArrayInObject) usernameArray.push(acc.name);
//             console.log(usernameArray);
//             if (usernameArray.includes($('#signin-input').val())) {
//                 addListener().open('scouters').find("name", '==', $('#signin-input').val()).return().then(detail => {
//                     userDetail = detail[0];
//                     $('#signin').hide();
//                     console.log('found existing account, registered under it');
//                 });
//             } else {
//                 addEmitter().open('scouters').applyTo(`scouter${usernameArray.length + 1}`).add({
//                     name: $('#signin-input').val(), 
//                     permission: "scout",
//                     assignments: []
//                 }).commit().then(() => {
//                     userDetail = {
//                         name: $('#signin-input').val(), 
//                         permission: "scout",
//                         assignments: []
//                     };
//                     $('#signin').hide();
//                     console.log('created new account, registered under it');
//                 });
//             }

//         });
//     });
// });

// async function updateHomePage() {
//     addListener.open('notifications').return 

//     let allHTML = ``;
    

//     $('#notifications').html(`
//         <div class="welcome-heading">
//             Welcome ${userDetail.name}!<br/>
//             <div class="notif-section">
                
//             </div>
//         </div>
//         `);
// }