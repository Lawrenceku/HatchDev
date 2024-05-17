class HatchDevClass{
    private pupils: string[] = []

    constructor (students: string[]){
        this.pupils = students
    }
    getStudentNames(){
        return this.pupils
    }
    getTotalNumberOfStudents(){
        return this.pupils.length;
    }

}

const excelSheet: Array<string> = ['Lawrence', 'Eniola', 'Kunmilola', 'Segun']
const HC = new HatchDevClass(excelSheet)

console.log(HC['puils'])