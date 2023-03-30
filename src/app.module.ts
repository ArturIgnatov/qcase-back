import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './controllers/users/users.module';
import { OrganizationsModule } from './controllers/organizations/organizations.module';
import { ProjectsModule } from './controllers/projects/projects.module';
import { AuthModule } from './controllers/auth/auth.module';
import { OrganizationUserModule } from './controllers/organization-user/organization-user.module';
import { TemplateModule } from './controllers/template/template.module';
import { GqlModule } from './gql/gql.module';
import { CaseModule } from './controllers/case/case.module';
import { TagsModule } from './controllers/tags/tags.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GqlModule,
    DatabaseModule,
    UsersModule,
    OrganizationsModule,
    OrganizationUserModule,
    ProjectsModule,
    AuthModule,
    TemplateModule,
    GqlModule,
    CaseModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
