<script>
    import Newscard from './newscard.svelte';
    const alkaline = {  color: 'green',    color2: 'purple' ,   name: 'Alkaline Tech Studios',   };
    const durango  = {  color: 'red'    ,    color2: 'orange',   name: 'Durango' ,   };
    const website  = {  color: 'aqua'       ,    color2: 'aquamarine',   name: 'Website'}
    const Quasar   = {  color: 'white'       ,    color2: 'black',   name: 'Quasar' }
    const Youtube = {  color: 'purple'       ,    color2: 'red',   name: 'Youtube' }
</script>



<div id = "news__list">
    <Newscard project={website} desc=
    "Improved alignment for Project cards, scrollbars, and news cards."
    date="2023 AUGUST 3"
    />
    <Newscard project={Youtube} desc=
    "Posted a website show case video on youtube"
    youtube="5WHMWaViqOY"
    date="2023 JULY 19"
    />

    <Newscard project={website} desc=
    "added missing logos for the Durango and Website projects card." 
    date="2023 JULY 19"
    />
    <Newscard project={website} desc=
    "deployed website to github's static site hosting service,
    this site is now live at plasmarad.me" 
    date="2023 JULY 5"
    />
</div>

<style>
    #news__list {
        display: grid;
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1,  50);
        grid-row-gap: 25px;
        justify-items: center;
    }
    #news__list::-webkit-scrollbar {
        background:transparent;
        width: 0px;
    }
</style>