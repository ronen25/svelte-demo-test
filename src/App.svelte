<script>
  import fetchData from './services/dataService';
  import NameList from './lib/NameList.svelte';

  console.log('la');

  let counter = 0;

  const incrementCount = () => {
    counter++;
  };
</script>

<main>
  <h1>Name List</h1>

  <button on:click={incrementCount}>
    {counter}
  </button>

  <div class="container">
    {#await fetchData()}
      <p>LOADING</p>
    {:then data}
      <NameList names={data} />
    {:catch error}
      <p>{error}</p>
    {/await}
  </div>
</main>

<style>
  .container {
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
