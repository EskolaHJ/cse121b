/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Jacob Eskola",
    photo:`images/ProfilePicture.png`,
    favoriteFoods: [
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
  {place: 'Cascade, ID', length: '2 years'},
  {place: 'Garden City, Id', length: '18 years'},
  {place: 'Boise, ID', length: '8 years'}
);




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
let photoElem = document.querySelector('#photo');
photoElem.setAttribute('src', myProfile.photo);
photoElem.setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby =>{
   let li = document.createElement('li');
   li.textContent = hobby;
   document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;

    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});
