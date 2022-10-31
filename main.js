import data from "./data.json" assert { type: "json" };
import tracks from "./tracks.json" assert { type: "json" };




// /*
// The problem with original data was that the refined tracks with their Source, Target, and Value. 
// There's no title associated with this track_id 

// I'm going to go through the tracks.csv file that I converted to only having the song title with it's associated id 
// */ 





function submitClicked() {
  const songTitle = document.getElementById('information').value; // gets the information from the textbox
  document.getElementById('information').value = ""; // sets textbox to "" 
  
  const listOfSongTitles = findSongTitle(songTitle)

  
  if(listOfSongTitles.length == 0) {
    alert("Song Title Does Not Exist");
  } 
  else 
  {
    const id = listOfSongTitles[0];
    
    const SIX_ASSOCAITED = findDataAssociatedWithSong(id);

    if(SIX_ASSOCAITED[0] == undefined 
      || SIX_ASSOCAITED[1] == undefined
      || SIX_ASSOCAITED[2] == undefined
      || SIX_ASSOCAITED[3] == undefined
      || SIX_ASSOCAITED[4] == undefined
      || SIX_ASSOCAITED[5] == undefined) {
        alert("Not Calculated")
      } else {

      document.getElementById("songTitle").innerHTML = "Song Title: " + songTitle

      const listOfAssociatedSongsTitles = findSongForSixAssociatedSongs(SIX_ASSOCAITED)

      document.getElementById("1").innerHTML = listOfAssociatedSongsTitles[0];
      document.getElementById("2").innerHTML = listOfAssociatedSongsTitles[1];
      document.getElementById("3").innerHTML = listOfAssociatedSongsTitles[2];
      document.getElementById("4").innerHTML = listOfAssociatedSongsTitles[3];
      document.getElementById("5").innerHTML = listOfAssociatedSongsTitles[4];
      document.getElementById("6").innerHTML = listOfAssociatedSongsTitles[5];
      }
  }
}

function findSongForSixAssociatedSongs(array) {
  const listOfSongs = []; 
  for(let i = 0; i < array.length; i++) {
    listOfSongs.push(findSongTitleWithId(array[i]))
  }
  return listOfSongs
}

function findSongTitleWithId(id) {
  for(let i = 0; i < tracks.length; i++) {
    if(id == tracks[i].track_id) {
      return(tracks[i].title);
    }
  }
  
}


// finds the id associated with the title 
function findSongTitle(title) {
  const array = [];
  
  for (let i = 0; i < tracks.length; i++) {
    if (title == tracks[i].title) {
      array.push(tracks[i].track_id)
    }
  }
  
  return array;
}


function findDataAssociatedWithSong(id) {
  const array = [];
  for (let i = 0; i < data.links.length; i++) {
    if (id == data.links[i].Source) {
      array.push(data.links[i].Target);
    }
  }
  return array;
}


document.getElementById("button").addEventListener("click", submitClicked);
