<script>
  	import { page } from "$app/stores";
</script>

<nav class="navbar">
	<div class="navbar__links">
	  <a aria-current={$page.url.pathname === '/'         ? 'page' : undefined}  href="/"         >  News        </a> 
	  <a aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}  href="/projects" >  Projects    </a>
    <a aria-current={$page.url.pathname === '/about'    ? 'page' : undefined}  href="/about"    >  About       </a>
	  <a aria-current={$page.url.pathname === '/contact'  ? 'page' : undefined}  href="/contact"  >  Contact Me  </a>
	</div>
</nav>
  
<style>
.navbar {
  position: fixed;
  width: 100%;
  background-color: #ffffff;
  z-index: 1;
  display: flex;
  height: 64px;
}

.navbar__links {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1; 
}

.navbar__links a {
  text-decoration: none;
  color: #494949;
  font-weight: bold;
  padding: 0 16px;
}
a[aria-current="page"]{
  color:#000;
}

a[aria-current="page"]::after {
  color: #000;
  content: '';
  display: block;
  height: 2px;
  width: 100%;
  background-color: var(--accent-color);
  margin-top: 2px;
}

@media screen and (max-width: 365px) {
  .navbar__links {
    font-size: small;
  }
} 
@media screen and (max-width: 250px) {
  .navbar__links {
    font-size: xx-small;
  }
}

  </style>