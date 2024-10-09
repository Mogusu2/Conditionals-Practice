function checkBookingEligibility(age, hasPassport, isFlightAvailable) {
    if (age >= 18 && age <= 70 && hasPassport && isFlightAvailable) {
        return "Booking successful";
    } else {
        return "Booking failed";
    }
}

checkBookingEligibility(67, true, true);
checkBookingEligibility(14,true, true);
checkBookingEligibility(56, false, true);