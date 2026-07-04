import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRoleToAdminTable1763458071681 implements MigrationInterface {
    name = 'AddRoleToAdminTable1763458071681'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" ADD "role" character varying NOT NULL DEFAULT 'admin'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "role"`);
    }

}
