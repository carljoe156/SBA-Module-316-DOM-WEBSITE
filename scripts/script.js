//Top 100 Pop Songs, the goal is to iterate through the array and give recommendations
const epicPlaylist = [
  { title: "Billie Jean", artist: "Michael Jackson" },
  { title: "Like a Prayer", artist: "Madonna" },
  { title: "I Wanna Dance with Somebody", artist: "Whitney Houston" },
  { title: "Thriller", artist: "Michael Jackson" },
  { title: "Stayin' Alive", artist: "Bee Gees" },
  { title: "Uptown Girl", artist: "Billy Joel" },
  { title: "Toxic", artist: "Britney Spears" },
  { title: "Rolling in the Deep", artist: "Adele" },
  { title: "Call Me Maybe", artist: "Carly Rae Jepsen" },
  { title: "Don't Stop Believin'", artist: "Journey" },
  { title: "Shape of You", artist: "Ed Sheeran" },
  { title: "Roar", artist: "Katy Perry" },
  { title: "Happy", artist: "Pharrell Williams" },
  { title: "Blinding Lights", artist: "The Weeknd" },
  { title: "Just the Way You Are", artist: "Bruno Mars" },
  { title: "Smooth", artist: "Santana ft. Rob Thomas" },
  { title: "Poker Face", artist: "Lady Gaga" },
  { title: "Wannabe", artist: "Spice Girls" },
  { title: "Havana", artist: "Camila Cabello ft. Young Thug" },
  { title: "Firework", artist: "Katy Perry" },
  { title: "Umbrella", artist: "Rihanna ft. Jay-Z" },
  { title: "Livin' La Vida Loca", artist: "Ricky Martin" },
  { title: "I Will Always Love You", artist: "Whitney Houston" },
  { title: "No Scrubs", artist: "TLC" },
  { title: "Vogue", artist: "Madonna" },
  { title: "Teenage Dream", artist: "Katy Perry" },
  { title: "My Heart Will Go On", artist: "Celine Dion" },
  { title: "Bailamos", artist: "Enrique Iglesias" },
  { title: "Creep", artist: "Radiohead" },
  { title: "I Want It That Way", artist: "Backstreet Boys" },
  { title: "Can't Stop the Feeling!", artist: "Justin Timberlake" },
  { title: "Shake It Off", artist: "Taylor Swift" },
  { title: "A Thousand Miles", artist: "Vanessa Carlton" },
  { title: "Bleeding Love", artist: "Leona Lewis" },
  { title: "Mr. Brightside", artist: "The Killers" },
  { title: "Let Me Love You", artist: "Mario" },
  { title: "Girls Just Want to Have Fun", artist: "Cyndi Lauper" },
  { title: "All Star", artist: "Smash Mouth" },
  { title: "Take a Bow", artist: "Rihanna" },
  { title: "I Don't Want to Miss a Thing", artist: "Aerosmith" },
  { title: "Bohemian Rhapsody", artist: "Queen" },
  { title: "Waiting for Tonight", artist: "Jennifer Lopez" },
  { title: "Irreplaceable", artist: "Beyoncé" },
  { title: "The Sign", artist: "Ace of Base" },
  { title: "Man! I Feel Like a Woman", artist: "Shania Twain" },
  { title: "Single Ladies (Put a Ring on It)", artist: "Beyoncé" },
  { title: "Wonderwall", artist: "Oasis" },
  { title: "No One", artist: "Alicia Keys" },
  { title: "Back to December", artist: "Taylor Swift" },
  { title: "Let It Go", artist: "Idina Menzel (from *Frozen*)" },
  { title: "Call on Me", artist: "Eric Prydz" },
  { title: "Savage Love", artist: "Jawsh 685 x Jason Derulo" },
  { title: "Levitating", artist: "Dua Lipa" },
  { title: "New Rules", artist: "Dua Lipa" },
  { title: "Truth Hurts", artist: "Lizzo" },
  { title: "Blowin' in the Wind", artist: "Bob Dylan" },
  { title: "Take Me to Church", artist: "Hozier" },
  { title: "Fight Song", artist: "Rachel Platten" },
  { title: "Chandelier", artist: "Sia" },
  { title: "Old Town Road", artist: "Lil Nas X" },
  { title: "Royals", artist: "Lorde" },
  { title: "Don't Start Now", artist: "Dua Lipa" },
  { title: "Good 4 U", artist: "Olivia Rodrigo" },
  { title: "Shallow", artist: "Lady Gaga & Bradley Cooper" },
  { title: "We Belong Together", artist: "Mariah Carey" },
  { title: "I'm Your Angel", artist: "R. Kelly & Celine Dion" },
  { title: "Fighter", artist: "Christina Aguilera" },
  { title: "One Kiss", artist: "Calvin Harris & Dua Lipa" },
  { title: "Stay", artist: "The Kid LAROI & Justin Bieber" },
  { title: "Dancing Queen", artist: "ABBA" },
  { title: "If I Ain't Got You", artist: "Alicia Keys" },
  { title: "I Want You Back", artist: "*NSYNC" },
  { title: "All of Me", artist: "John Legend" },
  { title: "Livin' on a Prayer", artist: "Bon Jovi" },
  { title: "Tearin' Up My Heart", artist: "*NSYNC" },
  { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" },
  { title: "Mambo No. 5", artist: "Lou Bega" },
  { title: "I Gotta Feeling", artist: "The Black Eyed Peas" },
  { title: "Torn", artist: "Natalie Imbruglia" },
  { title: "Kiss Me", artist: "Sixpence None the Richer" },
  { title: "Bad Romance", artist: "Lady Gaga" },
  { title: "Jolene", artist: "Dolly Parton" },
  { title: "Run the World (Girls)", artist: "Beyoncé" },
  { title: "Take It Easy", artist: "Eagles" },
  { title: "Boys Don't Cry", artist: "The Cure" },
  { title: "Sugar", artist: "Maroon 5" },
  { title: "Hips Don't Lie", artist: "Shakira ft. Wyclef Jean" },
  { title: "Let's Get It Started", artist: "The Black Eyed Peas" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
  },
  { title: "Wrecking Ball", artist: "Miley Cyrus" },
  { title: "Tik Tok", artist: "Kesha" },
  { title: "Radioactive", artist: "Imagine Dragons" },
  { title: "Criminal", artist: "Fiona Apple" },
  { title: "Dilemma", artist: "Nelly ft. Kelly Rowland" },
  { title: "Bleeding Love", artist: "Leona Lewis" },
  { title: "Crazy in Love", artist: "Beyoncé ft. Jay-Z" },
  { title: "Killing Me Softly with His Song", artist: "The Fugees" },
  { title: "Royals", artist: "Lorde" },
  { title: "Sweet Caroline", artist: "Neil Diamond" },
  { title: "Don't Let Me Down", artist: "The Chainsmokers ft. Daya" },
  { title: "Good as Hell", artist: "Lizzo" },
  { title: "Pompeii", artist: "Bastille" },
  { title: "How Will I Know", artist: "Whitney Houston" },
  { title: "Wake Me Up Before You Go-Go", artist: "Wham!" },
  { title: "Teenage Dirtbag", artist: "Wheatus" },
  { title: "I Believe I Can Fly", artist: "R. Kelly" },
  { title: "SexyBack", artist: "Justin Timberlake" },
  { title: "All the Small Things", artist: "Blink-182" },
  { title: "Shake It", artist: "Metro Station" },
  { title: "Bleeding Love", artist: "Leona Lewis" },
  { title: "Shout", artist: "The Isley Brothers" },
  {
    title: "Lady Marmalade",
    artist: "Christina Aguilera, Lil' Kim, Mýa & Pink",
  },
  { title: "Don't Speak", artist: "No Doubt" },
  { title: "I’m a Believer", artist: "The Monkees" },
  { title: "Can't Feel My Face", artist: "The Weeknd" },
  { title: "Rude", artist: "MAGIC!" },
  { title: "La La La", artist: "Naughty Boy ft. Sam Smith" },
  { title: "It's My Life", artist: "Bon Jovi" },
  { title: "The Way You Make Me Feel", artist: "Michael Jackson" },
  { title: "Hot Stuff", artist: "Donna Summer" },
  { title: "Funky Town", artist: "Lipps Inc." },
  { title: "With or Without You", artist: "U2" },
  { title: "Hard to Handle", artist: "The Black Crowes" },
];

const playlistElement = document.querySelector(".playlist");

const addSongBtn = document.getElementById("add-song-btn");

const songInput = document.getElementById("new-song");

const totalSongsText = document.querySelector(".total");

const showListBtn = document.querySelector(".show-list");

const moodInput = document.getElementById("mood-input");

const shuffleBtn = document.getElementById("shuffle-btn");

const form = document.getElementById("add-song-form");

const moodForm = document.getElementById("mood-form");

const artistInput = document.getElementById("artist-input");

let playlist = [...epicPlaylist];

// A song event listener/
addSongBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const newSongTitle = songInput.value.trim();
  const artist = artistInput.value.trim();
  //const artist "Unknown Artist";

  if (!newSongTitle || !artist) {
    alert("Please enter both a song title and artist.");
    return;
  }
  const songExists = epicPlaylist.some(
    (song) =>
      song.title.toLowerCase() === newSongTitle.toLowerCase() &&
      song.artist.toLowerCase() === artist.toLowerCase()
  );

  if (songExists) {
    alert("This song is already in the Vibes playlist.");
    songInput.value = ""; // Optionally clear the input field if the song exists
    artistInput.value = "";
    return; // Exit without adding the song
  }
  epicPlaylist.push({ title: newSongTitle, artist: artist });
  alert("This song is now in the vibes playlist"); // Add new song to the playlist
  songInput.value = ""; // Clear input field after a song is placed
  //so it playlist should skip if song already exists
  updatePlaylist();
  updateSongCount();
  console.log("Added New Song:", { title: newSongTitle, artist: artist });
});

