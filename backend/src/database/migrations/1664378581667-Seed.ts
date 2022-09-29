import { MigrationInterface, QueryRunner } from "typeorm";

export class Seed1664378581557 implements MigrationInterface {
  name = 'Seed1664378581667'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`insert into "notes" ("archived", "content", "created_at", "id", "title", "updated_at") values (false, 'It can be tricky to evaluate students’ knowledge of basic math operations. Sometimes, students copy each other’s answers. Or, some students are at different levels of mastery than others. Our math tests make it easy to meet each student where they are and evaluate their progress. ', '2022-09-28 23:30:18.780442+00', '6e405abe-5d93-45f1-8fb7-e0528fde690e', 'Math test 📃', '2022-09-28 23:30:18.780442+00')`)
    await queryRunner.query(`insert into "notes" ("archived", "content", "created_at", "id", "title", "updated_at") values (false, 'When you look out the window and see gray skies, and temperatures have been near zero for weeks on end then you know that the time has come to plan your next vacation. Many people use travel portals before booking their trip, or inform themselves about possible travel destinations in travel blogs. An important part of the pages are descriptions of destinations and travel texts. They provide the reader with background information, practical tips and get him in the mood for a holiday as well as offering good decision guidance.', '2022-09-28 23:32:16.660695+00', '9a090d99-4e1c-43f7-bfdb-bf9c5367d6dd', 'Travel  🏄🏿‍♂️', '2022-09-28 23:32:16.660695+00')`)
    await queryRunner.query(`insert into "notes" ("archived", "content", "created_at", "id", "title", "updated_at") values (false, 'The Chemistry exam covers material that is usually taught in a one-year college course in general chemistry. Understanding of the structure and states of matter, reaction types, equations and stoichiometry, equilibrium, kinetics, thermodynamics, and descriptive and experimental chemistry is required, as is the ability to interpret and apply this material to new and unfamiliar problems. During this exam, an online scientific calculator function and a periodic table are available as part of the testing software.', '2022-09-28 23:33:54.757039+00', '2774bd05-9da9-49c5-8075-3ddef4a63a9b', 'chemistry test 👩🏿‍🔬', '2022-09-28 23:33:54.757039+00')`)
    await queryRunner.query(`insert into "notes" ("archived", "content", "created_at", "id", "title", "updated_at") values (true, 'Mount Everest attracts many climbers, including highly experienced mountaineers. There are two main climbing routes, one approaching the summit from the southeast in Nepal (known as the "standard route") and the other from the north in Tibet. While not posing substantial technical climbing challenges on the standard route, Everest presents dangers such as altitude sickness, weather, and wind, as well as hazards from avalanches and the Khumbu Icefall. As of 2019, over 300 people have died on Everest,[4] many of whose bodies remain on the mountain', '2022-09-28 23:40:21.791823+00', 'c518c276-a727-4655-8433-f722e4131d36', 'Last vacations 🧗🏿', '2022-09-28 23:40:43.709023+00')`)

    await queryRunner.query(`insert into "tags" ("id", "name") values ('69c5fb31-1b2b-4831-bd34-efb73c34ef71', 'test');
    insert into "tags" ("id", "name") values ('c34e19ba-367b-4ef9-bbe5-9f683e7189d8', 'travel');`);
    await queryRunner.query(`insert into "notes_tags_tags" ("notesId", "tagsId") values ('2774bd05-9da9-49c5-8075-3ddef4a63a9b', '69c5fb31-1b2b-4831-bd34-efb73c34ef71');
    insert into "notes_tags_tags" ("notesId", "tagsId") values ('6e405abe-5d93-45f1-8fb7-e0528fde690e', '69c5fb31-1b2b-4831-bd34-efb73c34ef71');
    insert into "notes_tags_tags" ("notesId", "tagsId") values ('9a090d99-4e1c-43f7-bfdb-bf9c5367d6dd', 'c34e19ba-367b-4ef9-bbe5-9f683e7189d8');
    insert into "notes_tags_tags" ("notesId", "tagsId") values ('c518c276-a727-4655-8433-f722e4131d36', 'c34e19ba-367b-4ef9-bbe5-9f683e7189d8');`)

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('truncate table "notes_tags_tags" cascade');
    await queryRunner.query('truncate table "notes"');
    await queryRunner.query('truncate table "tags"');
  }

}
