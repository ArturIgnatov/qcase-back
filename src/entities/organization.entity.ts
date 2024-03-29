import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from './base.entity';
import { ProjectEntity } from './project.entity';
import { OrganizationStatus } from '../interfaces/organization-status';
import { OrganizationUserEntity } from './organization-user.entity';
import { UserEntity } from './user.entity';
import { UserInviteEntity } from './user-invite.entity';
import { TestEntity } from './test.entity';
import { TagEntity } from './tag.entity';
import { TemplateEntity } from './template.entity';

@ObjectType()
@Entity('organizations')
export class OrganizationEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(() => OrganizationStatus)
  @Column({ enum: OrganizationStatus, default: OrganizationStatus.ACTIVE })
  status: string;

  @Field(() => ID)
  @Index()
  @Column('uuid', { nullable: true })
  createdUserId: string;

  @ManyToOne(() => UserEntity, { nullable: false, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'createdUserId' })
  user: UserEntity;

  @OneToMany(
    () => OrganizationUserEntity,
    (organizationUser) => organizationUser.organization,
  )
  organizationUsers: OrganizationUserEntity[];

  @OneToMany(() => ProjectEntity, (project) => project.organizationId)
  projects: ProjectEntity[];

  @OneToMany(() => TemplateEntity, (template) => template.organizationId)
  templates: TemplateEntity[];

  @OneToMany(() => TestEntity, (test) => test.organizationId)
  tests: TestEntity[];

  @OneToMany(() => TagEntity, (tag) => tag.organizationId)
  tags: TagEntity[];

  @OneToMany(() => UserInviteEntity, (invite) => invite.organizationId)
  userInvites: UserInviteEntity[];
}
