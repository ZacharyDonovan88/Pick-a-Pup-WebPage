var ytApi = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&key=AIzaSyAR46ogHbJyj4BF-nP-GSiqM5dZI-Xr15w&q=';
var dogApi = 'https://api.thedogapi.com/v1/breeds/';

// Gets user selected option and adds it to the end of the youtube api, which returns top 3 search results from youtube
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

// Uses data from fetch to create 3 youtube iframes and append each of them to the 'videoDiv' div 
var parentDiv = document.getElementById('videoDiv');
function ytVideos(results) {
    for (var i = 0; i < results.length; i++) {
        var videoDiv = document.createElement('div');
        videoDiv.innerHTML = "<iframe width='220' height='145' style='border:0' src='https://www.youtube.com/embed/" + results[i].id.videoId + "' allowfullscreen></iframe>";
        parentDiv.append(videoDiv);
    }
};

// Changes user selected string to an ID, as the dog api uses IDs as a reference not breed names
function getdatafromdog(dogTypeAsString) {
    var chosenDogId = '';
    switch (dogTypeAsString) {
        case 'Labrador Dog':
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
        case 'Pug Dog':
            chosenDogId = '201';
            break;       
    }

    // Appends ID to the dog api and returns data for selected breed
    fetch(dogApi + chosenDogId)
    .then(function (response) {
        return response.json();
    })
    // Adds relevent text using fetch data to appropriate sections
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

        // Displays stored default image for selected breed
        var imgSrc = "https://cdn2.thedogapi.com/images/"
        var dogPicEl = document.getElementById('dogimage');
        dogPicEl.src = imgSrc + data.reference_image_id + ".jpg"
    })
};

// Runs the youtube and dogApi functions when a valid option is selected and the submit button is clicked
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var userSelection = document.getElementById('breedSelection');
    if (userSelection.value == 'none') {
        return;
    } else {
    getdatafromyt(userSelection.value);
    getdatafromdog(userSelection.value);
    }
});

$(document).ready(function(){
    $('select').formSelect();
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
});
