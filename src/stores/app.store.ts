import { defineStore } from 'pinia'
import { type AppStateModel, Language } from '@/stores/models/store.model.ts'

export const useAppStore = defineStore('application', {
  state: (): AppStateModel => {
    return {
      lang: Language.DE,
    }
  },
  getters: {},
  actions: {},
})
