import { MigrationInterface, QueryRunner } from "typeorm";

export class NoteSCreatedAtAndUpdatedAt1664226041842 implements MigrationInterface {
    name = 'NoteSCreatedAtAndUpdatedAt1664226041842'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "notes" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "notes" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "notes" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "notes" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "notes" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
