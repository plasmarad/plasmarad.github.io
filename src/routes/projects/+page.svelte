<svelte:head>
    <title>projects.plasmarad.me</title>
    <meta name="Plasmarad.ME" content="My portfolio of awesome projects" />
</svelte:head>



<script>
    import Card from './card.svelte';

    import polaris_cardico from '$lib/images/polaris_card.png';
    import alkaline_cardico from '$lib/images/alkaline_card_2.png';
	import durango_cardico from '$lib/images/durango_banner.png';
    import website_cardico from '$lib/images/website_card.png';

    const cpp_chip      = {color: 'purple'    ,  text: 'C++'     };
    const durango_chip  = {color: 'orange'    ,  text: 'Durango' };
    const python_chip   = {color: 'cyan'      ,  text: 'Python'  };
    const rust_chip     = {color: 'teal'      ,  text: 'Rust'    };
    const cli_chip      = {color: 'lightgray' ,  text: 'CLI'     };
    const svelte_chip   = {color: 'red'       ,  text: 'Svelte'  };
    const js_chip       = {color: 'yellow'    ,  text: 'WebDev'      };
    const studio_chip   = {color: 'lightgreen',  text: 'Studio'  };
    const FOSS_chip     = {color: 'white'     ,  text: 'FOSS'    };

</script>
	


<div class="PanelGrid">

    <Card banner={polaris_cardico} 
    chips={[cpp_chip, python_chip, durango_chip, FOSS_chip]}
    desc="3D engine designed for the Quasar Framework" 
    />

    <Card banner={durango_cardico}
    desc='Custom in house production programming language' 
    chips={[cpp_chip, durango_chip, FOSS_chip]}
    banner_inject_style=";background-color: #000000;background-size: 150px "
    />


    <Card banner={website_cardico}
    desc='my portfolio website made with svelte-kit' 
    chips={[svelte_chip, js_chip]}
    banner_inject_style="background-color: #000000;"
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
    grid-template-columns: repeat(auto-fit,  175px);
    grid-auto-rows: 175px;
    grid-gap: 25px;
    place-items: center;

    height: calc(100vh - 180px);
    justify-content: center;
    align-items: stretch;
    overflow-y: scroll;
}

.PanelGrid::-webkit-scrollbar {
    width: 0px;
    background: transparent;
}

</style>