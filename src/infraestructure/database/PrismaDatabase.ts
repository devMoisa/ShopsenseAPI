import { PrismaClient } from "@prisma/client";

export class PrismaDatabase extends PrismaClient {
  private static instance: PrismaDatabase;

  private constructor() {
    super();
  }

  public static getInstance(): PrismaDatabase {
    if (!PrismaDatabase.instance) {
      PrismaDatabase.instance = new PrismaDatabase();
    }
    return PrismaDatabase.instance;
  }

  async connect() {
    await this.$connect();
  }

  async disconnect() {
    await this.$disconnect();
  }
}
