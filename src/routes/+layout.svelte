
<body>
    <script src="https://kit.fontawesome.com/03595c8af4.js" crossorigin="anonymous"></script>

    <div class="nav">
        <span id="gear" class="fa-solid fa-gear"></span>
    </div>
    <div class="navmenu">
        <a href="/"> Home   </a>
        <a href="/about"> About  </a>
        <a href="/projects"> projects</a>
    </div>

    <div class = "page">
        <slot />
    </div>
</body>

<script>
  import { onMount } from 'svelte';
  onMount(() => {
  });
</script>


<style>
    body{
        background: black;
    }

    .nav {
        border: 1px solid transparent;
        background: linear-gradient(#1e1e1e, #1e1e1e)           padding-box,
                    linear-gradient(to top left, blue 5%, red)  border-box;

        border-radius: 10em;        
        width: 2em; height: 2em; 
        display: flex;
        align-items: center;
        justify-content: center; 
        
        position: fixed;
        color: white;
        font-size: 20px;
        z-index: 1;
    }

    .fa-gear:active {
        animation: spin .5s linear infinite alternate-reverse;
    }

    .navmenu {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        height: 2.5em;
        width: 30%;
        transform: translateX(2%);
        background-color: #1e1e1e;

        border: 1px solid transparent;
        background: linear-gradient(#1e1e1e, #1e1e1e)           padding-box,
                    linear-gradient(to top left, black , red)  border-box;
        border-radius: 1em;
    }
    
    .navmenu a {
        color: rgb(255, 255, 255);
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .navmenu a:hover {
        color: gray;
    }

    /* Animation for nav-cog*/
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

</style>