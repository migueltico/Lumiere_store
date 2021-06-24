<script>
    //Svelte Imports
    import { navigate } from "svelte-routing";
    import { onMount } from "svelte";
    //STORES
    import { origin } from "../../stores/headers";
    //Componentes del Layout
    import Main from "./Main.svelte";
    import Container from "./Container.svelte";
    import LateralMenu from "./LateralMenu.svelte";

    //Lista de componentes
    import Dashboard from "../../pages/dashboard/Dashboard.svelte";
    import Facturar from "../../pages/facturacion/Facturar.svelte";
    import lista_productos from "../../pages/inventario/lista_productos.svelte";

    let components ={
        dashboard_Element:Dashboard,
        facturar_Element:Facturar,
        lista_productos_Element:lista_productos,
    }

    export let element;

    onMount(async () => {
        let token = localStorage.getItem("token");
        console.log(token);
        if (
            token !== "" ||
            token !== undefined ||
            token != "undefine" ||
            token !== null
        ) {
            let token = localStorage.getItem("token");
            let originUrl = $origin;
            let tokenData = !(
                token == "" ||
                token == undefined ||
                token == "undefine" ||
                token == null
            )
                ? `bearer ${token}`
                : "";
            const res = await fetch(`http://localhost/api/verify`, {
                method: "POST",
                headers: {
                    Authorization: tokenData,
                    origin: originUrl,
                },
            });
            let data = await res.json();
            if (!data.auth) {
                // navigate("/", { replace: true });
            location.href="/"
            }
        } else {
            console.log("AA");
            // navigate("/", { replace: true });
            location.href="/"
        }
    });


</script>


         
    <Container >
        <svelte:component this={components[element+'_Element']} />
    </Container>