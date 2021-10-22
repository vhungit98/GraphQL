import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student) private studentRepository: Repository<Student>
    ) { }

    async getStudent(id: string): Promise<Student> {
        return this.studentRepository.findOne({ id });
    }

    async getStudents(): Promise<Student[]> {
        return this.studentRepository.find();
    }

    async findAll(): Promise<Student[]> {
        return this.studentRepository.find({ id: "57c645e8-6e57-4094-9ab6-34a14e872a48" });
    }

    async createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
        const { firstName, lastName } = createStudentInput;
        const student = this.studentRepository.create({
            id: uuid(),
            firstName,
            lastName
        });
        return this.studentRepository.save(student);
    }
}
