const Validation = (values) => {
    console.log('from validation', values);
    const errors = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: '',
    };

    if (!values.email) {
        errors.email = 'Enter an email address';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Enter a password';
    } else if (values.password.length < 6) {
        errors.password = 'Password ';
        errors.password = 'Password needs to be 6 characters or more';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Password does not match';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = '  password does not match';
    }

    if (!values.firstName) {
        errors.firstName = 'Enter first name';
    } else if (values.firstName.length < 4) {
        errors.firstName = '  FirstName need to be 4 characters long';
    }

    if (!values.lastName) {
        errors.lastName = 'Enter last name';
    } else if (values.lastName.length < 4) {
        errors.lastName = '   LastName need to be 4 caharacter long';
    }

    return errors;
};
export default Validation;
