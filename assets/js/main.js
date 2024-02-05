// bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})


function sendMail(queryForm) {
    var formData = {
        "name": queryForm.name.value,
        "email": queryForm.email.value,
        "subject": queryForm.email.value,
        "query": queryForm.query.value,
    };

    emailjs.send("service_dgna3zv", "template_jh1yc7f", formData)
  .then(
    function(response) {
      window.location.href = "thanks.html"
      return response;
    },
    function(error) {
      alert("I'm sorry, something went wrong! Please try again");
      return error;
    });
    
  return false;
}
