const formEl = document.querySelector('.login-form');

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заполните все поля!");
  }
    
    const user = {
        [email.name]: email.value,
        [password.name]: password.value
    }
    
    console.log(user);
  event.currentTarget.reset();
}


