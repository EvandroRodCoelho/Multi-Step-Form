
export interface informationPessoalType {
    fullName:string,
    email:string,
    password:string,
    gender:string
}
export interface addressType {
    zipCode:string
    city:string,
    country:string,
    state:string,
  }

export interface socialProfileType {
    urlGitHub:string,
    urlLinkedin: string,
}

export interface UserProps {
    informationPessoal : informationPessoalType
    address: addressType
    socialProfile : socialProfileType
}
