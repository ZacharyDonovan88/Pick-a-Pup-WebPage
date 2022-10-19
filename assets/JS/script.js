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