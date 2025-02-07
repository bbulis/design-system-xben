export interface GeneralErrorModel extends Error {
  name: string
  responseCode: number
  displayText: string
}

export function GeneralError(code: number, msg: string, displayText: string) {
  const error = new Error(msg) as GeneralErrorModel
  error.displayText = displayText
  error.responseCode = code
  return error
}
