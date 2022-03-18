window.addEventListener("DOMContentLoaded", start);

function start() {
	//* MENU
	const workLink = document.querySelector(".work");
	const aboutLink = document.querySelector(".about");
	const contactLink = document.querySelector(".contact");
	const section_one = document.querySelector("#about");
	const section_two = document.querySelector("#project_one");
	const section_three = document.querySelector("#contact");
	const scrollContainer = document.querySelector("main");

	if (window.clientWidth > 600) {
		workLink.addEventListener("click", () => {
			scrollContainer.scrollTo({ left: 0, top: section_two.offsetTop, behavior: "smooth" });
		});
		aboutLink.addEventListener("click", () => {
			scrollContainer.scrollTo({ left: 0, top: section_one.offsetTop, behavior: "smooth" });
		});
		contactLink.addEventListener("click", () => {
			scrollContainer.scrollTo({ left: 0, top: section_three.offsetTop, behavior: "smooth" });
		});
	} else {
		workLink.addEventListener("click", () => {
			scrollContainer.scrollTo({ left: 0, top: section_two.offsetTop - 100, behavior: "smooth" });
		});
		aboutLink.addEventListener("click", () => {
			scrollContainer.scrollTo({ left: 0, top: section_one.offsetTop - 100, behavior: "smooth" });
		});
		contactLink.addEventListener("click", () => {
			scrollContainer.scrollTo({ left: 0, top: section_three.offsetTop - 100, behavior: "smooth" });
		});
	}

	//* Button
	const viewBtns = document.querySelectorAll(".project_btn");
	viewBtns.forEach((btn) => {
		btn.addEventListener("click", viewBtnHandler);
	});
}

function viewBtnHandler(e) {
	const pageTransTl = gsap.timeline();
	console.log("Animation start");

	gsap.set(".page-trans-start", { transformOrigin: "bottom" });
	gsap.set(".page-trans-start-container h2", {
		display: "inline",
	});

	pageTransTl
		.to(".page-trans-start", {
			scaleY: 1,
			ease: Power4.easeOut,
			duration: 1.3,
		})

		.to(
			".page-trans-start-container h2",
			{
				opacity: 1,
				duration: 1,
				onComplete: setLink,
			},
			"-=1"
		);
	let project = e.target.dataset.project % 2;
	function setLink() {
		window.location.href = `./html/project_1.html?id=${project}`;
	}
}
