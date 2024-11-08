import { EmailRepository } from "../../application/repositories/EmailRepository";
import { PrismaDatabase } from "../database/PrismaDatabase";
import { Email } from "../../domain/entities/Email";

export class PrismaEmailRepository implements EmailRepository {
  private prisma = PrismaDatabase.getInstance();

  async save(email: Email): Promise<void> {
    await this.prisma.email.create({
      data: { address: email.address, name: email.name },
    });
  }

  async findAll(): Promise<Email[]> {
    const records = await this.prisma.email.findMany();
    return records.map((record) => new Email(record.name, record.address));
  }

  async findByAddress(address: string): Promise<Email | null> {
    const record = await this.prisma.email.findUnique({ where: { address } });
    return record ? new Email(record.name, record.address) : null;
  }
}
