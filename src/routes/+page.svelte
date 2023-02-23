<script lang="ts">
  import { onMount } from "svelte";

  // let x = writable([]);
  let res: any[] = []

  async function get() {
    const response = await fetch("/api/ann", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    // console.log(await response.json())
    res = await response.json();

    // console.log(data);
    // res = data;
  }

  onMount(async () => {
    await get();
  });

  // onMount(() => {
  //   console.log(data);
  // });
</script>

<!-- <h1>{data.post.title}</h1>
<div>{@html data.post.content}</div> -->
<button on:click={get}>get</button>
<!-- <pre>{JSON.stringify(res, undefined, 2)}</pre> -->
<ul>
	{#each res as {id, remark}, index (id)}
		<li>{id} - {remark}</li>
	{/each}
</ul>
