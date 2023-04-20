export interface StudentDto {
    typeOfIdentification: number;
    identificationNumber: string;
    names: string;
    lastNames: string;
    cellphone: number;
    email: string;
    linkedinUrl: string;
    githubUrl: string;
    state?:string;
    creationDate?:string;
}