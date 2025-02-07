import axios from 'axios'

export class UserService {
  apiPath = import.meta.env.VITE_BACKEND_SERVICE_URL

  async login(mail: string, password: string) {
    const url = this.apiPath + '/login'
    return await axios.post(
      url,
      { email: mail, password },
      { headers: { 'Content-Type': 'application/json' } },
    )
  }
}
