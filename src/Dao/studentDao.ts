import { StudentDto } from '../Dto/studentDto';

export class StudentDAO {
    getAll(): StudentDto[] {
        // Código para obtener todos los estudiantes
    return [{}] as StudentDto[];
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