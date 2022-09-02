<script>
  import fetchData from './services/dataService';
  import NameList from './lib/NameList.svelte';
</script>

<main>
  <h1>Name List</h1>
  {#await fetchData()}
    <p>LOADING</p>
  {:then data}
    <NameList names={data} />
  {:catch error}
    <p>ERROR</p>
  {/await}
</main>
