// SVG Icons
const ICONS = {
	github: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/></svg>',
	mail: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M926.47619 355.644952V780.190476a73.142857 73.142857 0 0 1-73.142857 73.142857H170.666667a73.142857 73.142857 0 0 1-73.142857-73.142857V355.644952l304.103619 257.828572a170.666667 170.666667 0 0 0 220.745142 0L926.47619 355.644952zM853.333333 170.666667a74.044952 74.044952 0 0 1 26.087619 4.778666 72.704 72.704 0 0 1 30.622477 22.186667 73.508571 73.508571 0 0 1 10.678857 17.67619c3.169524 7.509333 5.12 15.652571 5.607619 24.210286L926.47619 243.809524v24.380952L559.469714 581.241905a73.142857 73.142857 0 0 1-91.306666 2.901333l-3.632762-2.925714L97.52381 268.190476v-24.380952a72.899048 72.899048 0 0 1 40.155428-65.292191A72.97219 72.97219 0 0 1 170.666667 170.666667h682.666666z"/></svg>',
	donate: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M995.575172 725.451034c-12.358621-26.835862-38.488276-64.794483-92.689655-94.27862-62.146207-33.721379-136.297931-40.96-208.860689-20.303448l-99.928276 28.424827-279.304828-126.057931H22.775172v489.401379h509.704828l432.375172-195.266207c15.006897-6.708966 26.835862-19.42069 32.662069-34.957241 5.649655-15.36 4.943448-31.955862-1.942069-46.962759z m-482.162758 188.910345H111.051034V601.688276h184.673104l166.664828 75.387586-3.354483 0.882759h-170.372414v88.275862H471.393103l246.819311-70.267586c49.434483-14.124138 101.517241-9.357241 142.653793 12.888275 18.184828 9.886897 30.72 20.833103 39.371034 30.896552l-386.824827 174.609655z"/><path d="M695.437241 163.486897l58.615173-142.30069h-397.24138l66.736552 143.36c-121.82069 53.142069-207.095172 174.433103-207.095172 315.674483 0 28.601379 3.531034 57.202759 10.593103 84.744827l85.627586-21.715862c-5.12-20.48-7.768276-41.666207-7.768275-63.028965 0-141.241379 114.758621-256 256-256s256 114.758621 256 256c0 51.023448-14.830345 100.104828-43.078621 142.300689l73.268965 49.08138c37.958621-56.673103 58.085517-122.88 58.085518-191.382069-0.176552-141.947586-86.686897-264.121379-209.743449-316.733793z"/></svg>',
	qq: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"/></svg>',
	link: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M578 152c-44.2 0-80 35.8-80 80v48H368c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V304c0-35.3-28.7-64-64-64H526v-48c0-28.7 16.6-53.8 40.7-65.8 11.3-5.7 24.3-8.2 37.3-8.2 30.9 0 56 22.2 60.8 51.5l2.5 15.3c1.3 8-4.6 15.5-12.7 15.5h-4c-5.8 0-11.1-3.6-13.1-9.1l-2.5-6.8c-2.8-7.2-9.8-12.1-17.7-12.1-9.1 0-16.5 7.4-16.5 16.5v48z"/></svg>',
	folder: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M880 298.4H521.2L629.6 96c7.2-16.8 22.4-28 40-28h210.4c17.6 0 32.8 11.2 40 28l108.4 202.4c7.2 16.8 7.2 36 0 52.8L920 642.4c-7.2 16.8-22.4 28-40 28H640c-17.6 0-32.8-11.2-40-28L480 514.4l-80 128H144c-17.6 0-32.8-11.2-40-28L56 568.8c-7.2-16.8-7.2-36 0-52.8l72-136c7.2-16.8 22.4-28 40-28h145.6l80-128H880c17.6 0 32.8 11.2 40 28l108 202.4c7.2 16.8 7.2 36 0 52.8z"/></svg>',
	location: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 249.976471c-99.388235 0-180.705882 81.317647-180.705882 180.705882s81.317647 180.705882 180.705882 180.705882 180.705882-81.317647 180.705882-180.705882-81.317647-180.705882-180.705882-180.705882z m0 301.17647c-66.258824 0-120.470588-54.211765-120.470588-120.470588s54.211765-120.470588 120.470588-120.470588 120.470588 54.211765 120.470588 120.470588-54.211765 120.470588-120.470588 120.470588z"/><path d="M512 39.152941c-216.847059 0-391.529412 174.682353-391.529412 391.529412 0 349.364706 391.529412 572.235294 391.529412 572.235294s391.529412-222.870588 391.529412-572.235294c0-216.847059-174.682353-391.529412-391.529412-391.529412z m0 891.482353C424.658824 873.411765 180.705882 686.682353 180.705882 430.682353c0-183.717647 147.576471-331.294118 331.294118-331.294118s331.294118 147.576471 331.294118 331.294118c0 256-243.952941 442.729412-331.294118 499.952941z"/></svg>',
	school: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M729.6 234.666667H294.4V157.866667a51.2 51.2 0 0 1 51.2-51.2h332.8a51.2 51.2 0 0 1 51.2 51.2v76.8z m179.2 51.2a51.2 51.2 0 0 1 51.2 51.2v512a51.2 51.2 0 0 1-51.2 51.2H115.2a51.2 51.2 0 0 1-51.2-51.2v-512a51.2 51.2 0 0 1 51.2-51.2h793.557333z m-768 172.032c0 16.384 13.312 29.696 29.696 29.696h683.008a29.696 29.696 0 1 0 0-59.392H170.410667a29.696 29.696 0 0 0-29.696 29.696z m252.416 118.784c0 16.384 13.312 29.696 29.696 29.696h178.176a29.696 29.696 0 1 0 0-59.392H422.912a29.738667 29.738667 0 0 0-29.696 29.696z"/></svg>'
};

