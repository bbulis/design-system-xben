import { defineStore } from 'pinia'
import { type AppStateModel, Language, profileRoleDtoToEnum } from '@/stores/models/store.model.ts'
import axios, { type AxiosResponse } from 'axios'
import { PathsEnum } from '@/services/models/paths.enum.ts'
import { LocalStorageEnum } from '@/stores/models/localStorage.enum.ts'
import type { AuthDataResponseModel } from '@/services/models/authDataResponse.model.ts'
import router from '@/router'
import type { DetailUserModel } from '@/services/models/detailUser.model.ts'

export const useAppStore = defineStore('application', {
  state: (): AppStateModel => {
    return {
      lang: Language.DE,
      errorCode: null,
      profile: null,
    }
  },
  getters: {
    isErrorCondition: (state): boolean => {
      return state.errorCode !== null
    },
    isLoggedIn: (state): boolean => {
      return state.profile?.id !== null && state.profile?.role !== null
    },
    fullName: (state): string => {
      return `${state.profile?.firstname} ${state.profile?.lastname}`
    },
  },
  actions: {
    resetErrorState() {
      this.errorCode = null
    },
    resetProfileState() {
      this.profile = null
    },
    login(email: string, password: string) {
      axios
        .post(PathsEnum.TOKEN, { email, password })
        .then((response) => {
          const data: AuthDataResponseModel = response.data
          localStorage.setItem(LocalStorageEnum.ACCESS, data.accessToken)
          localStorage.setItem(LocalStorageEnum.REFRESH, data.refreshToken)
          this.resetErrorState()
          router.push({ name: 'dashboard' }).then()
        })
        .catch((error: AxiosResponse) => {
          this.errorCode = error.status
          this.resetProfileState()
          router.push({ name: 'login' }).then()
        })
    },
    logout() {
      localStorage.removeItem(LocalStorageEnum.ACCESS)
      localStorage.removeItem(LocalStorageEnum.REFRESH)
      this.resetProfileState()
      this.resetErrorState()
      router.push({ name: 'login' }).then()
    },
    refresh() {
      axios
        .post(
          PathsEnum.REFRESH,
          { refreshToken: localStorage.getItem(LocalStorageEnum.REFRESH) },
          { headers: { Authorization: `Bearer ${localStorage.getItem(LocalStorageEnum.ACCESS)}` } },
        )
        .then((response) => {
          const data: AuthDataResponseModel = response.data
          localStorage.setItem(LocalStorageEnum.ACCESS, data.accessToken)
          localStorage.setItem(LocalStorageEnum.REFRESH, data.refreshToken)
          this.userInfo()
        })
        .catch((error: AxiosResponse) => {
          this.errorCode = error.status
          this.resetProfileState()
          router.push({ name: 'login' }).then()
        })
    },
    userInfo() {
      axios
        .get(PathsEnum.CURRENT_USER, {
          headers: { Authorization: `Bearer ${localStorage.getItem(LocalStorageEnum.ACCESS)}` },
        })
        .then((response) => {
          const data: DetailUserModel = response.data
          this.profile = {
            id: data.id,
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            gender: data.gender,
            role: profileRoleDtoToEnum(data.role),
            isApproved: data.isApproved,
            applicationAccess: data.applicationAccess,
          }
          this.resetErrorState()
        })
        .catch((error: AxiosResponse) => {
          this.errorCode = error.status
          this.refresh()
        })
    },
  },
})
