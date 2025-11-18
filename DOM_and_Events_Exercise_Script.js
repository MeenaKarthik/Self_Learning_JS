function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.

    function changeParagraphText(){
        paragraph.innerHTML = "Houston, we have liftoff!";
    }

    function confirmAbort(){
        let response = window.confirm("Are you sure you want to abort the mission?");
        if(response){
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
        }
    }

    button.addEventListener("click", changeParagraphText);
    missionAbort.addEventListener("mouseover", function(event){
        console.log(event.target);
        event.target.style.backgroundColor = "red";
    });
    missionAbort.addEventListener("mouseout", function(event){
        event.target.style.backgroundColor = "";
    });
    missionAbort.addEventListener("click", confirmAbort);
}

window.addEventListener("load", init);