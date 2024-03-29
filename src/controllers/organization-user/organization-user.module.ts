import { Module } from '@nestjs/common';
import { OrganizationUserService } from './organization-user.service';
import { OrganizationUserResolver } from './organization-user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationUserEntity } from '../../entities/organization-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationUserEntity])],
  exports: [OrganizationUserService],
  providers: [OrganizationUserService, OrganizationUserResolver],
})
export class OrganizationUserModule {}
