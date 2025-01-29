const Form = document.forms.form;
const Required = document.querySelectorAll('.required .input-field ');
const users = [];

Form.onsubmit = (e) => {
    e.preventDefault();
    const user = {};
    // const fm = new FormData(Form)
    // fm.forEach((key , value) => {
    // user[value] = key
    // })
    Required.forEach((input) => {
        user[input.name] = input.value;

});

users.push(user)
console.log(users);
}
