import type { GeneralErrorModel } from '@/services/exceptions/General.error.ts'

export function AuthError(code: number, msg: string, displayText: string) {
  const error = new Error(msg) as GeneralErrorModel
  error.name = 'AuthError'
  error.responseCode = code
  error.displayText = displayText
  return error
}
