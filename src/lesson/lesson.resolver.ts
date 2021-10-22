import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
// import { StudentService } from "src/student/student.service";
import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver {
    constructor(
        private lessonService: LessonService,
        // private studentService: StudentService
    ) {

    }
    @Query(returns => LessonType)
    lesson(
        @Args('id') id: string,
    ) {
        return this.lessonService.getLesson(id);
    }

    @Query(returns => [LessonType])
    lessons() {
        return this.lessonService.getLessons();
    }

    @Mutation(returns => LessonType)
    createLesson(
        // @Args('name') name: string,
        // @Args('startDate') startDate: string,
        // @Args('endDate') endDate: string,
        @Args('createLessonInput') createLessonInput: CreateLessonInput,

    ) {
        return this.lessonService.createLesson(createLessonInput);
    }

    // @Query('lesson')
    // async getLesson(@Args('id') id: number) {
    //     return this.lessonService.findOneById(id);
    // }
}