export class StudentAPI {
    public async getAll(): Promise<object[]> {
        // implementación para obtener todos los estudiantes
        return [];
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
