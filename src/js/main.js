const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const navItems = document.querySelectorAll('.nav-mobile__link');
const navBars = document.querySelector('.hamburger-inner');
const allSections = document.querySelectorAll('.section');
const footeryear = document.querySelector('.year');

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav-mobile--active');

	navItems.forEach((item) => {
		item.addEventListener('click', () => {
			navBtn.classList.remove('is-active');
			navMobile.classList.remove('nav-mobile--active');
		});
	});
};
navBtn.addEventListener('click', handleNav);

const filled = document.querySelector('.filled');

function update() {
	filled.style.width = `${
		(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
	}%`;
	requestAnimationFrame(update);
}

// update();
// AOS.init({ disable: 'mobile' });

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footeryear.innerText = year;
};

update();

handleCurrentYear();

