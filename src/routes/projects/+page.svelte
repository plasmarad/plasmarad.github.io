


<script>
  import Card from './card.svelte';
  
  import polaris_cardico from '$lib/images/polaris_card.png';
  import alkaline_cardico from '$lib/images/alkaline_card_2.png';
  
  const cpp_chip      = {color: 'lightblue',  text: 'C++'     };
  const python_chip   = {color: 'cyan',       text: 'Python'  };
  const rust_chip     = {color: 'gray',       text: 'Rust'    };
  const cli_chip      = {color: 'lightgray',  text: 'CLI'     };
  const svelte_chip   = {color: 'orange',     text: 'Svelte'  };
  const webdev_chip   = {color: 'yellow',     text: 'JS'      };
  const studio_chip   = {color: 'lightgreen', text: 'Studio'  };
</script>

<svelte:head>
    <title>projects.plasmarad.me</title>
    <meta name="Plasmarad.ME" content="My portfolio of awesome projects" />
</svelte:head>

<div class="PanelGrid">
    <Card banner={polaris_cardico} 
    chips={[cpp_chip, python_chip]}
    desc="Modular Project Framework management tool" 
    />
    <Card banner=""
    desc='my custom "toy" programming language' 
    chips={[cpp_chip]} 
    />
    <!-- Blame it on rust Trademarking -->
    <!-- <Card banner="" 
    desc='Shitty Calculator App Written In Rust' 
    chips={[rust_chip, cli_chip]}
    /> -->
    <Card banner=""
    desc='my portfolio website made with svelte-kit' 
    chips={[svelte_chip, webdev_chip]}
    />
    <Card banner={alkaline_cardico}
    desc='Entertainment & technologies studio'
    chips={[studio_chip]}
    banner_inject_style="background-color: #000000;"
    />
<!-- 
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} />
    <Card banner="" desc="placeholder" chips={[studio_chip]} /> -->
</div> 

<style>
.PanelGrid {
    margin-top: 4rem;
    padding: 2em;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 175px;
    grid-gap: 25px;
    height: calc(100vh - 180px);
    justify-content: center;
    overflow-y: scroll;
}

.PanelGrid::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #00000000;
}

.PanelGrid::-webkit-scrollbar-thumb {
  background-color: rgb(75, 75, 75);
  border-radius: 20px;
  border: 4px solid #f5f5f5;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.PanelGrid::-webkit-scrollbar-track {
  background-color: #f5f5f500;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

</style>