import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

// what we want the dogs table to look like in the database
// table name is plural by convention, if no argument is passed, the default name will be the class Name
@Entity({ tableName: 'dogs' })
export class Dog {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  breed: string;

  @Property()
  age: number;
}
