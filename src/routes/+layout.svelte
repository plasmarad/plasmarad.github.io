<script>
	import Header from './components/navbar.svelte';
	import './styles.css';

	
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer style="color: gray"> plasmarad - 2024 </footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow: hidden;
		scrollbar-width: none;
	}
	
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 16px;
		margin-bottom: 8px;
	}


slot::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #00000000;
}

slot::-webkit-scrollbar-thumb {
  background-color: rgb(75, 75, 75);
  border-radius: 20px;
  border: 4px solid #f5f5f5;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

slot::-webkit-scrollbar-track {
  background-color: #f5f5f500;
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>
