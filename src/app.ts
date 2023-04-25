import { StudentDAO } from "./Dao/studentDao.js"
const btnListStudents = document.getElementById("btListStudents");

/* btnListStudents?.addEventListener("click", () => {
    const listStudents = document.getElementById("listStudents");
    const stDao = new StudentDAO();    
    stDao.getAll()
        .then(data => {
            const info = `
                <p>Nombre: ${data[0].names}</p>
                <p>Apellidos: ${data[0].lastNames}</p>
                <p>Teléfono: ${data[0].cellphone}</p>
                <p>Correo electrónico: ${data[0].email}</p>
                <p>URL de LinkedIn: ${data[0].linkedinUrl}</p>
                `;          
            listStudents.innerHTML= info;
        })
        .catch(error => {
        console.error("Ocurrió un error al obtener los datos:", error);
    });
}) */

btnListStudents?.addEventListener("click", async () => {
    const listStudents = document.getElementById("listStudents");
    const stDao = new StudentDAO();
    try {
        const data = await stDao.getAll();
        const studens = data
            .map(student => `   
            <blockquote data-theme="dark">
                <p>Nombre: ${student.names}</p>
                <p>Apellidos: ${student.lastNames}</p>
                <p>Teléfono: ${student.cellphone}</p>
                <p>Correo electrónico: ${student.email}</p>
                <a>URL de LinkedIn: ${student.linkedinUrl}</a>
            </blockquote>
        `)
        .join("");
        listStudents.innerHTML = studens;
    } catch (error) {
        console.error("Ocurrió un error al obtener los datos:", error);
    }
});