function getIcon(name) {
	return ICONS[name] || ICONS.link;
}

// Cookie helpers
function setCookie(name, value, days) {
	var expires = "";
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
	var nameEQ = name + "=";
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		var c = cookies[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length);
	}
	return null;
}

// Popup
function pop(imageURL) {
	var tcMain = document.querySelector(".tc-img");
	var tc = document.querySelector(".tc");
	var tcMainContainer = document.querySelector(".tc-main");
	if (imageURL) tcMain.src = imageURL;
	tc.classList.toggle("active");
	tcMainContainer.classList.toggle("active");
}

// Apply theme
function applyTheme(themeData, preset) {
	var html = document.documentElement;
	if (preset && preset !== 'custom') {
		html.dataset.theme = preset.replace('theme', 'Dark');
	}
	var custom = themeData.custom;
	if (custom) {
		Object.keys(custom).forEach(function(key) {
			html.style.setProperty(key, custom[key]);
		});
	}
}

// Render page
function renderPage(config) {
	// Title & favicon
	document.getElementById('page-title').textContent = config.basic.title || 'Homepage';
	document.getElementById('page-favicon').href = config.basic.favicon || './static/img/favicon.ico';
	document.querySelector('meta[name="description"]').content = config.basic.description || '';
	document.querySelector('meta[name="keywords"]').content = (config.tags || []).join(',');

	// Theme
	applyTheme(config.theme, config.theme.preset);

	// Logo
	var logoStyle = 'background-image: url(' + (config.images.logo || './static/img/logo.png') + ');';
	document.getElementById('left-logo').style.cssText = logoStyle;
	var headerLogo = document.getElementById('header-logo');
	headerLogo.style.cssText = logoStyle;

	// Location
	var desHtml = '';
	if (config.location.country) {
		desHtml += '<div class="left-des-item">' + getIcon('location') + config.location.country + '</div>';
	}
	if (config.location.school) {
		desHtml += '<div class="left-des-item">' + getIcon('school') + config.location.school + '</div>';
	}
	document.getElementById('left-des').innerHTML = desHtml;

	// Tags
	var tagHtml = '';
	(config.tags || []).forEach(function(tag) {
		tagHtml += '<div class="left-tag-item">' + tag + '</div>';
	});
	document.getElementById('left-tag').innerHTML = tagHtml;

	// Timeline
	var timeHtml = '';
	(config.timeline || []).forEach(function(item) {
		timeHtml += '<li><div class="focus"></div><div>' + item.text + '</div><div>' + item.date + '</div></li>';
	});
	document.getElementById('line').innerHTML = timeHtml;

	// Header info
	document.getElementById('header-name').textContent = config.basic.name || '';
	document.getElementById('header-desc').innerHTML = config.basic.description || '';
	document.getElementById('header-slogan').innerHTML = config.basic.slogan || '';

	// Social icons
	var socialHtml = '';
	(config.social || []).forEach(function(s) {
		if (s.type === 'popup') {
			socialHtml += '<a class="iconItem" onclick="pop(\'' + s.url + '\')" href="javascript:void(0)">' + getIcon(s.icon) + '<div class="iconTip">' + s.name + '</div></a>';
		} else {
			socialHtml += '<a class="iconItem" href="' + s.url + '" target="_blank">' + getIcon(s.icon) + '<div class="iconTip">' + s.name + '</div></a>';
		}
	});
	// Add theme switch
	socialHtml += '<a class="switch" href="javascript:void(0)"><div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked><label class="onoffswitch-label" for="myonoffswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div></a>';
	document.getElementById('social-icons').innerHTML = socialHtml;

	// Snake
	if (!config.features.snake) {
		document.getElementById('snake-container').style.display = 'none';
	}

	// Projects
	var projHtml = '';
	(config.projects || []).forEach(function(cat) {
		projHtml += '<div class="title">' + getIcon(cat.categoryIcon || 'folder') + cat.category + '</div>';
		projHtml += '<div class="projectList">';
		(cat.items || []).forEach(function(item) {
			projHtml += '<a class="projectItem ' + (item.style || 'a') + '" target="_blank" href="' + item.url + '">';
			projHtml += '<div class="projectItemLeft"><h1>' + item.title + '</h1><p>' + item.desc + '</p></div>';
			projHtml += '<div class="projectItemRight"><img src="' + item.icon + '" alt=""></div>';
			projHtml += '</a>';
		});
		projHtml += '</div>';
	});
	document.getElementById('projects-content').innerHTML = projHtml;

	// Skills
	if (!config.features.skills) {
		document.getElementById('skills-section').style.display = 'none';
	} else {
		document.getElementById('skillPc').src = config.skills.pcImage || './static/svg/skillPc.svg';
		document.getElementById('skillWap').src = config.skills.wapImage || './static/svg/skillWap.svg';
	}

	// Footer
	var footerHtml = config.footer.text || '';
	if (config.footer.icp) {
		footerHtml += ' <a href="' + (config.footer.icpUrl || '#') + '">' + config.footer.icp + '</a>';
	}
	document.getElementById('site-footer').innerHTML = footerHtml;

	// Re-init interactions
	initInteractions();
}

