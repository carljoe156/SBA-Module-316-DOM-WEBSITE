//Top 100 Pop Songs, the goal is to iterate through the array and give recommendations
const epicPlaylist = [
  "Billie Jean - Michael Jackson",
  "Like a Prayer - Madonna",
  "I Wanna Dance with Somebody - Whitney Houston",
  "Thriller - Michael Jackson",
  "Stayin' Alive - Bee Gees",
  "Uptown Girl - Billy Joel",
  "Toxic - Britney Spears",
  "Rolling in the Deep - Adele",
  "Call Me Maybe - Carly Rae Jepsen",
  "Don't Stop Believin' - Journey",
  "Shape of You - Ed Sheeran",
  "Roar - Katy Perry",
  "Happy - Pharrell Williams",
  "Blinding Lights - The Weeknd",
  "Just the Way You Are - Bruno Mars",
  "Smooth - Santana ft. Rob Thomas",
  "Poker Face - Lady Gaga",
  "Wannabe - Spice Girls",
  "Havana - Camila Cabello ft. Young Thug",
  "Firework - Katy Perry",
  "Umbrella - Rihanna ft. Jay-Z",
  "Livin' La Vida Loca - Ricky Martin",
  "I Will Always Love You - Whitney Houston",
  "No Scrubs - TLC",
  "Vogue - Madonna",
  "Teenage Dream - Katy Perry",
  "My Heart Will Go On - Celine Dion",
  "Bailamos - Enrique Iglesias",
  "Creep - Radiohead",
  "I Want It That Way - Backstreet Boys",
  "Can't Stop the Feeling! - Justin Timberlake",
  "Shake It Off - Taylor Swift",
  "A Thousand Miles - Vanessa Carlton",
  "Bleeding Love - Leona Lewis",
  "Mr. Brightside - The Killers",
  "Let Me Love You - Mario",
  "Girls Just Want to Have Fun - Cyndi Lauper",
  "All Star - Smash Mouth",
  "Take a Bow - Rihanna",
  "I Don't Want to Miss a Thing - Aerosmith",
  "Bohemian Rhapsody - Queen",
  "Waiting for Tonight - Jennifer Lopez",
  "Irreplaceable - Beyoncé",
  "The Sign - Ace of Base",
  "Man! I Feel Like a Woman - Shania Twain",
  "Single Ladies (Put a Ring on It) - Beyoncé",
  "Wonderwall - Oasis",
  "No One - Alicia Keys",
  "Back to December - Taylor Swift",
  "Let It Go - Idina Menzel (from *Frozen*)",
  "Call on Me - Eric Prydz",
  "Savage Love - Jawsh 685 x Jason Derulo",
  "Levitating - Dua Lipa",
  "New Rules - Dua Lipa",
  "Truth Hurts - Lizzo",
  "Blowin' in the Wind - Bob Dylan",
  "Take Me to Church - Hozier",
  "Fight Song - Rachel Platten",
  "Chandelier - Sia",
  "Old Town Road - Lil Nas X",
  "Royals - Lorde",
  "Don't Start Now - Dua Lipa",
  "Good 4 U - Olivia Rodrigo",
  "Shallow - Lady Gaga & Bradley Cooper",
  "We Belong Together - Mariah Carey",
  "I'm Your Angel - R. Kelly & Celine Dion",
  "Fighter - Christina Aguilera",
  "One Kiss - Calvin Harris & Dua Lipa",
  "Stay - The Kid LAROI & Justin Bieber",
  "Dancing Queen - ABBA",
  "If I Ain't Got You - Alicia Keys",
  "I Want You Back - *NSYNC",
  "All of Me - John Legend",
  "Livin' on a Prayer - Bon Jovi",
  "Tearin' Up My Heart - *NSYNC",
  "Uptown Funk - Mark Ronson ft. Bruno Mars",
  "Mambo No. 5 - Lou Bega",
  "I Gotta Feeling - The Black Eyed Peas",
  "Torn - Natalie Imbruglia",
  "Kiss Me - Sixpence None the Richer",
  "Bad Romance - Lady Gaga",
  "Jolene - Dolly Parton",
  "Run the World (Girls) - Beyoncé",
  "Take It Easy - Eagles",
  "Boys Don't Cry - The Cure",
  "Sugar - Maroon 5",
  "Hips Don't Lie - Shakira ft. Wyclef Jean",
  "Let's Get It Started - The Black Eyed Peas",
  "Ain't No Mountain High Enough - Marvin Gaye & Tammi Terrell",
  "Wrecking Ball - Miley Cyrus",
  "Tik Tok - Kesha",
  "Radioactive - Imagine Dragons",
  "Criminal - Fiona Apple",
  "Dilemma - Nelly ft. Kelly Rowland",
  "Bleeding Love - Leona Lewis",
  "Crazy in Love - Beyoncé ft. Jay-Z",
  "Killing Me Softly with His Song - The Fugees",
  "Royals - Lorde",
  "Sweet Caroline - Neil Diamond",
  "Don't Let Me Down - The Chainsmokers ft. Daya",
  "Good as Hell - Lizzo",
  "Pompeii - Bastille",
  "How Will I Know - Whitney Houston",
  "Wake Me Up Before You Go-Go - Wham!",
  "Teenage Dirtbag - Wheatus",
  "I Believe I Can Fly - R. Kelly",
  "SexyBack - Justin Timberlake",
  "All the Small Things - Blink-182",
  "Shake It - Metro Station",
  "Bleeding Love - Leona Lewis",
  "Shout - The Isley Brothers",
  "Lady Marmalade - Christina Aguilera, Lil' Kim, Mýa & Pink",
  "Don't Speak - No Doubt",
  "I’m a Believer - The Monkees",
  "Can't Feel My Face - The Weeknd",
  "Rude - MAGIC!",
  "La La La - Naughty Boy ft. Sam Smith",
  "It's My Life - Bon Jovi",
  "The Way You Make Me Feel - Michael Jackson",
  "Hot Stuff - Donna Summer",
  "Funky Town - Lipps Inc.",
  "With or Without You - U2",
  "Hard to Handle - The Black Crowes",
];
const playlistElement = document.querySelector(".playlist");

