
export class StudentAPI {

    token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWNhY2lvbiI6MTAxNDIzNjU0NywiY29ycmVvIjoiam9uYXRoYW5mZWxpcGUwMTExQGhvdG1haWwuY29tIiwiaWF0IjoxNjgxNzc4OTMxLCJleHAiOjE2ODIzODM3MzF9.8ywshfGLoy-hhVVvo2893LfTEZJSAYnFjmjMoHZNh8M";
    urlApi:string = "https://apiestudiantes.maosystems.dev/estudiantes";
    
    public async getAllApi(): Promise<object> {
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + this.token);
        let requestOptions: RequestInit = {
            method: 'GET',
            headers: myHeaders,
            body: undefined,
            redirect: 'follow'
        };
        try {
            const response = await fetch(this.urlApi, requestOptions);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(`Error al obtener los datos: ${error}`);
        }
    }

    public async getById(id: number): Promise<object> {
        // implementación para obtener un estudiante por su id
        return {}
    }

    public async create(student: object): Promise<void> {
        // implementación para crear un nuevo estudiante
    }

    public async update(student: object): Promise<void> {
        // implementación para actualizar un estudiante existente
    }

    public async delete(id: number): Promise<void> {
        // implementación para eliminar un estudiante por su id
    }
}
