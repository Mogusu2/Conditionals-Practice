function showProductDetails(productName, price, isAvailable) {
    const availability = isAvailable ? "available" : "not available";
    return `The ${productName} costs $${price}. It is ${availability}.`;
  }
  
  // Example Usage
  console.log(showProductDetails('Laptop', 90999.99, true));
  // Output: "The Laptop costs Ksh90999.99. It is available."
  
  console.log(showProductDetails('Smartphone', 50999.99, false));
  // Output: "The Smartphone costs Ksh50999.99. It is not available."
  