const addSongBtn = document.getElementById("add-song-btn");

const songInput = document.getElementById("new-song");

const totalSongsText = document.querySelector(".total");

const showListBtn = document.querySelector(".show-list");

const form = document.getElementById("add-song-form");

const moodForm = document.getElementById("mood-form");

const moodInput = document.getElementById("mood-input");

const nameForm = document.getElementById("name-form");

const userNameInput = document.getElementById("user-name");

const changeNameBtn = document.getElementById("change-name-btn");

const welcomeMessage = document.querySelector(".welcome-message");

const originalPlaylist = [...epicPlaylist]; //Just learned about a Shallow copy, so I'm implementing here.
let playlist = [...epicPlaylist];

function resetPlaylist() {
  playlist = [...originalPlaylist];
  updatePlaylist();
  updateSongCount();
}
const resetBtn = document.getElementById("reset-playlist-btn");
resetBtn.addEventListener("click", resetPlaylist);

let userName = "";

// For the Your Name form submission
// const nameForm = document.getElementById("name-form");
// const userNameInput = document.getElementById("user-name");
// const changeNameBtn = document.getElementById("change-name-btn");
// const welcomeMessage = document.querySelector(".welcome-message");
// //let userName = "";

nameForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = userNameInput.value.trim(); //displays the user when they put their name
  if (userName) {
    alert(`Welcome to Your Playlist, ${userName}!`); // Alerts and stuff
    welcomeMessage.innerHTML = `Welcome to Your New Playlist, ${userName}!`;
    nameForm.style.display = "none"; // also once logged hide it
    changeNameBtn.style.display = "inline-block"; // Let's change our names, sometimes
    userNameInput.value = ""; //wanted to clear the field was logged
    // alert("Please enter your name.");
    // welcomeMessage.innerHTML = `Welcome to Your New Playlist, ${userName}!`;
    // changeNameBtn.style.display = "inline-block"; // Let's change our names, sometimes
  } else {
    alert("Hey, Please enter your name.");
  }
});

