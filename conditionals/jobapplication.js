function checkJobEligibility(age, yearsExperience, knowsJavaScript) {
    if (
        age > 25 && age < 50 &&
        (yearsExperience > 5 || (age < 30 && yearsExperience >= 3)) &&
        knowsJavaScript
    ) {
        return "Eligible for the job";
    } else {
        return "Not eligible";
    }
}

checkJobEligibility(45, 6, true);