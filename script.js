// ===========================================
// SIMPLE MUSIC COLLECTION - ARRAYS LAB
// ===========================================
// Complete each step to practice JavaScript arrays!

// ===========================================
// STEP 1: ARRAY DECLARATION
// ===========================================

// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
let mySongs = [
    // Add your favorite song titles here as strings
    // Example: "Song Title"
    "Kickstart My Heart",
    "Rock and Stone",
    "Fratricide",
    "Living in a Nightmare",
    "Tough Kids",
];

let myArtists = [
    // Add artist names here as strings
    // Example: "Artist Name"
    "Motley Crue",
    "Wind Rose",
    "Ivycomb",
    "Blacklite District",
    "Coyote Kid",
];

let genres = [
    // Add music genres here as strings
    // Example: "Rock", "Pop", "Jazz"
    "Rock",
    "Metal",
    "Alt-pop",
];

let favorites = [
    // This should start empty - you'll add to it later!
];

// ===========================================
// STEP 2: ARRAY ACCESS
// ===========================================

function displaySelectedSongs() {
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements
    let firstSong = mySongs[0];

    let lastSong = mySongs[mySongs.length-1];

    let middleSong = mySongs[Math.floor(mySongs.length/2)]

    // DOM operations handled for you - focus on the array logic above
    document.getElementById('first-song').textContent = firstSong;
    document.getElementById('last-song').textContent = lastSong;
    document.getElementById('middle-song').textContent = middleSong;

    showMessage("Displayed first, middle, and last songs!");
}

// ===========================================
// STEP 3: ARRAY PROPERTIES
// ===========================================

function showMusicStats() {
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
    let songCount = mySongs.length;

    let artistCount = myArtists.length;

    let genreCount = genres.length;

    let favoritesCount = favorites.length;

    // Check if arrays are properly filled
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array");
        return;
    }
    if (myArtists.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add artists to myArtists array");
        return;
    }
    if (genres.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add genres to genres array");
        return;
    }

    // DOM operations handled for you - focus on the array logic above
    document.getElementById('song-count').textContent = songCount;
    document.getElementById('artist-count').textContent = artistCount;
    document.getElementById('genre-count').textContent = genreCount;
    document.getElementById('favorites-count').textContent = favoritesCount;

    showMessage("✅ Updated collection statistics!");
}

// ===========================================
// STEP 4: ARRAY METHODS - ADDING ITEMS
// ===========================================

function addSongToEnd() {
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

    mySongs.push("New Song")

    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    // DOM operations handled for you - focus on the array logic above
    updateDisplays();
    showMessage("✅ Added 'New Song' to the end using .push()! New length: " + mySongs.length);
}

// TODO: Complete this function to add a song to the beginning
function addSongToBeginning() {
    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    mySongs.unshift("First Song");

    // DOM operations handled for you - focus on the array logic above
    updateDisplays();
    showMessage("✅ Added 'First Song' to the beginning using .unshift()! New length: " + mySongs.length);
}

function addRandomToFavorites() {
    // Check if mySongs has any songs first
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    let randomIndex = Math.floor(Math.random() * mySongs.length); // Math.random() * song length, since math.random() is 0-1, and multiplying by song length would make it 0-songlength.
    let randomSong = mySongs[randomIndex]; // Could theoretically be done in one line, but readability would suffer.

    favorites.push(randomSong);

    // DOM operations handled for you - focus on the array logic above
    updateDisplays();
    showMessage("✅ Added '" + randomSong + "' to favorites!");
}

// ===========================================
// STEP 5: ARRAY METHODS - REMOVING ITEMS
// ===========================================

function removeLastSong() {
    // Check if array has songs before removing
    if (mySongs.length === 0) {
        showMessage("❌ No songs to remove! Add songs first in Step 1.");
        return;
    }

    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
    let removedSong = mySongs.pop();

    // DOM operations handled for you - focus on the array logic above
    updateDisplays();
    showMessage("✅ Removed '" + removedSong + "' from the end using .pop()!");
}

function removeFirstSong() {
    // Check if array has songs before removing
    if (mySongs.length === 0) {
        showMessage("❌ No songs to remove! Add songs first in Step 1.");
        return;
    }

    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
    let removedSong = mySongs.shift();

    // DOM operations handled for you - focus on the array logic above
    updateDisplays();
    showMessage("✅ Removed '" + removedSong + "' from the beginning using .shift()!");
}

// ===========================================
// STEP 6: ARRAY ITERATION
// ===========================================

// This function has been removed - focusing on array methods only

function displayAllSongsForEach() {
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    let songsHTML = "<h3>All Songs (using .forEach):</h3>";

    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    mySongs.forEach(function(song, index) {songsHTML += "<div class='song-item'>" + (index+1) + '. ' + song + "</div>"});

    // DOM operations handled for you - focus on the array logic above
    document.getElementById('all-songs').innerHTML = songsHTML;

    showMessage("✅ Displayed all songs using .forEach()!");
}

