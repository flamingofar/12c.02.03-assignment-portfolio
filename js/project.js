"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
	transitionAnim();

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const themeColorNr = urlParams.get("id");
	console.log(themeColorNr);
	const bg = document.querySelector(".headline");

	if (themeColorNr !== "1") {
		bg.style.backgroundColor = "var(--color-main)";
	} else {
		bg.style.backgroundColor = "var(--color-main-off)";
	}
}

function transitionAnim() {
	const pageTransTl = gsap.timeline();

	gsap.set(".page-trans-done", { transformOrigin: "top" });

	pageTransTl
		.to(".page-trans-done-container h2", {
			opacity: 0,
			duration: 0.8,
			display: "none",
		})
		.to(
			".page-trans-done",
			{
				scaleY: 0,
				duration: 1.3,
				delay: 0.5,
				ease: Power4.easeOut,
			},
			"-=0.8"
		);
}
