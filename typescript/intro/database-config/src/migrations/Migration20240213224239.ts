import { Migration } from '@mikro-orm/migrations';

export class Migration20240213224239 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `dogs` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `breed` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
  }

}
