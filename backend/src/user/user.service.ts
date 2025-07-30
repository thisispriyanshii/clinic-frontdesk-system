import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {
    this.createInitialUser();
  }

  async findByUsername(username: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { username } });
  }

  async createInitialUser() {
    const existing = await this.findByUsername('frontdesk');
    if (!existing) {
      const hashed = await bcrypt.hash('password123', 10);
      const user = this.userRepo.create({ username: 'frontdesk', password: hashed });
      await this.userRepo.save(user);
      console.log('✅ Initial user created');
    }
  }
}
