// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  //  first check if value empty delete the property
  if (!value) {
    delete collection[id][prop];
    // different handling according to the existence or not of property tracks
  } else if (prop !== "tracks") {
      collection[id][prop] = value;
  } else if (prop === "tracks") {
    // has already tracks, push
    if (collection[id].tracks)
      {
        collection[id][prop].push(value)
        // hasn't tracks. create an array and push
      } else {
        collection[id][prop] = [];
        collection[id][prop].push(value);
      }
  }
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
