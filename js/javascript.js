
console.log("Good job opening the window");

window.addEventListener("load", function() {
    console.log("Good job opening the function");

    let text;

    const d = new Date();
    let hour = d.getHours();

    if (hour > 5 && hour < 12) {
        text = "Good Morning, I'm Nate!";
    }
    else if (hour > 12 && hour < 17) {
        text = "Good Afternoon, I'm Nate!";
    }
    else {
        text = "Good Evening, I'm Nate!";
    }

    document.getElementById('javascript_element').innerHTML = text;

});
