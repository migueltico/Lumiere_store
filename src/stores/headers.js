import {
    writable
} from "svelte/store";
export const origin = writable('http://localhost:5000')
export const databasesArray = writable([{
        id: 0,
        text: `Seleccione una Sucursal`
    },
    {
        id: "TestDB",
        text: `TestDB`
    },
    {
        id: "Alajuela",
        text: `Alajuela`
    },
])