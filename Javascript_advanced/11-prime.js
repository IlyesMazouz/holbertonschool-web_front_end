function countPrimeNumbers() {
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}

const t0 = performance.now();

function execute100Times(count = 0) {
    if (count < 100) {
        countPrimeNumbers();
        setTimeout(() => execute100Times(count + 1));
    } else {
        const t1 = performance.now();
        console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
    }
}

execute100Times();
