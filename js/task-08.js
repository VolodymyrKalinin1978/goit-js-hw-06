const formEl = document.querySelector(".login-form");

const onSubmit = (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (!email.value || !password.value) {
    alert("email or password is empty");
    return;
  }

  const userData = {
    email: email.value,
    password: password.value,
  };

  console.log(userData);

  e.currentTarget.reset();
};

formEl.addEventListener("submit", onSubmit);
