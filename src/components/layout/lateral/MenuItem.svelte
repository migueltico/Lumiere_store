<script>
	//STORES
	import { lateral, Goslide } from "../../../stores/lateral";
	//imports
	import { link } from "svelte-routing";
	import { slide } from "svelte/transition";
	let toogle = false;
	export let icon = "";
	export let name = "";
	export let childrens;
	let firstTime = true;
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
	<div class="menu-item" on:click={toggleSubMenu} class:activeMenuItem>
		<div class="menu-item-container">
			<i class="fas fa-{icon}" />
			<span>{name}</span>
		</div>
	</div>
	{#if toogle}
		<ul class="submenu " transition:slide>
			{#each childrens as submenu}
				<li>
					<a href={submenu.link} use:link>{submenu.name}</a>
				</li>
			{/each}
		</ul>
	{/if}
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

	li ul li {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding-left: 35px;
		list-style: none;
		position: relative;
	}
	li ul li::after {
		content: "";
		position: absolute;
		width: 2px;
		height: 100%;
		background: var(--white_color);
		top: 0;
		left: 1.05rem;
	}
	li ul li::before {
		content: "";
		position: absolute;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--white_color);
		top: 12px;
		left: 0.9rem;
	}
	li ul li a {
		text-decoration: none;
		color: var(--white_color);
		padding: 5px 0;
	}
	li ul li:hover {
		background: var(--white_color);
		box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.2);
		border-radius: 6px;
		color: var(--blue_color_light);
	}
	li ul li:hover a {
		color: var(--blue_color_light);
		font-weight: 600;
	}
	li ul {
		width: 85%;
		border-radius: 6px;
		background: var(--blue_color_light);
		margin-top: 5px;
	}
</style>
