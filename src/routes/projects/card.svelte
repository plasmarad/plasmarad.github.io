<script>
// @ts-nocheck

    export let banner = '';
    // add banner color?
    export let desc = '';
    export let banner_inject_style = '';
    /**
     * @type {object[]}
     */
    export let chips = [[]];
</script>

<div class="panel">
    <div class="panel__banner" 
		style="background-image: url({banner}); {banner_inject_style}" />
    
		<h5 class= "panel__desc">{desc}</h5>
		<div class="panel__chips">

		{#each chips as chip}
        	<div class="chip" 
				style="background:linear-gradient(black, black) padding-box, 
				linear-gradient(to left, {chip.color}, {chip.color}) border-box;"> 
          		
				<div class="chip__text">{chip.text}</div>
        	</div>
      	{/each}
	</div>
</div>

<style>
    .panel {
		/* relative */
		position: relative;
        border: 1px solid transparent;
        background: linear-gradient(#000000, black)             padding-box,
					linear-gradient(to top left, white, white)  border-box;
        
		border-radius: .5em;
        text-align: center;
        transition: transform .2s ease-in-out;
		

    }
    .panel:hover {
		transform: scale(1.2);
		cursor: pointer;
    }
    .panel__banner {
        padding: 1rem;
        border-radius: .5em .5em 0 0;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center; 
        background-color: white;
    }

    .chip {
		margin: 0.2rem;
		display: inline-block;
		padding: 0.25rem 0.4rem;
		border: 1px solid transparent;
		border-radius: 20px;
    }
    .chip__text{
      	font-size: 14px;
      	color: rgb(255, 255, 255);
    }
	.panel__chips {
		position: absolute;
		bottom: 5px;
		left: 0;
		width: 100%;
	}
	.panel__desc {
		padding-left: 10px;
		padding-right: 10px;
		margin-bottom: 4rem;
	}
</style>