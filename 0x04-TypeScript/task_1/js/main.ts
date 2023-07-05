interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName.slice(0, 1).toUpperCase()}. ${lastName}`
}

class StudentClass {

    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently Working";
    }

    displayName(): string {
        return this.firstName;
    }
}