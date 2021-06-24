<script>
	import { Router, Route } from "svelte-routing";
	import Layout from "./components/layout/Layout.svelte";
	import Login from "./pages/login/Login.svelte";
	//Componentes del Layout
	import Main from "./components/layout/Main.svelte";
	import LateralMenu from "./components/layout/LateralMenu.svelte";
</script>

<Router>
	<!-- LOGIN -->
	<Route path="/">
		<Login />
	</Route>
</Router>
<Router>
	<Main>
		<LateralMenu />

		<!-- EXTRA RUTAS -->

		<Route path="/dashboard">
			<Layout element={"dashboard"} />
		</Route>
		<Route path="/facturacion/facturar">
			<Layout element={"facturar"} />
		</Route>
		<Route path="/inventario/lista">
			<Layout element={"lista_productos"} />
		</Route>
	</Main>
</Router>

<style>
	:global(body) {
		width: 100%;
		height: 100%;

		font-family: "Source Sans Pro", sans-serif;
	}
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	:global(:root) {
		--black_color: #2f3542;
		--black_color_dark: #252a35;
		--black_color_light: #3b4150;

		--gray_color: #747d8c;
		--gray_color_dark: #57606f;
		--gray_color_light: #a4b0be;

		--fucsia_color: #ff4757;
		--fucsia_color_dark: #f73f4e;
		--fucsia_color_light: #ff6b81;

		--green_color: #2ed573;
		--green_color_dark: #25c266;
		--green_color_light: #7bed9f;

		--cyan_color: #1e90ff;
		--cyan_color_dark: #1886f3;
		--cyan_color_light: #6098ff;

		--red_color: #ff3f34;
		--red_color_dark: #f03a30;
		--red_color_light: #ff5e57;

		--yellow_color: #ffd32a;
		--yellow_color_dark: #eec627;
		--yellow_color_light: #ffdd59;

		--blue_color: #112d57;
		--blue_color_dark: #0c264d;
		--blue_color_light: #223d66;

		--blue2_color: #0064fe;
		--blue2_color_dark: #0059df;
		--blue2_color_light: #1472ff;

		--line_color: #dfe4ea;
		--line_color_dark: #ced6e0;
		--line_color_light: #f2f2f3;

		--white_color: #fff;
		--white_color_dark: rgb(248, 248, 248);

		--top_bar_height: 60px;
		--menu_lateral_width: 240px;
	}
</style>
