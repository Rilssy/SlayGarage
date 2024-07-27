// $(function () {
// 	let start = 221;
// 	let end = $('.counter').html();
// 	let speed = 100;

// 	setInterval(function () {
// 		if (start < end) {
// 			start++;
// 		}
// 		$('.counter').html(start);
// 	}, speed);
// });

// const counterOne = document.querySelector('.counter');
// let counterNumberOne = 0;

// const updateCounterOne = setInterval(function () {
// 	counterNumberOne++;
// 	counterOne.textContent = counterNumberOne;
// 	if (counterNumberOne >= 47) {
// 		clearInterval(updateCounterOne);
// 	}
// });

// const counterTwo = document.querySelector('.countertwo');
// let counterNumberTwo = 0;

// const updateCounterTwo = setInterval(function () {
// 	counterNumberTwo++;
// 	counterTwo.textContent = counterNumberTwo;
// 	if (counterNumberTwo >= 2602) {
// 		clearInterval(updateCounterTwo);
// 	}
// });

// const counterThree = document.querySelector('.counterthree');
// let counterNumberThree = 0;

// const updateCounterThree = setInterval(function () {
// 	counterNumberThree++;
// 	counterThree.textContent = counterNumberThree;
// 	if (counterNumberThree >= 6) {
// 		clearInterval(updateCounterThree);
// 	}
// });

let valueDisplays = document.querySelectorAll('.counter');
let interval = 2000;
valueDisplays.forEach((valueDisplay) => {
	let startValue = 0;
	let endValue = parseInt(valueDisplay.getAttribute('data-val'));
	let duration = Math.floor(interval / endValue);
	let counter = setInterval(function () {
		startValue += 1;
		valueDisplay.textContent = startValue;
		if (startValue == endValue) {
			clearInterval(counter);
		}
	}, duration);
});
