// Write your JavaScript code here.
// Remember to pay attention to page loading!

// add load event handler to window
window.addEventListener("load", function(){
    // put DOM code here to ensure elements have been loaded
    console.log("window loaded");

    let takeoff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let rocket = this.document.getElementById("rocket");
    let up = this.document.getElementById("up");
    let down = this.document.getElementById("down");
    let left = this.document.getElementById("left");
    let right = this.document.getElementById("right");

    takeoff.addEventListener("click", function(){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(response){           
            flightStatus.innerHTML = "Shuttle in flight.";           
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)+10000;
        }
    });

    
    landing.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        // Reset rocket position
        rocket.style.top = "";
        rocket.style.left = "";
    });


    missionAbort.addEventListener("click", function(){
        let response = window.confirm("Confirm that you want to abort the mission.");
        if(response){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
            // Reset rocket position
            rocket.style.top = "";
            rocket.style.left = "";
        }
    });


    up.addEventListener("click", function(){
        let top = parseInt(window.getComputedStyle(rocket).top, 10);
        console.log("top", top);
        // Only move if rocket is not at the top edge
        if(top>0){
        rocket.style.top = (top - 10) + "px"; // move rocket up by 10px
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)+10000;
        }
    });

    down.addEventListener("click", function(){
        let top = parseInt(window.getComputedStyle(rocket).top, 10);
        console.log("top", top);
        let bgHeight = shuttleBackground.offsetHeight;
        let rocketHeight = rocket.offsetHeight;

        if(top+rocketHeight < bgHeight){
        rocket.style.top = (top + 10) + "px"; //move rocket down by 10px
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)-10000;
        }
    });

    left.addEventListener("click", function(){
        let left = parseInt(window.getComputedStyle(rocket).left, 10);
        console.log("left", left);
        if (left > 0) {
        rocket.style.left = (left - 10) + "px"; //move rocket left by 10px
        }
    });

    right.addEventListener("click", function(){
        let left = parseInt(window.getComputedStyle(rocket).left, 10);
        console.log("left", left);
        let bgWidth = shuttleBackground.offsetWidth;
        let rocketWidth = rocket.offsetWidth;  

        if(left+rocketWidth < bgWidth){
        rocket.style.left = (left + 10) + "px"; //move rocket right by 10px
        }
    });

});