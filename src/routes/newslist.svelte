<script>
    import Newscard from './newscard.svelte';
    const alkaline = {  bottomright_Color: 'green'  ,    topleft_Color: 'purple'   ,   name: 'Alkaline Tech Studios'   };
    const durango  = {  bottomright_Color: 'purple' ,    topleft_Color: 'gold'     ,   name: 'Durango'                 };
    const website  = {  bottomright_Color: 'aqua'   ,    topleft_Color: 'purple'   ,   name: 'Website'                 };
    const Makina   = {  bottomright_Color: 'red'    ,    topleft_Color: 'gold'     ,   name: 'Makina'                  };
    const VisualK  = {  bottomright_Color: 'blue'   ,    topleft_Color: 'purple'   ,   name: 'VisualK'                 };
</script>



<div id = "news__list">
    <Newscard project={website} Description = "
    <u><b>HTML SUPPORT ADDED TO NEWS CARDS</b></u>" 
    date="2024 FEBRUARY 28"> </Newscard>

    <Newscard project={website} Description= 
    "Website has been migrated to plasmarad.online, rebranding aswell." 
    date="2023 AUGUST 23"> </Newscard>

    <Newscard project={website} Description=
    "Improved alignment for Project cards, scrollbars, and news cards."
    date="2023 AUGUST 3"> </Newscard>

    <Newscard project={website} Description=
    "added missing logos for the Durango and Website projects card." 
    date="2023 JULY 19"> </Newscard>

    <Newscard project={website} Description=
    "deployed website to github's static site hosting service, <br>
    this site is now live at plasmarad.me" 
    date="2023 JULY 5"> </Newscard>
</div>

<style>
    #news__list {
        display: grid;
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1,  50);
        grid-row-gap: 25px;
        justify-items: center;
        margin-bottom: 1rem;
    }
    #news__list::-webkit-scrollbar {
        background:transparent;
        width: 0px;
    }
</style>