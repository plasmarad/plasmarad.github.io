<svelte:head>
    <title>projects.plasmarad.me</title>
    <meta name="Plasmarad.ME" content="My portfolio of awesome projects" />
</svelte:head>



<script>
  	import Card from './card.svelte';
	
  	import polaris_cardico from '$lib/images/polaris_card.png';
  	import alkaline_cardico from '$lib/images/alkaline_card_2.png';
	
  	const cpp_chip      = {color: 'purple'    ,  text: 'C++'     };
  	const python_chip   = {color: 'cyan'      ,  text: 'Python'  };
  	const rust_chip     = {color: 'teal'      ,  text: 'Rust'    };
  	const cli_chip      = {color: 'lightgray' ,  text: 'CLI'     };
  	const svelte_chip   = {color: 'orange'    ,  text: 'Svelte'  };
  	const js_chip       = {color: 'yellow'    ,  text: 'JS'      };
  	const studio_chip   = {color: 'lightgreen',  text: 'Studio'  };
</script>
	


<div class="PanelGrid">

    <Card banner={polaris_cardico} 
    chips={[cpp_chip, python_chip]}
    desc="Modular Project Framework management tool" 
    />
  
    <Card banner=""
    desc='Durango my custom production programming language' 
    chips={[cpp_chip]} 
    />
    
    <!-- Blame it on rust Trademarking -->
    <Card banner="" 
    desc='moddable TUI text editor' 
    chips={[rust_chip, cli_chip]}
    />
  
    <Card banner=""
    desc='my portfolio website made with svelte-kit' 
    chips={[svelte_chip, js_chip]}
    />
  
    <Card banner={alkaline_cardico}
    desc='Entertainment & technologies studio'
    chips={[studio_chip]}
    banner_inject_style="background-color: #000000;"
    />

</div> 

<style>
.PanelGrid {
    margin-top: 4rem;
    
    padding: 2em;

    display: grid;
    grid-template-columns: repeat(auto-fit,  250px);
    grid-auto-rows: 250px;
    grid-gap: 25px;
    place-items: center;

    height: calc(100vh - 180px);
    width: 92.5vw;
    justify-content: center;
    align-items: stretch;
    overflow-y: scroll;
}


</style>