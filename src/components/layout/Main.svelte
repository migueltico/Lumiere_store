<script>
	import { isLogin } from "../../stores/login";

    let show = false

    $:{
        if(isLogin){
            show = true
        }else{
            show = false
        }
    }
</script>

{#if show}
	<main class="main_container">
		<slot />
	</main>
{/if}

<style>
	.main_container {
		display: flex;
		flex-direction: row;
		width: 100%;
		min-height: 100%;
	}
</style>
