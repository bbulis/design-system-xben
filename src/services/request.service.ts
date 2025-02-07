import axios from 'axios'
import { TokenService } from '@/services/token.service.ts'

export class RequestService {
  apiPath = import.meta.env.VITE_BACKEND_SERVICE_URL
  tokenService = new TokenService()
  commonHeaders: { [key: string]: string } = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
  }

  async getWithAuth(path: string) {
    const url = this.apiPath + path

    const header = this.commonHeaders
    header['Authorization'] = `Bearer ${this.tokenService.accessToken()}`

    return await axios.get(url, {
      headers: header,
    })
  }

  async post(path: string, data: unknown) {
    const url = this.apiPath + path
    return await axios.post(url, data, {
      headers: this.commonHeaders,
    })
  }
}
