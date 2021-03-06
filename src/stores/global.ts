import { defineStore } from 'pinia'
import { themeKey } from '@/config.js'

// export const useGlobal = defineStore('main', {
//   state: () => {
//     return {
//       /* Aside */
//       menuActive: false,

//       lockWidth: false,

//       theme: 'base',

//       /* Field focus with ctrl+k (to register only once) */
//       isFieldFocusRegistered: false
//     }
//   },
//   getters: {
//     isMenuActive: (state) => {
//       return state.menuActive
//     }
//   },
//   actions: {
//     toggleMenu(value?: boolean) {
//       this.$state.menuActive = value !== undefined ? value : !this.menuActive
//     },

//     // toggleDarkMode(value?: boolean) {
//     //   const v = value !== undefined ? value : !this.darkMode
//     //   document.documentElement.classList[v ? 'add' : 'remove']('dark')
//     //   localStorage.setItem(darkModeKey, v ? '1' : '0')
//     //   this.$state.darkMode = v
//     // },

//     changeTheme(value?: string) {
//       const v = value !== undefined ? value : 'base'
//       document.documentElement.classList.remove(this.$state.theme)
//       document.documentElement.classList.add(v)
//       localStorage.setItem(themeKey, v)
//       this.$state.theme = v
//     }
//   }
// })

export const useGlobal = defineStore('main', () => {

  /* Aside */
  const menuActive = ref<boolean>(false)
  const lockWidth = ref<boolean>(false)
  const theme = ref<string>('base')
  /* Field focus with ctrl+k (to register only once) */
  const isFieldFocusRegistered = ref<boolean>(false)

  
  const toggleMenu = (value?: boolean) => {
    menuActive.value = value !== undefined ? value : !menuActive.value
  }

  const changeTheme = (value?: string) => {
    const v = value !== undefined ? value : 'base'
    document.documentElement.classList.remove(theme.value)
    document.documentElement.classList.add(v)
    localStorage.setItem(themeKey, v)
    theme.value = v
  }
  
  return {
    menuActive,
    lockWidth,
    theme,
    isFieldFocusRegistered,
    toggleMenu,
    changeTheme
  }
})
