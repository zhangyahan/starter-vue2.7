import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '章三',
  }),
  getters: {
    getName: (state) => state.name,
  },
  actions: {
    setName(name: string) {
      this.name = name
    },
  },
})
