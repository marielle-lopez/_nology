import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { DogFactory } from './factories/DogFactory';

export class DogSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // we will is the Faker API to generate random values for a dog
    new DogFactory(em).make(10);
  }
}
