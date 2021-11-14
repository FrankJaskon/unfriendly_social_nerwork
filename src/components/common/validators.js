export function validateTextFieldCreator(maxLength) {
    return (value) => {
        let error;
        if (value === '') {
          error = 'This field cannot be empty. Please, try better.';
        } else if (value.length > maxLength) {
            error = `It's too much symbols. Max length is ${maxLength}`;
        }
        return error;
    }
}