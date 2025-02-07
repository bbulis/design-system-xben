export class TokenService {
  putAccessToken(token: string) {
    localStorage.setItem('XBEN_ACCESS_TOKEN', token)
  }

  putRefreshToken(token: string) {
    localStorage.setItem('XBEN_REFRESH_TOKEN', token)
  }

  accessToken(): string | null {
    return localStorage.getItem('XBEN_ACCESS_TOKEN')
  }

  refreshToken(): string | null {
    return localStorage.getItem('XBEN_REFRESH_TOKEN')
  }
}