function createFormattedSongList() {
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }


    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    let formattedSongs = mySongs.map(function(song, index) {return (index+1) + ". " + song + " ~♩♪"}); // Your code here - use mySongs.map(function(song, index) { ... })
    console.log(formattedSongs)

    let songsHTML = "<h3>Formatted Songs (using .map):</h3>";
    formattedSongs.forEach(function(formattedSong) {songsHTML += "<div class='song-item'>" + formattedSong + "</div>"});
    
    // DOM operations handled for you - focus on the array logic above
    document.getElementById('all-songs').innerHTML = songsHTML;

    showMessage("✅ Created formatted song list using .map() and displayed with .forEach()!");
}

// ===========================================
// STEP 7: ARRAY SEARCHING
// ===========================================

function searchForSong() {
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    // Get the search term from the input field (DOM handled for you)
    let searchTerm = document.getElementById('search-input').value;

    if (!searchTerm.trim()) {
        showMessage("❌ Please enter a song title to search for");
        return;
    }

    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    let position = mySongs.indexOf(searchTerm)

    // HINT: indexOf returns -1 if not found, or the index if found
    if (position >= 0) {
        showMessage("✅ Found '" + searchTerm + "' at position " + (position + 1) + " using .indexOf()!");
    } else {
        showMessage("❌ Song '" + searchTerm + "' not found using .indexOf()!");
    }
}

function checkIfSongExists() {
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    // Get the search term from the input field (DOM handled for you)
    let searchTerm = document.getElementById('search-input').value;

    if (!searchTerm.trim()) {
        showMessage("❌ Please enter a song title to search for");
        return;
    }

    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    let exists = mySongs.includes(searchTerm)// Your code here - use mySongs.includes(searchTerm)

    if (exists) {
        showMessage("✅ Song '" + searchTerm + "' exists in your collection using .includes()!");
    } else {
        showMessage("❌ Song '" + searchTerm + "' does not exist using .includes()!");
    }
}

// ===========================================
// STEP 8: ARRAY DESTRUCTURING
// ===========================================

function getTopThreeSongs() {
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    // Check if we have at least 3 songs
    if (mySongs.length < 3) {
        showMessage("❌ Need at least 3 songs for this operation!");
        return;
    }

    // MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring
    let [first, second, third] = mySongs;

    showMessage("✅ Top 3 songs using destructuring: 1) " + first + " 2) " + second + " 3) " + third);
}

// TODO: Complete this function to separate first song from rest
function separateFirstSong() {
    if (mySongs.length === 0) {
        showMessage("❌ Step 1 incomplete: Please add songs to mySongs array first");
        return;
    }

    let [first, ...others] = mySongs;

    showMessage("✅ First song: '" + first + "', Other songs: " + others.length + " using destructuring!");
}

// ===========================================
// HELPER FUNCTIONS (PROVIDED FOR YOU)
// ===========================================

// Function to show messages to the user
function showMessage(text) {
    let messagesDiv = document.getElementById('messages');
    let currentTime = new Date().toLocaleTimeString();
    messagesDiv.innerHTML += '<p><strong>' + currentTime + ':</strong> ' + text + '</p>';
    
    // Scroll to show latest message
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Function to clear all messages
function clearMessages() {
    document.getElementById('messages').innerHTML = '<p>Messages cleared!</p>';
}

// Function to update all displays at once
function updateDisplays() {
    displaySelectedSongs();
    showMusicStats();
    // Note: We don't auto-update the full song list because user chooses for loop vs forEach
}

// ===========================================
// TESTING YOUR CODE
// ===========================================
// Uncomment these lines one by one to test your functions:

// Test array creation
console.log("My Songs:", mySongs);
console.log("My Artists:", myArtists);
console.log("Genres:", genres);
console.log("Favorites:", favorites);

// ===========================================
// WHAT TO DO NEXT
// ===========================================
/*
1. Open index.html in your web browser
2. Open the browser console (F12) to see your console.log messages
3. Click the buttons to test each function
4. Complete any TODO items that aren't working
5. Try adding your own favorite songs to the arrays
6. Experiment with the functions to understand how arrays work

REMEMBER:
- Arrays start counting at 0, not 1
- Use .length to get the size of an array
- Check if array is empty before removing items
- .push() adds to end, .unshift() adds to beginning
- .pop() removes from end, .shift() removes from beginning
- .indexOf() returns -1 if item not found
- .includes() returns true/false

BONUS CHALLENGES:
- Add more songs to your collection
- Create a function to remove a specific song by name
- Create a function to sort your songs alphabetically
- Add a way for users to input their own songs
*/