export const formValidation = (email, password) => {
    var pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ ;
    if (!pattern.test(email)) return {
        field:'email', message: "Please enter a valid email address."
    };

    // min 8 letter password, with at least a symbol, upper and lower case letters and a number
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!re.test(password)) return {
        field: 'password', message: "Your password must contain min 8 Characters, with at least a special character and numbers."
    };
    return null;
}