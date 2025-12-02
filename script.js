function sendEmail() {

const templateParams = {

name: document.querySelector("#name").value,

email: document.querySelector("#email").value,

subject: document.querySelector("#subject").value,

message: document.querySelector("#message").value,

};

emailjs

.send("service_r19cjer", "template_r1da2jj", templateParams)

.then(() => {

alert("Email sent successfully!");

})

.catch((error) => {

console.log("Error sending email:", error);

alert("Failed to send email. Please try again.");

});

}
