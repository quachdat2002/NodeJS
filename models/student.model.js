class Student {
    Student() {
    this.id = '';
    this.code = '';
    this.gender = '';
    this.age = age;
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
    this.picture = '';
    this.email = '';
    this.dob = '';
    }

    getInfo() {
        return { 
            id: this.id,
            code: this.code,
            gender: this.gender,
            age: this.age,
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            picture: this.picture,
            email: this.email,
            dob: this.dob
        };
    }
}

module.exports = Student;