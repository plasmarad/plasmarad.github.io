<script>
    // project name : string
    // version      : string
    // Description      : string
    // color        : string
    // link         : string
    
    export let Description      =   'placeholder';
    export let date         =   'January 1 1970';
    export let video        =   'none';

    /**
     * @typedef  {object} Project
     * @property {string} name
     * @property {string} bottomright_Color = 'gray'    - bottomright_Color of the card
     * @property {string} topleft_Color = 'gray'   - 2nd color for the gradient
     */

    /**
     * @type {Project}
    */
    export let project = {
        name: 'placeholder',
        bottomright_Color: 'gray',
        topleft_Color: 'gray',
    };

</script>

<div class="newscard"
        style="background: linear-gradient(black, black)          padding-box,
        linear-gradient(to top left, {project.bottomright_Color}, {project.topleft_Color})  border-box;">
    
    <h3 class = "project__name">{project.name}</h3>
    <h6 class="date">{date}</h6>
    <div class = "Description">
        <!-- {@html Description} -->
        {@html Description}
    </div>
    {#if video && video !== 'none'}
    <div class ="vid">
        <iframe title="video"
        src={video}
        allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>
    </div>
    {/if}
</div>

<style>
    .newscard {
        border: 1px solid transparent;
        /* use the color var just like in html */
        border-radius: .5em;
        transition: transform .2s ease-in-out;
        min-width: 40vw;
        max-width: 80vw;
        min-height: 15vh;
        max-height: calc(75vh);
        padding-bottom: 5px;
    }
    
    .Description {
        text-align: center;
        max-height: calc(100% - 3.75rem - 6px);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: .75rem;
        margin-bottom: .2rem;
        overflow-wrap: break-word;
        overflow-y: auto;
    }

    .project__name {
        position: relative;
        padding: 0.5em;
        margin: 0;
    }
    .date {
        margin: 0;
        padding-left: 7px;
        color: gray;
        font-size: 0.7em;
    }

    .vid {
        display: flex;
        justify-content: center;
        align-items: left;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
.newscard::-webkit-scrollbar {
    width: 0.0em;
}
</style>