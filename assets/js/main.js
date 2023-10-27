// bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})


// // insert text for about page from .txt file
// const container = document.getElementById("aboutContent");

// function getText() {
//     var myRequest = new Request("../assets/text/about_text.txt");
//     fetch(myRequest)
//         .then((response) => response.text())
//         .then((text) => {
//             container.innerHTML = text;
//         });
// }

// getText();
