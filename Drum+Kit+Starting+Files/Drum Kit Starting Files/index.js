var numberofDrumButtons = document.querySelector(".drum").length;
for (let i = 0; i < numberofDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
       alert("I got clicked!");
    })
    };
    