import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { DogSeeder } from './DogSeeder';

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // you could generate dog data here, or you can create a separate seeder and call it here instead (breaks up logic nicely)
    return this.call(em, [DogSeeder]);
  }
}
