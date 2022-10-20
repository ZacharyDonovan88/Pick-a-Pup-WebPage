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
        
        videoDiv.innerHTML = "<iframe width='420' height='345' src='https://www.youtube.com/embed/" + results[i].id.videoId + "'></iframe>";
        parentDiv.append(videoDiv);
    }
};

/*
// https://www.
// document.getElementById('option').addEventListener('change', function() {
//     console.log('You selected: ', this.value);
//   });

// getdatafromyt();

var dogApi = 'https://api.thedogapi.com/v1/breeds/';

function getdatafromdog() {
    var godimage = document.getElementById('dogimage').src = "./assets/images/pexels-steshka-willems-1390361.jpg" ;
 
    fetch(dogApi + '201')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}

// getdatafromdog();
*/



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
    "Boxer",
    "Cavalier King Charles Spaniel",
    "Schnauzer",
    "Pug",
    ]


var optionList = (breedSelectionList + selectList);


var dogApi = 'https://api.thedogapi.com/v1/breeds/';





function getdatafromdog(dogTypeAsString) {
    switch (dogTypeAsString) {
        case 'Labrador':
            var chosenDogId = '149';
            break;
        case 'Golden Retriever':
            var chosenDogId = '121';
            break;
        case 'French Bulldog':
            var chosenDogId = '113';
            break;
        case 'Beagle':
            var chosenDogId = '31';
            break;
        case 'German Shepherd':
            var chosenDogId = '115';
            break;
        case 'Poodle':
            var chosenDogId = '196';
            break;
        case 'Border Collie':
            var chosenDogId = '50';
            break;            
        case 'Boxer':
            var chosenDogId = '55';
            break; 
        case 'Cavalier King Charles Spaniel':
            var chosenDogId = '71';
            break; 
        case 'Schnauzer':
            var chosenDogId = '239';
            break; 
        case 'Pug':
            var chosenDogId = '201';
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
    })


fetch(dogApi + chosenDogId)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var dogHeightEl = document.getElementById('height');
    dogHeightEl.innerHTML = data.height;    
})



fetch(dogApi + chosenDogId)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var dogYearsEl = document.getElementById('life_span');
    dogYearsEl.innerHTML = data.life_span;    
})

fetch(dogApi + chosenDogId)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var dogLapDogEl = document.getElementById('bred_for');
    dogLapDogEl.innerHTML = data.bred_for;    
})

fetch(dogApi + chosenDogId)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var dogTempEl = document.getElementById('temperament');
    dogTempEl.innerHTML = data.temperament;    
})

fetch(dogApi + chosenDogId)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var dogWeightEl = document.getElementById('weight');
    dogWeightEl.innerHTML = data.weight;    
})

}



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

