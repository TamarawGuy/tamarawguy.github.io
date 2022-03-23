const form = document.querySelector(".form");
const modal = document.getElementById("modal");
const modalBtn = document.getElementsByClassName("modalBtn")[0];

form.addEventListener("submit", handleSubmit);

modalBtn.onclick = function () {
  modal.style.display = "none";
};

function handleSubmit(e) {
  e.preventDefault();
  console.log(form);
  let tempParams = {
    fromName: document.getElementById("fromName").value,
    fromEmail: document.getElementById("fromEmail").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("gmail", "template_dz0wfxm", tempParams).then(function (res) {
    console.log("success", res.status);
  });

  document.getElementById("fromName").value = "";
  document.getElementById("fromEmail").value = "";
  document.getElementById("message").value = "";

  modal.style.display = "block";
}
