import { EmailRepository } from "../repositories/EmailRepository";
import { Email } from "../../domain/entities/Email";

export class ListAllEmailsUseCase {
  constructor(private emailRepository: EmailRepository) {}

  async execute(): Promise<Email[]> {
    return await this.emailRepository.findAll();
  }
}
