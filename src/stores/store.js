import {
    persistStore,
} from "./persistStore"

const defaultData = [{
    username: '',
    id: '',
    db: ''
}]

export const store = persistStore('user', defaultData)