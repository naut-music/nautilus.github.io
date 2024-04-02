var playlist = WaveformPlaylist.init({
  samplesPerPixel: 1000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  timescale: true,
  state: "cursor",
  colors: {
    waveOutlineColor: "#005BBB",
  },
  controls: {
    show: true, //whether or not to include the track controls
    width: 200, //width of controls in pixels
  },
  zoomLevels: [500, 1000, 3000, 5000],
});

function getAllFilesFromFolder(){
  var walk    = require('walk');
  var files   = [];

  // Walker options
  var walker  = walk.walk("/Users/alexw/Music", { followLinks: false });

  walker.on('file', function(root, stat, next) {
      // Add this file to the list of files
      files.push(root + '/' + stat.name);
      next();
  });

  walker.on('end', function() {
      console.log(files);
  });
}

var files = getAllFilesFromFolder();

playlist
  .load([
    {
      src: "media/audio/Vocals30.mp3",
      name: "Vocals",
    },
    {
      src: "media/audio/Guitar30.mp3",
      name: "Guitar",
    },
    {
      src: "media/audio/PianoSynth30.mp3",
      name: "Pianos & Synth",
    },
    {
      src: "media/audio/BassDrums30.mp3",
      name: "Drums",
    },
  ])
  .then(function () {
    //can do stuff with the playlist.
  });
