import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedTagAndRelationWithNote1664378581557 implements MigrationInterface {
    name = 'CreatedTagAndRelationWithNote1664378581557'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255) NOT NULL, CONSTRAINT "UQ_d90243459a697eadb8ad56e9092" UNIQUE ("name"), CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "notes_tags_tags" ("notesId" uuid NOT NULL, "tagsId" uuid NOT NULL, CONSTRAINT "PK_0beae8d0213c34bde1848bf3968" PRIMARY KEY ("notesId", "tagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ecab2164a737ad80d20473a854" ON "notes_tags_tags" ("notesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_73b4ac77863bbd1ce872449667" ON "notes_tags_tags" ("tagsId") `);
        await queryRunner.query(`ALTER TABLE "notes_tags_tags" ADD CONSTRAINT "FK_ecab2164a737ad80d20473a854a" FOREIGN KEY ("notesId") REFERENCES "notes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "notes_tags_tags" ADD CONSTRAINT "FK_73b4ac77863bbd1ce872449667e" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notes_tags_tags" DROP CONSTRAINT "FK_73b4ac77863bbd1ce872449667e"`);
        await queryRunner.query(`ALTER TABLE "notes_tags_tags" DROP CONSTRAINT "FK_ecab2164a737ad80d20473a854a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_73b4ac77863bbd1ce872449667"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ecab2164a737ad80d20473a854"`);
        await queryRunner.query(`DROP TABLE "notes_tags_tags"`);
        await queryRunner.query(`DROP TABLE "tags"`);
    }

}
