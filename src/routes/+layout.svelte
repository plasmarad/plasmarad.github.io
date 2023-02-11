<nav class = "navbar">
    <a href="/">Home</a>
</nav>

<div class = "page">
    <slot />
</div>
<style>
    .navbar {
        background-image: linear-gradient(to right, purple, orange);
        overflow: hidden;
        position: fixed;
        top: 0; right: 0; 
        width: 100%;        
    }
     .navbar a {
        float: left;
        color: white;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 20px;

    }

    .navbar a:hover {
        color: gray;
    }

    .page {
        padding-top: 15px;
    }
</style>