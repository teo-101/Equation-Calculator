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

        document.getElementById('result1').innerHTML = (`x1 = ${x1}`);
        document.getElementById('result2').innerHTML = (`x2 = ${x2}`);
    }
    else if (delta == 0) {
        let x1 = undefined;
        x1 = (-b + Math.sqrt(b*b - 4*a*c))/(2*a);

        document.getElementById('result1').innerHTML = (`x1 = ${x1}`);
        document.getElementById('result2').innerHTML = (`x2 = x1`);
    }
    else if (delta < 0) {
        document.getElementById('result1').innerHTML = (`&#8709;, &#8704;x&euro;R`);
        document.getElementById('result2').innerHTML = (`&#8709; &#8704;x&euro;R`);
    }
});
