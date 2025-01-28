const Form = document.forms.form;
const Required = document.querySelectorAll('.required .input-field ');
const users = [];

Form.onsubmit = (e) => {
    e.preventDefault();
    const user = {};
    // const fm = new FormData(Form)
    // fm.forEach((key , value) => {
    // user[key] = value
    // })
    Required.forEach((input) => {
        user[input.name] = input.value.trim();
});

users.push(user)
console.log(users);

}