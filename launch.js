function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
      document.head.append(script);
    });
  }
loadScript("https://bunrum.github.io/RuffleForGoogleSites/ruffle.js")
    .then(function(script) {
        window.RufflePlayer = window.RufflePlayer || {};
        window.addEventListener("load", (event) => {
            const ruffle = window.RufflePlayer.newest();
            const player = ruffle.createPlayer();
            const container = document.getElementById("container");
            container.appendChild(player);
            player.Config = {
                "backgroundColor": "#000000",
                "contextMenu": true,
                "autoplay": "auto",
                "letterbox": "on",
                "unmuteOverlay": "visible",
            };
            player.load(swf);
            player.style.width = 512;
            player.style.height = 512;
            player.style.position = "absolute";
            player.style.display = "contents";
        });
    })        
