<script>
  export let names = [];

  const getDOBYear = (date) => {
    const parts = date.split('/');
    return parseInt(parts[2]);
  };
</script>

<h2>Names</h2>
{#each names as { first_name, last_name, dob }}
  <div class="name-container">
    <div class="name">{first_name} {last_name}</div>
    <div class={getDOBYear(dob) >= 1950 ? 'dob' : 'dob-really-old'}>{dob}</div>
  </div>
{/each}

<style>
  .name-container {
    display: flex;
    border: 1px solid black;
    padding: 4px;
    border-radius: 8px;
    align-items: center;
  }

  .name-container + .name-container {
    margin-top: 16px;
  }

  .name {
    font-size: 24px;
  }

  .dob {
    margin-left: 8px;
  }

  .dob-really-old {
    margin-left: 8px;
    color: red;
  }
</style>
