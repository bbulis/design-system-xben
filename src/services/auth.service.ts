import type { AuthDataResponseModel } from '@/services/models/AuthDataResponse.model.ts'
import { AuthError } from '@/services/exceptions/Auth.error.ts'
import { GeneralError } from '@/services/exceptions/General.error.ts'
import { RequestService } from '@/services/request.service.ts'
import { PathsEnum } from '@/services/paths.enum.ts'
import { TokenService } from '@/services/token.service.ts'
import { useAuthStore } from '@/stores/auth.store.ts'

export class AuthService {
  apiPath = import.meta.env.VITE_BACKEND_SERVICE_URL

  requestServie = new RequestService()
  tokenService = new TokenService()
  authStore = useAuthStore()

  async login(email: string, password: string) {
    const authResponse = await this.requestServie.post(PathsEnum.LOGIN, {
      email: email,
      password: password,
    })
    switch (authResponse.status) {
      case 200: {
        const authData: AuthDataResponseModel = authResponse.data
        this.tokenService.putAccessToken(authData.accessToken)
        this.tokenService.putRefreshToken(authData.refreshToken)
        this.authStore.$patch({
          isAuthenticated: true,
        })
        break
      }
      case 403: {
        throw AuthError(403, 'password incorrect', 'Passwort ist falsch. Bitte erneut versuchen')
      }
      case 404: {
        throw AuthError(
          404,
          'user not found',
          'Der Benutzer wurde nicht gefunden. Bitte überprüfen Sie erneut Ihre eingaben',
        )
      }
      default: {
        throw GeneralError(
          500,
          'server error',
          'Bei der Anmeldung ist ein Fehler aufgetreten. Bitte später nochmal versuchen',
        )
      }
    }
  }
}