changeNameBtn.addEventListener("click", function () {
  nameForm.style.display = "block";
  welcomeMessage.innerHTML = "";
  changeNameBtn.style.display = "none";
});

//let playlist = [...epicPlaylist];

// A song event listener/
showListBtn.addEventListener("click", function (event) {
  playlistElement.classList.toggle("hide");
  showListBtn.classList.toggle("hide");
});

// Add song to playlist
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const newSong = songInput.value.trim();
  //const artist = document.getElementById("new-artist").value.trim();
  //const artist "Unknown Artist";

  if (newSong && !playlist.includes(newSong)) {
    playlist.push(newSong);
    console.log("Updated Vibes Playlist:", playlist);
    songInput.value = "";
    updatePlaylist();
    updateSongCount();
  } else {
    alert("Song already in playlist or invalid input.");
  }
});

// Handle mood-based playlist shuffle
moodForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const mood = moodInput.value.trim().toLowerCase();

  if (!mood) {
    alert("Please enter a mood.");
    return;
  }

  try {
    switch (mood) {
      case "energetic":
        shufflePlaylist(true); // Shuffle randomly for energetic mood
        break;
      case "chill":
        shufflePlaylist(false); // Shuffle slower for chill mood
        break;
      case "happy":
        playlist = playlist.filter((song) => isUpbeat(song)); // Filter upbeat songs
        shufflePlaylist(true); // Shuffle upbeat songs
        break;
      case "sad":
        playlist = playlist.filter((song) => isSad(song)); // Filter sad songs
        shufflePlaylist(false); // Shuffle slower for sad mood
        break;
      case "mindful-demure":
        playlist = playlist.filter((song) => isMindful(song)); // Filter calming songs
        playlist.sort((a, b) => a.localeCompare(b)); // Sort alphabetically
        break;
      default:
        alert(
          "Please enter a valid mood (e.g., energetic, chill, happy, sad, mindful-demure)."
        );
        return; // Exit if the mood is invalid
    }

    updatePlaylist();
    updateSongCount();
  } catch (error) {
    console.error("An error occurred while processing the mood:", error);
    alert("Something went wrong! Please try again.");
  }
});

// Helper functions to filter songs by mood, you know if you wanted
function isUpbeat(song) {
  const upbeatKeywords = ["happy", "dance", "joy", "fun", "party"];
  return upbeatKeywords.some((keyword) => song.toLowerCase().includes(keyword));
}

function isSad(song) {
  const sadKeywords = ["sad", "cry", "hurt", "lonely", "tears"];
  return sadKeywords.some((keyword) => song.toLowerCase().includes(keyword));
}

function isMindful(song) {
  const mindfulKeywords = ["calm", "peace", "quiet"];
  return mindfulKeywords.some((keyword) =>
    song.toLowerCase().includes(keyword)
  );
}

// Shuffle function for playlist
function shufflePlaylist(isEnergetic) {
  if (playlist.length === 0) {
    alert("The playlist is empty, cannot shuffle.");
    return;
  }

  try {
    if (isEnergetic) {
      playlist.sort(() => Math.random() - 0.5); // Fast shuffle
    } else {
      playlist.sort(() => Math.random() - 0.2); // Slow shuffle
    }
  } catch (error) {
    console.error("Error occurred while shuffling the playlist:", error);
    alert(
      "Something went wrong while shuffling the playlist. Please try again."
    );
  }
}

// Update the song count
function updateSongCount() {
  totalSongsText.innerText = `${playlist.length} great songs!`;
}

