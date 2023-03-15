// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

const fahrenheitToCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32.0) * 5.0 / 9.0;

    console.log(`Celsius Temperature: ${celsius}`);
}

fahrenheitToCelsius(68);