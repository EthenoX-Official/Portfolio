function sendEmail() {

const templateParams = {

name: document.querySelector("#name").value,

email: document.querySelector("#email").value,

subject: document.querySelector("#subject").value,

message: document.querySelector("#message").value,

};

emailjs

.send("service_aujbxln", "template_mg97won", templateParams)

.then(() => {

alert("Email sent successfully!");

})

.catch((error) => {

console.log("Error sending email:", error);

alert("Failed to send email. Please try again.");

});

}
