// var ytApiKey = AIzaSyAR46ogHbJyj4BF-nP-GSiqM5dZI-Xr15w;
var ytContainer = document.getElementById('youtube-container');
// var dogList = document.getElementById("(select ID here)");
// var option = dogList.querySelectorAll("option");

var ytApi = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&key=AIzaSyAR46ogHbJyj4BF-nP-GSiqM5dZI-Xr15w&q=';


function getdatafromyt(option) {
    fetch(ytApi + 'pug')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.items);
        ytVideos(data.items);
    })
};


function ytVideos(results) {
    // console.log(results);
    for (var i = 0; i < results.length; i++) {
        var title = document.createElement('h3');
        var newImg = document.createElement('img');
        var videoUrl = document.createElement('a');
        
        title.innerHTML = results[i].snippet.title;
        videoUrl.setAttribute('href', 'https://www.youtube.com/watch?v=' + (results[i].id.videoId));
        videoUrl.setAttribute('target', '_blank');
        newImg.src= results[i].snippet.thumbnails.medium.url;
        
        
        ytContainer.append(title);
        ytContainer.append(videoUrl);
        videoUrl.append(newImg);    
    }
};

// https://www.
// document.getElementById('option').addEventListener('change', function() {
//     console.log('You selected: ', this.value);
//   });

getdatafromyt();

var dogApi = 'https://api.thedogapi.com/v1/breeds/';

function getdatafromdog() {
    fetch(dogApi + '201')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
}

getdatafromdog();