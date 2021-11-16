export function validateTextFieldCreator(maxLength) {
    return (value) => {
        let error;
        if (!value || value === '' || value.length === 0) {
          error = 'This field cannot be empty. Please, try better.';
        } else if (value.length > maxLength) {
            error = `It's too much symbols. Max length is ${maxLength}`;
        }
        return error;
    }
}