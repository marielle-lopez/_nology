import { Factory } from '@mikro-orm/seeder';
import { Dog } from '../../dogs/entities/dog.entity';
import { faker } from '@faker-js/faker/locale/en_AU';

export class DogFactory extends Factory<Dog> {
  model = Dog;

  // partial means not all of the data to make a dog (we aren't making the id ourselves)
  definition(): Partial<Dog> {
    return {
      name: faker.person.firstName(),
      breed: faker.animal.dog(),
      age: faker.number.int({ min: 1, max: 20 }),
    };
  }
}
