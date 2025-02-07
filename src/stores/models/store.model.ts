export enum ProfileRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  POWER_USER = 'POWER USER',
}

export enum Language {
  DE = 'de-AT',
  EN = 'en-GB',
}

export interface AppStateModel {
  lang: Language
}

export interface AuthStateModel {
  isAuthenticated: boolean
  profileId: string
  profileRole: ProfileRole | null
}
