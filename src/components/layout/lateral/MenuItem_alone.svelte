<script>
	//STORES
	import { lateral, Goslide } from "../../../stores/lateral";
	//imports
	let toogle = false;
	export let icon = "";
	export let name = "";
	let firstTime = true;
	export let exce;
	let activeMenuItem;
	const toggleSubMenu = () => {
		lateral.set({ name });
		activeMenuItem = true;
		// Goslide.set(true)
	};

	$: {
		if ($lateral.name == name  && Goslide) {
			toogle = !toogle;
		} else {
			toogle = false;
		}
		activeMenuItem = toogle;
	}
</script>

<li class="main-li-item">
	<div class="menu-item" on:click={exce} class:activeMenuItem>
		<div class="menu-item-container">
			<i class="fas fa-{icon}" />
			<span>{name}</span>
		</div>
	</div>
</li>

<style>
	.activeMenuItem {
		background: var(--white_color);
		box-shadow: 0 0 8px 1px rgba(21, 0, 79, 0.15);
		color: var(--blue_color);
	}
	li.main-li-item {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		list-style: none;
		width: 100%;
		margin-bottom: 5px;
		color: var(--white_color);
	}
	li div.menu-item {
		display: flex;
		cursor: pointer;
		width: 85%;
		padding: 8px 20px 8px 10px;
		border-radius: 6px;
		transition: all ease-in-out 0.15s;
	}
	li div.menu-item:hover {
		background: var(--white_color);
		box-shadow: 0 0 8px 1px rgba(21, 0, 79, 0.15);
		color: var(--blue_color_light);
	}
	li div div.menu-item-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	li div div.menu-item-container i {
		margin-right: 0.8rem;
		font-size: 1.2rem;
	}
	li div div.menu-item-container span {
		margin-right: 0.8rem;
		font-size: 1.2rem;
	}


</style>
