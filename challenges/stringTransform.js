function stringTransform(string) {
    let result = string.replace(/\s+/g,'');
    const length = string.length;
    
    if (length % 3 === 0) {
        result = result.split('').reverse().join(''); // Reverse the entire string
    }
    
    if (length % 5 === 0) {
        result = result.split('').map(c => c.charCodeAt(0)).join(' '); // Replace each character with its ASCII code
    }
    
    return result;
}

// Test cases
const inputs = ["Hamburger", "Pizza", "Chocolate Chip Cookie"];
inputs.forEach(input => {
    const output = stringTransform(input);
    console.log(`Input: "${input}"`);
    console.log(`Output: "${output}"`);
    console.log();
});