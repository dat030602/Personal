const home = document.getElementById("job");
var developer = "Developer.";
var start = 0;
var end = developer.length;
var asc = true;
setInterval(informationPersonal, 200);

function informationPersonal() {
	home.innerHTML = developer.slice(start, end);
	if (asc) end--;
	else end++;
	if (end == -1) {
		asc = !asc;
		end++;
	} else if (end > developer.length) {
		asc = !asc;
		end--;
	}
}
window.informationPersonal();

window.onscroll = function () {
	scrollFunction();
};
var education = document.getElementById("education");
var getHeightEducation = education.offsetHeight;

var project = document.getElementById("project");
var getHeightProject = project.offsetHeight;

var skills = document.getElementById("skills");
var getHeightSkills = skills.offsetHeight;

var about = document.getElementById("about");

function scrollFunction() {
	var getPosProject = project.getBoundingClientRect().top;
	var getPosEducation = education.getBoundingClientRect().top;
	var getPosSkills = skills.getBoundingClientRect().top;
	var getPosAbout = about.getBoundingClientRect().top;
	// Project
	var resumeFocusItem = document.querySelector(
		"#resume .side-bar .item.project"
	);
	if (getPosProject <= 200 && -getPosProject <= getHeightProject - 100) {
		resumeFocusItem.classList.add("active");
	} else {
		resumeFocusItem.classList.remove("active");
	}

	// Education
	var resumeFocusItem = document.querySelector(
		"#resume .side-bar .item.education"
	);
	if (
		getPosEducation <= 200 &&
		-getPosEducation <= getHeightEducation - 100
	) {
		resumeFocusItem.classList.add("active");
	} else {
		resumeFocusItem.classList.remove("active");
	}

	// Skills
	var resumeFocusItem = document.querySelector(
		"#resume .side-bar .item.skills"
	);
	if (getPosSkills <= 200 && -getPosSkills <= getHeightSkills - 100) {
		resumeFocusItem.classList.add("active");
	} else {
		resumeFocusItem.classList.remove("active");
	}

	// Header
	var resumeFocusItem = document.querySelector("header");
	if (getPosAbout < 100) {
		resumeFocusItem.classList.add("active");
	} else {
		resumeFocusItem.classList.remove("active");
	}
}
