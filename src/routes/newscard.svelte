<script>
    // project name: string
    // version: string
    // desc: string
    // color: string
    // link: string
    
    // export let project  = 'placeholder';
    export let desc     = 'placeholder';
    export let date     =  'January 1 1970';

    /**
     * @typedef {object} Project
     * @property {string} name
     * @property {string} color = 'gray'    - color of the card
     * @property {string} color2 = 'gray'   - 2nd color for the gradient
     */

    /**
     * @type {Project}
    */
    export let project = {
        name: 'placeholder',
        color: 'gray',
        color2: 'gray',
    };

</script>

<div class="newscard"
        style="background: linear-gradient(black, black)          padding-box,
        linear-gradient(to top left, {project.color}, {project.color2})  border-box;">
    
    
    <h3 class = "project__name">{project.name}</h3>
    <h6 class="date">{date}</h6>
    <div class = "desc">
        {desc}
    </div>
</div>

<style>
    .newscard {
        border: 1px solid transparent;
        /* use the color var just like in html */
        border-radius: .5em;
        transition: transform .2s ease-in-out;
        width: 85vw;
        min-height: 15vh;
        max-height: 40vh;
        padding-bottom: 5px;
    }
    
    .desc {
        text-align: center;
        /* min-height: 50%; */
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


.newscard::-webkit-scrollbar {
    width: 0.0em;
}
</style>