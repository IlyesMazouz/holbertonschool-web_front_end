function countPrimeNumbers() {
    // Function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Count prime numbers from 2 to 100
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}

// Measure the time needed to execute the function
const t0 = performance.now();
const primeCount = countPrimeNumbers();
const t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
console.log(`Number of prime numbers between 2 and 100: ${primeCount}`);
