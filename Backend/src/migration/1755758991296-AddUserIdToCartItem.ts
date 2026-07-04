import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserIdToCartItem1755758991296 implements MigrationInterface {
    name = 'AddUserIdToCartItem1755758991296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_item" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "stock" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart_item" ADD CONSTRAINT "FK_158f0325ccf7f68a5b395fa2f6a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_item" DROP CONSTRAINT "FK_158f0325ccf7f68a5b395fa2f6a"`);
        await queryRunner.query(`ALTER TABLE "product" ALTER COLUMN "stock" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart_item" DROP COLUMN "userId"`);
    }

}
