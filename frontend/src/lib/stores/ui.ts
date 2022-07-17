import { writable } from 'svelte/store'

const isDark = writable<boolean>(true)

export { isDark }
