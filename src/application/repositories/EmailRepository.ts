import { Email } from "../../domain/entities/Email";

export interface EmailRepository {
  save(email: Email): Promise<void>;
  findAll(): Promise<Email[]>;
  findByAddress(address: string): Promise<Email | null>;
}
