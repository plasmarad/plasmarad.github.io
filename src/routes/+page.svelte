<svelte:head>
	<title>plasmarad</title>
	<meta name="Plasmarad.online" content="My portfolio of projects" />
</svelte:head>

<script>
	import Newslist from './newslist.svelte';
</script>
<h2>Welcome,<br> here's the latest news.</h2>
<Newslist />

<style>
	h2 {
		margin-top: 80px;
		margin-bottom: 20px;
		text-align: center;
	}
</style>