// Update the playlist display
function updatePlaylist() {
  playlistElement.innerHTML = ""; // Clear the playlist

  if (playlist.length === 0) {
    playlistElement.innerHTML = "<li>No songs available for this mood!</li>";
    return;
  }

  // Using DocumentFragment to avoid multiple DOM re-flows
  const fragment = document.createDocumentFragment();
  playlist.forEach((song, index) => {
    const li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `
          <span class="song-number">#${index + 1}</span> ${song} 
          <button class="remove-song-btn" data-index="${index}">Remove</button>`;
    fragment.appendChild(li);
  });
  playlistElement.appendChild(fragment);

  // Add event listeners for remove buttons
  const removeBtns = document.querySelectorAll(".remove-song-btn");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", removeSong);
  });
}

// Remove song from the playlist
function removeSong(event) {
  const index = event.target.getAttribute("data-index");
  playlist.splice(index, 1); // Remove song from array
  updatePlaylist();
  updateSongCount();
}

// Initial playlist render
updatePlaylist();

const firstSong = playlistElement.firstChild;
if (firstSong && firstSong.nodeType === 1) {
  firstSong.style.color = "green";
}

const lastSong = playlistElement.lastChild;
if (lastSong && lastSong.nodeType === 1) {
  const customNote = document.createElement("span");
  customNote.textContent = " (Last song in playlist)";
  lastSong.appendChild(customNote);
}
const nextSibling = firstSong ? firstSong.nextElementSibling : null;
if (nextSibling) {
  nextSibling.style.backgroundColor = "#f0f0f0";
}
const parentNode = firstSong ? firstSong.parentNode : null;
if (parentNode) {
  parentNode.style.border = "2px solid #ccc";
}

//Validations and Such
//Name
function validateName() {
  let nameVal = userNameInput.value.trim();
  if (nameVal.length === 0) {
    alert("Your name cannot be empty."); //Uh maybe you should add your name here
    userNameInput.focus(); //FOCUS
    return false;
  }
  return nameVal;
}
//Songs
function ValidateSong() {
  const songVal = songInput.value.trim();
  if (songVal.length === 0) {
    alert("Song name cannot be empty."); //Who doesn't like Music
    songInput.focus();
    return false;
  }
  if (songVal.length < 3) {
    alert("Song name must be at least 4 characters long."); // Songs are longer than 4 characters you know
    songInput.focus();
    return false;
  }
  return songVal;
}

//Mood
function validateMood() {
  const moodVal = moodInput.value.trim().toLowerCase();
  const validMoods = ["energetic", "chill", "happy", "sad", "mindful-demure"];

  if (!moodVal) {
    alert("Please enter a mood.");
    moodInput.focus();
    return false;
  }

  if (!validMoods.includes(moodVal)) {
    alert("Invalid mood. Try: energetic, chill, happy, sad, mindful-demure.");
    moodInput.focus();
    return false;
  }

  return moodVal;
}

moodForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const mood = validateMood();
  if (mood) shufflePlaylistByMood(mood);
});

function shufflePlaylistByMood(mood) {
  switch (mood) {
    case "energetic":
      shufflePlaylist(true);
      break;
    case "chill":
      shufflePlaylist(false);
      break;
    case "happy":
      playlist = playlist.filter(isUpbeat);
      shufflePlaylist(true);
      break;
    case "sad":
      playlist = playlist.filter(isSad);
      shufflePlaylist(false);
      break;
    case "mindful-demure":
      playlist = playlist.filter(isMindful);
      playlist.sort();
      break;
    default:
      alert("Invalid mood");
      return;
  }
  updatePlaylist();
  updateSongCount();
}

// Helper functions for mood-based filtering, I've been thinking maybe expand the functionality a bit, this is too long though
function isUpbeat(song) {
  return /happy|dance|joy|fun|party/.test(song.toLowerCase());
}
function isSad(song) {
  return /sad|cry|hurt|tears/.test(song.toLowerCase());
}
function isMindful(song) {
  return /calm|peace|quiet/.test(song.toLowerCase());
}

function shufflePlaylist(isEnergetic) {
  playlist.sort(() => Math.random() - (isEnergetic ? 0.5 : 0.2));
}
