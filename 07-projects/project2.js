const form = document.querySelector('form');
// this use case will give u empty
// const height=parseInt(document.querySeclector('#height).value);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if (height == "" || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}`;
    }
    else if (weight == "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`;
    }
    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        // show the result
        results.innerHTML = `<span>${BMI}</span>`
        if (BMI < 18.6) {
            results.innerHTML += `<p>You are underweight.</p>`;
        }
        else if (BMI > 24.9) {
            results.innerHTML += `<p>You are overweight and your BMI is ${BMI}</p>`;
        }

    }
    
    }


)