<script>
	import MenuItem from "./lateral/MenuItem.svelte";
	import MenuItem_alone from "./lateral/MenuItem_alone.svelte";
	//stores
	import { dataLinks } from "../../stores/lateral";
	//components
	import Logo from "../svg/Logo.svelte";

	let toogle = false;
	let DontShowOnLogin = location.pathname == "/";
	let childrens = $dataLinks;
	let show = false;

	let funciones = {
		cerrarSesion: () => {
			localStorage.removeItem("token");
			location.href = "/";
		},
	};

	$: {
		if (DontShowOnLogin) {
			show = false;
		} else {
			show = true;
		}
	}
	const toggleSubMenu = () => {
		toogle = !toogle;
	};
</script>

<!-- {#if show} -->
	<div class="menu_lateral">
		<div id="infoStore">
			<div id="logoWrapper">
				<Logo />
			</div>
			<div id="dropdown-info">
				<p>Lumière</p>
				<span>Alajuela</span>
			</div>
			<div id="icon-dropdown-info">
				<i class="fas fa-angle-up" />
				<i class="fas fa-angle-down" />
			</div>
		</div>
		<nav>
			<MenuItem
				on:click={toggleSubMenu}
				name={"Dashboard"}
				icon={"tachometer-alt"}
				childrens={childrens.dashboard}
			/>

			<MenuItem
				name={"Admin"}
				icon={"users-cog"}
				childrens={childrens.admin}
			/>
			<MenuItem
				name={"Facturacion"}
				icon={"calculator"}
				childrens={childrens.facturacion}
			/>
			<MenuItem
				name={"Inventario"}
				icon={"boxes"}
				childrens={childrens.inventario}
			/>
			<MenuItem
				name={"Clientes"}
				icon={"address-book"}
				childrens={childrens.facturacion}
			/>
			<MenuItem
				name={"Usuarios"}
				icon={"users"}
				childrens={childrens.facturacion}
			/>
			<MenuItem_alone
				name={"Cerrar Session"}
				icon={"window-close"}
				exce={funciones.cerrarSesion}
			/>
		</nav>
	</div>
<!-- {/if} -->

<style>
	nav {
		width: 100%;
		margin-top: 1.2rem;
	}
	.menu_lateral {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		position: relative;
		min-width: var(--menu_lateral_width);
		max-width: var(--menu_lateral_width);
		background: var(--blue_color);
		max-height: 100vh;
		min-height: 100vh;
		box-shadow: 2px 0 8px 1px rgba(0, 0, 0, 0.5);
		z-index: 1;
	}
	#logoWrapper {
		display: flex;
		justify-content: center;
		padding: 10px 10px;
		position: relative;
		border-radius: 6px;
		background: rgba(255, 255, 255, 0.2);
		margin: 10px;
	}
	#infoStore {
		display: flex;
		justify-content: space-between;
		width: 85%;
		padding: 10 10px;
		border-radius: 6px;
		background: rgba(255, 255, 255, 0.1);
		margin-top: 20px;
		box-shadow: 0 0 8px 1px rgba(37, 0, 138, 0.15);
		cursor: pointer;
	}
	#dropdown-info {
		display: flex;
		width: 100%;
		flex-direction: column;
		padding: 10 10px;
		margin: 10px;
		color: var(--white_color);
	}
	#dropdown-info p {
		font-weight: 600;
		font-size: 1.1rem;
	}
	#dropdown-info span {
		font-weight: 300;
	}
	#icon-dropdown-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 60px;
		padding: 10 10px;
		margin: 10px;
		color: var(--white_color);
	}
</style>
