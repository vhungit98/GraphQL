import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { LessonModule } from './lesson/lesson.module';
import { Student } from './student/student.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'lesson',
      synchronize: true,
      entities: [
        Lesson,
        Student
      ],
      autoLoadEntities: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    LessonModule,
    StudentModule
  ],
})
export class AppModule { }

// type: 'mysql',
// host: 'localhost',
// port: 3306,
// username: 'root',
// database: 'taskmanagement',
// entities: [__dirname + '/../**/*.entity.ts'],
// synchronize: true,
// autoLoadEntities: true