// Init interactions
function initInteractions() {
	// Button press effect
	var buttons = document.querySelectorAll('.projectItem');
	buttons.forEach(function(btn) {
		btn.addEventListener('mousedown', function() { this.classList.add('pressed'); });
		btn.addEventListener('mouseup', function() { this.classList.remove('pressed'); });
		btn.addEventListener('mouseleave', function() { this.classList.remove('pressed'); });
		btn.addEventListener('touchstart', function() { this.classList.add('pressed'); });
		btn.addEventListener('touchend', function() { this.classList.remove('pressed'); });
		btn.addEventListener('touchcancel', function() { this.classList.remove('pressed'); });
	});

	// Theme toggle
	var checkbox = document.getElementById('myonoffswitch');
	if (checkbox) {
		var themeState = getCookie("themeState") || "Light";
		var tanChiShe = document.getElementById("tanChiShe");

		function changeTheme(theme) {
			if (tanChiShe) tanChiShe.src = "./static/svg/snake-" + theme + ".svg";
			document.documentElement.dataset.theme = theme;
			setCookie("themeState", theme, 365);
			themeState = theme;
		}

		checkbox.addEventListener('change', function() {
			changeTheme(themeState == "Dark" ? "Light" : "Dark");
		});

		if (themeState == "Dark") checkbox.checked = false;
		changeTheme(themeState);
	}

	// Popup close
	var tc = document.querySelector('.tc');
	var tcMain = document.querySelector('.tc-main');
	if (tc) tc.addEventListener('click', function(e) { if (e.target === tc) pop(); });
	if (tcMain) tcMain.addEventListener('click', function(e) { e.stopPropagation(); });

	// Loading
	var pageLoading = document.querySelector("#zyyo-loading");
	if (pageLoading) {
		window.addEventListener('load', function() {
			setTimeout(function() { pageLoading.style.opacity = '0'; }, 100);
		});
	}
}

// Load config and render
fetch('./data.json')
	.then(function(r) { return r.json(); })
	.then(function(config) { renderPage(config); })
	.catch(function(err) {
		console.error('Failed to load config:', err);
		document.getElementById('page-title').textContent = 'Error loading config';
	});
