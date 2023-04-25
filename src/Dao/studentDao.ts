import { StudentAPI } from '../Apis/studentApi.js';
import { StudentDto } from '../Dto/studentDto.js';


export class StudentDAO {
    public async getAll(): Promise<StudentDto[]> {
        try {
            const studentsResponse = await new StudentAPI().getAllApi();         
            const listStudensDto: StudentDto[] = studentsResponse.data.map((studentData: any) => ({
                names: studentData.estudiante_nombres,
                lastNames: studentData.estudiante_apellidos,
                cellphone: studentData.estudiante_celular,
                email: studentData.estudiante_correo,
                linkedinUrl: studentData.estudiante_linkedin,
                githubUrl: studentData.estudiante_github,
                state: studentData.estudiante_estado,
                creationDate: studentData.estudiante_fechaCreacion
            }));
            return listStudensDto;
        } catch (error) {
            console.error(`Error al obtener todos los estudiantes: ${error}`);
            return [];
        }
    }



    getById(id: number): StudentDto {
        // Código para obtener un estudiante por id
        return {} as StudentDto;
    }

    create(student: StudentDto): void {
        // Código para crear un nuevo estudiante
    }

    update(student: StudentDto): void {
        // Código para actualizar un estudiante existente
    }

    delete(id: number): void {
        // Código para eliminar un estudiante por id
    }
}