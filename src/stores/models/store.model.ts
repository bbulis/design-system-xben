import { GeneralError } from '@/services/exceptions/General.error.ts'
import { ErrorTextsEnum } from '@/services/exceptions/errorTexts.enum.ts'

export enum ProfileRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  POWER_USER = 'POWER USER',
}

export function profileRoleDtoToEnum(role: string): ProfileRole {
  switch (role) {
    case 'ADMIN':
      return ProfileRole.ADMIN
    case 'USER':
      return ProfileRole.USER
    case 'POWER USER':
      return ProfileRole.POWER_USER
    default:
      throw GeneralError(500, `role not found ${role}`, ErrorTextsEnum.GENERAL_ERROR_MSG)
  }
}

export enum Language {
  DE = 'de-AT',
  EN = 'en-GB',
}

export interface Profile {
  id: string | null
  firstname: string | null
  lastname: string | null
  gender: string | null
  email: string | null
  isApproved: boolean | null
  role: ProfileRole | null
  applicationAccess: string[] | null
}

export interface AppStateModel {
  lang: Language
  errorCode: number | null
  profile: Profile | null
}
