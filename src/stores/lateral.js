import { writable } from "svelte/store";
export const lateral = writable({
	name: "",
});
export const Goslide = writable(true);
export const dataLinks = writable({
	dashboard: [
		{
			name: "Descuentos",
			link: "/dashboard",
		},
	],
	admin: [
		{
			name: "General",
			link: "/dashboard",
		},
		{
			name: "Gastos",
			link: "/dashboard",
		},
		{
			name: "Categorias de precios",
			link: "/dashboard",
		},
		{
			name: "Categorias y Tallas",
			link: "/dashboard",
		},
		{
			name: "Descuentos",
			link: "/dashboard",
		},
		{
			name: "Descuentos por lote",
			link: "/dashboard",
		},
	],
	facturacion: [
		{
			name: "Facturar",
			link: "/facturacion/facturar",
		},
		{
			name: "Cajas",
			link: "/facturacion/facturar",
		},
		{
			name: "Cajas",
			link: "/facturacion/facturar",
		},
	],
	inventario: [
		{
			name: "Lista de Productos",
			link: "/inventario/lista",
		},
		{
			name: "Cajas",
			link: "/facturacion/facturar",
		},
		{
			name: "Cajas",
			link: "/facturacion/facturar",
		},
	],
});
