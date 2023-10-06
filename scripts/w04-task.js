/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jacob Eskola",
    photo:'image/ProfilePicture.png',
    favoriteFood: [
        "Rice",
        "Chicken",
        "Cream of Chicken",
    ],
    hobbies: [
        "Going to the gym",
        "Gaming",
        "Scripture Study",
        "Attempting to MOD Games"
    ],
    placesLived: []
}



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Cascade, ID',
        length: '2 years',
        place: 'Garden City, ID',
        length: '18 years',
        place: 'Boise, ID',
        length: '8 years'
    }
)




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


