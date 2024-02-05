function sendMail(form) {
    var formData = {
      "name": form.name.value,
      "email": form.email.value,
      "subject": form.email.value,
      "query": form.query.value,
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