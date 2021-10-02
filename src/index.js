import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
console.log("If you're looking here, you should probably help me with the site.");
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
document.getElementById('header').innerHTML = headerContent;
let headerList = [{'name': 'Home', 'href': '/'}, {'name': 'Shop', 'href': '/shop.html'}, {'name': 'Contact Us', 'href': '/contact.html'}]
for (let i = 0; i < headerList.length; i++) {
	var entry = headerList[i]
	console.log(entry)
	var hrefToTestAgainst = window.location.href.split("/")
	hrefToTestAgainst = "/" + hrefToTestAgainst.slice(3).join("/")
	if (hrefToTestAgainst === entry['href']) {
		console.log(`[Navbar] Found active URL '${entry['href']}' in header!`)
		document.getElementById("header-navbar-list").innerHTML += `<a class="nav-link active" href="${entry['href']}">${entry['name']}</a>`
	} else {
		console.log(`${entry['href']}`)
		document.getElementById("header-navbar-list").innerHTML += `<a class="nav-link" href="${entry['href']}">${entry['name']}</a>`
	}
}
