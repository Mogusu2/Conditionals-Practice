# Conditionals-Practice

# Practice Conditionals And Template Strings
# JavaScript Conditionals Practice Exercises
Beginner Exercise: Age-Restricted Access
Scenario:
You are building a website that restricts certain content based on the user's age. You need to check if the user is eligible to access specific content.
Task:
Write a function that takes in an age.
If the age is greater than or equal to 18 and less than 65, the user can access the content and return "Access granted".
If the user is under 18, return "Access denied. You are too young.".
If the user is over 65, return "Access denied. You are too old.".
If the age is not provided or is null, return "Invalid age".


# Medium Exercise: Flight Booking Eligibility
Scenario:
You are developing a flight booking system. The system needs to check if the user is eligible to book a flight based on a combination of age, passport, and flight availability.
Task:
Write a function that takes in age, hasPassport (boolean), and isFlightAvailable (boolean).
To be eligible to book:
The age must be greater than or equal to 18 and less than or equal to 70.
The user must have a valid passport (hasPassport should be true).
There must be available flights (isFlightAvailable should be true).
Return "Booking successful" if all conditions are met, otherwise return "Booking failed".


# Hard Exercise: Job Application Eligibility
Scenario:
You are developing a job application form for a tech company. The system needs to evaluate if the applicant is eligible for a senior developer position based on age, experience, and coding skill.
Task:
Write a function that takes in age, yearsExperience, and knowsJavaScript (boolean).
The user is eligible if:
Their age is greater than 25 but less than 50.
They have more than 5 years of experience or are younger than 30 with at least 3 years of experience.
They must know JavaScript (knowsJavaScript must be true).
Return "Eligible for the job" if all conditions are met, otherwise return "Not eligible".


# Template Strings Practice
# Template String Exercise 1: Welcome Message
Scenario:
Create a function that takes in a user's firstName and lastName. Use template strings to return a greeting message in the format:"Hello, <firstName> <lastName>! Welcome to our website."
Task:
Write a function that takes in firstName and lastName.
Use a template string to return a welcome message.


# Template String Exercise 2: Product Details
Scenario:
You are building an online store. You need to show product details with dynamic values such as the productName, price, and availability.
Task:
Write a function that takes in productName, price, and isAvailable (boolean).
Return a message using a template string in the format:"The <productName> costs $<price>. It is <available/not available>."
JS
