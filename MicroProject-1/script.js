const getByid = (id) => document.getElementById(id);

const validEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const buttonClick = () => {
  const emailInput = getByid("email_textarea").value;
  if (validEmail(emailInput)) {
    getByid("content_email_success").style.display = "block";
    getByid("content_email").style.display = "none";
    getByid("free").classList.add("fit-content");
  } else {
    alert("Please enter a valid email.");
  }
};
