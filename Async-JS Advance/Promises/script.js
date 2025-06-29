// ✅ 1) Simulate a Food Delivery:

// function orderFood() {
//     return new Promise(function(res, rej) {
//         let check = Math.random()<.7;
//         setTimeout(function() {
//             if(check) res();
//             else rej();
//         }, 2000);
//     });
// }
// orderFood()
// .then(function() {
//     console.log("🍕 Pizza Delivered!");
// })
// .catch(function() {
//     console.log("❌ Delivery Failed!");
// });

// ✅ 2) Chained Promises: User -> Posts -> Comments

// function getUser() {
//     return new Promise(function(res, rej) {
//         setTimeout(function() {
//             res({id:1, name: "Harsh"});
//         }, 1000);
//     })
// }
// function getPosts(userId) {
//     return new Promise(function(res, rej) {
//         setTimeout(function() {
//             res("title-1, title-2");
//         }, 1000);
//     })
// }
// function getComments(postId) {
//     return new Promise(function(res, rej) {
//         setTimeout(function() {
//             res("great post, Have a beautiful day!, looks Nice");
//         }, 1000);
//     })
// }
// getUser()
// .then(function(userData){
//     console.log(userData);
//     return getPosts(userData.id);
// })
// .then(function(titles) {
//     console.log(titles);
//     return getComments("xyz..");
// })
// .then(function(cmts){
//     console.log(cmts);
// });     

// ✅ 3) Fake API Delay:

// function fakeApiDelay(endPoint) {
//     const data = {
//         users: ["Harsh", "Harshita", "Harshu"],
//         posts: ["great Post!", "looking awesome!","keep it up!"]
//     }
//    return new Promise(function(res, rej) {
//     let delay = Math.random()*2000+1000;
//     setTimeout(function() {
//         res(data[endPoint]);
//     },delay);
//    });
// }
// fakeApiDelay("users")
// .then(function(fetch) {
//     console.log(fetch);
// });
// fakeApiDelay("posts")
// .then(function(fetch) {
//     console.log(fetch);
// });