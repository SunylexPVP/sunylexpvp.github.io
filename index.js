document.title = (title);
        let styleOptions = document.querySelector(':root');
        styleOptions.style.setProperty('--HomeButtonColor', homeButtonColor)
        styleOptions.style.setProperty('--HomeButtonColor2', homeButtonColor2)
        styleOptions.style.setProperty('--HomeButtonColorHover', homeButtonColorHover)
        styleOptions.style.setProperty('--HomeButtonColorHover2', homeButtonColorHover2)
        styleOptions.style.setProperty('--HomeButtonBorderRadius', homeButtonBorderRadius)
        styleOptions.style.setProperty('--HomeButtonBorderRadiusHover', homeButtonBorderRadiusHover)
        function copyIp(){
            navigator.clipboard.writeText(copiedText);
            alert(copiedIpMessage);
        }
        function homeLinkFunction(){
            window.open(homeLink,"_self")
        }
        function aboutLinkFunction(){
            window.open(aboutLink)
        }
        function newsLinkFunction(){
            window.open(newsLink,"_self")
        }
        function logoLinkFunction(){
            window.open(logoLink,"_self")
        }
        function initServerData(serverIp,serverPort){
            fetch('https://mcapi.us/server/status?ip='+serverIp+'&port='+serverPort)
            .then(response => response.json())
            .then(data => handleServerStatus(data));
  
        function handleServerStatus(data){
            if(data.status=='error'){
                console.log(data.error);
                return false;
            }
            const playerCounter = document.getElementById("player-count");
            playerCounter.innerHTML = data.players.now;
            } 
        }
        initServerData(serverIp, serverPort);
        let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.type = 'image/x-icon';
            link.rel = 'shortcut icon';
            link.href = (icon);
            document.getElementsByTagName('head')[0].appendChild(link);
            function darkMode() {
        let darkMode = document.body;
            darkMode.classList.toggle("dark-mode");
        }
        function gototop() {
        var scrollToTop = window.setInterval(function() {
            var pos = window.pageYOffset;
            if ( pos > 0 ) {
                window.scrollTo( 0, pos - 65 ); // how far to scroll on each step
            } else {
                window.clearInterval( scrollToTop );
            }
        }, 70);
        }