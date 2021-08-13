var simpleInterest = document.querySelector('.simple-interest');
const button = document.querySelector('.button');
//const loading = document.querySelector('.loader');
const results = document.querySelector('.results');

function calculateResults(e) {
	// ui elements
	const principal = document.querySelector('#principal');
	const rate = document.querySelector('#rate');
	const time = document.querySelector('#time');
	const monthlyPayment = document.querySelector('#payment');
	const totalInterest = document.querySelector('#interest');
	const totalAmount = document.querySelector('#total');
	// formula variables
	const p = parseFloat(principal.value);
	const r = parseFloat(rate.value);
	const t = parseFloat(time.value);
	
	// calculate total interest
	const interest = (p*t*r/100);
	// calculate monthly payment
	const payment = ((interest + p) / (t * 12)).toFixed(2);
	// calculate total amount paid
	const total = (interest + p).toFixed(2);
	
	if (isFinite(payment)) {
		totalInterest.innerHTML = '₹' + (interest).toFixed(2);
		monthlyPayment.innerHTML = '₹' + payment;
		totalAmount.innerHTML = '₹' + total;
		// hide loader
		button.classList.remove('loading');
		// show results
		results.classList.remove('hide');

		var anUndefinedVariable;
		const aNullElement=null;
		const aString='0';
		const aNumber=0;
		//send data to server
		const dataToSendServer={
			principleAmount:p
		};
		//dataToSendServer['principleAmount']=p;
		dataToSendServer['rateOfInterest']=r;
		dataToSendServer['time']=t;
		dataToSendServer['totalInterest']=(interest).toFixed(2);
		dataToSendServer['monthlyPayment']=payment;
		dataToSendServer['totalAmountToPay']=total;

		//string to number
		const numberFromString=Number(aString);//|| parseFloat(aString);
		console.log(numberFromString)
		console.log(`number to string--->${String(numberFromString)}`);
		console.log(`number to boolean--->${Boolean(numberFromString)}`);

		console.log('string')
		console.log(aString)
		console.log(typeof aString)

		console.log('number')
		console.log(aNumber)
		console.log(typeof aNumber)

		console.log('null')
		console.log(aNullElement)
		console.log(typeof aNullElement)

		console.log('undefined')
		console.log(anUndefinedVariable)
		console.log(typeof anUndefinedVariable)

		console.log('object')
		console.log(dataToSendServer);
		console.log(typeof dataToSendServer)

		console.log('Array')
		const anArrayVar=[]
		console.log(anArrayVar)
		console.log(typeof anArrayVar);

		console.log('MAP')
		const aMapVar=new Map();
		console.log(aMapVar)
		console.log(typeof aMapVar);

		console.log('SET')
		const aSetDataType=new Set();
		console.log(aSetDataType)
		console.log(typeof aSetDataType);


	} else {
		// show error
		showError('Please check your numbers and try again.');
		// hide loader
		button.classList.remove('loading');
	}
}

function showError(error) {
	// create error
	const errorMessage = document.createElement('div');
	const calculate = document.querySelector('#calculate');

	errorMessage.className = 'error';
	errorMessage.appendChild(document.createTextNode(error));
	simpleInterest.insertBefore(errorMessage, calculate);
	// clear error
	setTimeout(clearError, 3000);
}

function clearError() {
	// remove error
	document.querySelector('.error').remove();
}

button.addEventListener('click', (e) => {
	console.log('Calculating...');
	// show loader
	button.classList.add('loading');
	
	// set timeout
	setTimeout(calculateResults, 2000);
	
	// prevent page from reloading on submit
	e.preventDefault();
});

