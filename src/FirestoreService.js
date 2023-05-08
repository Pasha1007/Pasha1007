import db from '../firebase';

function getUserInfo() {
    return new Promise((resolve, reject) => {
       db.collection("users").get().then((allMenuItems) => {
            resolve(allMenuItems);
       }).catch((e) => {
            reject(e);
       })
    })
 }
 export default { getAllMenuItems }