<script>
    import Wrapper from "../../components/containers/Wrapper.svelte"
    let rows = [5,2,3,4,1]
</script>
{#each rows as _,row}
<Wrapper>
    <h1 slot="title">Lista de productos</h1>
    <div slot="body">
       
       

    </div>
</Wrapper>
{/each}