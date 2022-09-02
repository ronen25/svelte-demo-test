<script>
  import fetchData from './services/dataService';
  import NameList from './lib/NameList.svelte';

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

  <div>
    {#await fetchData()}
      <p>LOADING</p>
    {:then data}
      <NameList names={data} />
    {:catch error}
      <p>ERROR</p>
    {/await}
  </div>
</main>
