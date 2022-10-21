var ytContainer = document.getElementById('youtube-container');
var ytApi = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&key=AIzaSyAR46ogHbJyj4BF-nP-GSiqM5dZI-Xr15w&q=';


function getdatafromyt(option) {
    parentDiv.innerHTML = '';
    fetch(ytApi + option)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.items);
        ytVideos(data.items);
    })
};

var parentDiv = document.getElementById('videoDiv');
function ytVideos(results) {
    for (var i = 0; i < results.length; i++) {
        var videoDiv = document.createElement('div');
        
        videoDiv.innerHTML = "<iframe width='220' height='145' style='border:0' src='https://www.youtube.com/embed/" + results[i].id.videoId + "'></iframe>";
        parentDiv.append(videoDiv);
    }
};

var selectList = document.getElementById("breedSelection").option;
console.log("breedSelection");

var breedSelectionList = [
    'Labrador',
    "Golden Retriever",
    "French Bulldog",
    "Beagle",
    "German Shepherd",
    "Poodle",
    "Border Collie",
    "BoxerBreed",
    "Cavalier King Charles Spaniel",
    "Schnauzer",
    "Pug",
    ]


var optionList = (breedSelectionList + selectList);


var dogApi = 'https://api.thedogapi.com/v1/breeds/';





function getdatafromdog(dogTypeAsString) {
    var chosenDogId = '';
    switch (dogTypeAsString) {
        case 'Labrador':
            chosenDogId = '149';
            break;
        case 'Golden Retriever':
            chosenDogId = '121';
            break;
        case 'French Bulldog':
            chosenDogId = '113';
            break;
        case 'Beagle':
            chosenDogId = '31';
            break;
        case 'German Shepherd':
            chosenDogId = '115';
            break;
        case 'Poodle':
            chosenDogId = '196';
            break;
        case 'Border Collie':
            chosenDogId = '50';
            break;            
        case 'BoxerBreed':
            chosenDogId = '55';
            break; 
        case 'Cavalier King Charles Spaniel':
            chosenDogId = '71';
            break; 
        case 'Schnauzer':
            chosenDogId = '239';
            break; 
        case 'Pug':
            chosenDogId = '201';
            break;       
    }

    fetch(dogApi + chosenDogId)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        var dogNameEl = document.getElementById('breed_name');
        dogNameEl.innerHTML = data.name;   

        var dogHeightEl = document.getElementById('height');
        dogHeightEl.innerHTML = data.height.metric; 

        var dogYearsEl = document.getElementById('life_span');
        dogYearsEl.innerHTML = data.life_span; 
        
        var dogLapDogEl = document.getElementById('bred_for');
        dogLapDogEl.innerHTML = data.bred_for;
        
        var dogTempEl = document.getElementById('temperament');
        dogTempEl.innerHTML = data.temperament; 

        var dogWeightEl = document.getElementById('weight');
        dogWeightEl.innerHTML = data.weight.metric; 

        var dogGroupEl = document.getElementById('breed_group');
        dogGroupEl.innerHTML = data.breed_group;

        var imgSrc = "https://cdn2.thedogapi.com/images/"
        var dogPicEl = document.getElementById('dogimage');
        dogPicEl.src = imgSrc + data.reference_image_id + ".jpg"
    })
}


// fetch(dogApi + chosenDogId)
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
//     var dogHeightEl = document.getElementById('height');
//     dogHeightEl.innerHTML = data.height.metric;    
// })



// fetch(dogApi + chosenDogId)
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
//     var dogYearsEl = document.getElementById('life_span');
//     dogYearsEl.innerHTML = data.life_span;    
// })

// fetch(dogApi + chosenDogId)
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
//     var dogLapDogEl = document.getElementById('bred_for');
//     dogLapDogEl.innerHTML = data.bred_for;    
// })

// fetch(dogApi + chosenDogId)
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
//     var dogTempEl = document.getElementById('temperament');
//     dogTempEl.innerHTML = data.temperament;    
// })

// fetch(dogApi + chosenDogId)
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
//     var dogWeightEl = document.getElementById('weight');
//     dogWeightEl.innerHTML = data.weight.metric;    
// })

// fetch(dogApi + chosenDogId)
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
//     var imgSrc = "https://cdn2.thedogapi.com/images/"
//     var dogPicEl = document.getElementById('dogimage');
//     dogPicEl.src = imgSrc + data.reference_image_id + ".jpg"
// })

// fetch(dogApi + chosenDogId)
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     console.log(data);
//     var dogGroupEl = document.getElementById('breed_group');
//     dogGroupEl.innerHTML = data.breed_group;    
// })





/*

function getdatafromyt(option) {
    parentDiv.innerHTML = '';
    fetch(ytApi + option)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.items);
        ytVideos(data.items);
    })
};
*/

