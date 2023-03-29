const number = parseInt(prompt("번호를 입력해 주십시오."));

let isPrime;

if (number === 1) {
    document.write(`${number}는(은) 소수도, 합성수도 아닙니다. `);
} else if (number === 2) {
    document.write(`${number}는(은) 소수입니다.`);
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        } else {
            isPrime = true;
        }
    }
    if (isPrime) {
        document.write(`${number} 는(은) 소수입니다.`);
    } else {
        document.write(`${number} 는(은) 소수가 아닙니다.`);
    }
    
}