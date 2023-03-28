const form = document.querySelector('#equation-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const coefficients = document.querySelector('#equation-input').value;
    const coeffArr = coefficients.split(',');

    let a = coeffArr[0];
    let b = coeffArr[1];
    let c = coeffArr[2];

    let delta = b*b - 4*a*c;

    if (delta > 0) {
        let x1 = undefined;
        let x2 = undefined;

        x1 = (-b + Math.sqrt(b*b - 4*a*c))/(2*a);
        x2 = (-b - Math.sqrt(b*b - 4*a*c))/(2*a);

        console.log(`The only real values for the equation ${a}x^2 + ${b}x + ${c} = 0 are:`);
        console.log(`x1 = ${x1}`);
        console.log(`x2 = ${x2}`);
    }
    else if (delta == 0) {
        let x1 = undefined;
        let x2 = undefined;
        
        console.log(`The only real value for the equation ${a}x^2 + ${b}x + ${c} = 0 is:`);
        console.log(`x1 = x2 = ${x1}`);
    }
    else if (delta < 0) {
        console.log(`No real values for the equation ${a}x^2 + ${b}x + ${c} = 0`);
    }
});
