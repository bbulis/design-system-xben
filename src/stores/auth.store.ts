import { defineStore } from 'pinia'
import type { AuthStateModel } from '@/stores/models/store.model.ts'

export const useAuthStore = defineStore('authentication', {
  state: (): AuthStateModel => {
    return { isAuthenticated: false, profileId: '', profileRole: null }
  },
})
