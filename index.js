(function() {
    var box = document.getElementById("box");
    var boxLeft = box.offsetLeft;
    var links = document.getElementsByTagName("a");
    var reqId;

    function move() {
        boxLeft -= 3;

        if (boxLeft <= -links[0].offsetWidth) {
            boxLeft += links[0].offsetWidth;
            box.appendChild(links[0]); // decrements the number that had been passed to the function
            box.style.left = boxLeft + "px";
            // console.log("hey");
        }
        box.style.left = boxLeft + "px";
        reqId = requestAnimationFrame(move); //function that you pass a function, runs it over and over without an infite loop
    }
    box.addEventListener("mouseover", function() {
        cancelAnimationFrame(reqId);
    });
    box.addEventListener("mouseleave", function() {
        move();
    });
    move();
})();

//cancelAnimationFrame();
//conditional statmemnt that works with the offsetLeft
// Getting the Text to move by manipulating the DOM

// right a function that decrements the left value by 1px each time the function runs
// offsetLeft provided distance of left side of box to body margin
// offsetWidth gives width of the box that is moving
