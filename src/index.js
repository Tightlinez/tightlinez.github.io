// © 2021 Tightlinez, licensed under BSD-3-Clause
import 'bootstrap/dist/css/bootstrap.min.css';

import * as bootstrap from 'bootstrap';

let setupNavbar = async () => {
	console.log(
	    'If you\'re looking here, you should probably help me with the site.');
	let headerContent = `
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="/#">Tightlinez</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<div class="navbar-nav" id="header-navbar-list">
				</div>
			</div>
			<span class="float-right text-dark">&copy; 2021 Tightlinez</span>
		</div>
	</nav>`;
	document.getElementById('navbar').innerHTML = headerContent;
	console.log('[Navbar] Injected header into div!');
	let headerList = [
	  {'name': 'Home', 'href': '/'},
	  {'name': 'Contact Us', 'href': '/contact.html'}
	];
	for (let i = 0; i < headerList.length; i++) {
	  var entry = headerList[i];
	  console.log(entry);
	  var hrefToTestAgainst = window.location.href.split('/');
	  hrefToTestAgainst = '/' + hrefToTestAgainst.slice(3).join('/');
	  if (hrefToTestAgainst === entry['href']) {
	    console.log(`[Navbar] Found active URL '${entry['href']}' in header!`);
	    document.getElementById('header-navbar-list').innerHTML +=
	        `<a class="nav-link active" href="${entry['href']}">${
	            entry['name']}</a>`;
	  } else {
	    console.log(`[Navbar] Current header href ${entry['href']} and not ${
	        hrefToTestAgainst}, setting to default!`);
	    document.getElementById('header-navbar-list').innerHTML +=
	        `<a class="nav-link" href="${entry['href']}">${entry['name']}</a>`;
	  }
	}  // overly complicated code to select the active url from the header and make
	   // it active
	console.log('[Navbar] Inserted list of available locations into header!');
}
setupNavbar()
