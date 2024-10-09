function checkAge(age) {
    if (age === null || age === undefined) {
        return "Invalid age";
    } else if (age < 18) {
        return "Access denied. You are too young.";
    } else if (age >= 18 && age < 65) {
        return "Access granted";
    } else if (age >= 65) {
        return "Access denied. You are too old.";
    }
}

checkAge(76);