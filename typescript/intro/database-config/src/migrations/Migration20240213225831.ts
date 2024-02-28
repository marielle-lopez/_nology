import { Migration } from '@mikro-orm/migrations';

export class Migration20240213225831 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `dogs` add `age` int not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `dogs` drop column `age`;');
  }

}