// Show/hide playlist
showListBtn.addEventListener("click", function () {
  playlistElement.classList.toggle("hide");
  if (playlistElement.classList.contains("hide")) {
    showListBtn.textContent = "Show Playlist";
  } else {
    showListBtn.textContent = "Hide Playlist";
  }
});

// Shuffle playlist based on mood
moodForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const mood = moodInput.value.trim().toLowerCase();
  console.log(`Mood input: ${mood}`);
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
        playlist.sort((a, b) => a.localeCompare(b)); // This can sort the moods alphabetically
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
    alert("The Vibes are off! Please try again.");
  }
});

// Remove song from the playlist
function removeSong(index) {
  epicPlaylist.splice(index, 1); // Remove song at index
  updatePlaylist();
  updateSongCount();
  console.log(`Removed song:${index}`);
}

// Shuffle the playlist (randomize order or prioritize based on mood)
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
    alert("Shuffling Vibes Vibes are off. Please try again.");
  }
}

//can help with song counter, a song counter if you will
function updateSongCount() {
  totalSongsText.innerText = `${playlist.length} great songs!`;
}

// Update the displayed playlist
function updatePlaylist() {
  playlistElement.innerHTML = ""; // Clear current list
  epicPlaylist.forEach((song, index) => {
    const songItem = document.createElement("li");
    songItem.classList.add("song");
    songItem.textContent = `${song.title} - ${song.artist}`;

    // Adds Remove Button, Helps clean up a bit
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", function () {
      removeSong(index);
    });

    songItem.appendChild(removeBtn);
    playlistElement.appendChild(songItem);
  });
}

function removeSong(index) {
  epicPlaylist.splice(index, 1);
  updatePlaylist();
  updateSongCount();
  console.log(`Removed song:${index}`);
}

function updateSongCount() {
  totalSongsText.textContent = `Total Songs: ${epicPlaylist.length}`;
}

// Initialize playlist
updatePlaylist();
updateSongCount();

// Validating forms
