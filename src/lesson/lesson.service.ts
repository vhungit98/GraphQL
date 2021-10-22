import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>
    ) { }

    async getLesson(id: string): Promise<Lesson> {
        return this.lessonRepository.findOne({ id });;
    }

    async getLessons(): Promise<Lesson[]> {
        return this.lessonRepository.find();
    }

    async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
        const { name, startDate, endDate } = createLessonInput;
        const lesson = this.lessonRepository.create({
            id: uuid(),
            name,
            startDate,
            endDate
        });
        return this.lessonRepository.save(lesson);
    }

    async findOneById(id: number): Promise<Lesson> {
        const found = await this.lessonRepository.findOne(id);
        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found!`);
        }
        return found;
    }
}
