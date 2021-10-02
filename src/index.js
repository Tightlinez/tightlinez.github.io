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
			<div class="navbar-nav">
				<a class="nav-link" href="/">Home</a>
				<a class="nav-link" href="/shop.html">Shop</a>
				<a class="nav-link" href="/contact.html">Contact Us</a>
			</div>
		</div>
	</div>
</nav>`;
document.getElementById('header').innerHTML = headerContent;
