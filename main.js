const form = document.forms.form;
const requiredFields = document.querySelectorAll('.required .input-field'); // Все выделенные поля с классом required
const users = [];

form.onsubmit = (e) => {
    e.preventDefault();
    const user = {};

    
    requiredFields.forEach((input) => {
        user[input.name] = input.value.trim();
    });

    users.push(user); 
    console.log(users); 
};
