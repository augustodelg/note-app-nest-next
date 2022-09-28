import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedNotesArchivedAtribute1664251501078 implements MigrationInterface {
    name = 'AddedNotesArchivedAtribute1664251501078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" ADD "archived" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "archived"`);
    }

}
