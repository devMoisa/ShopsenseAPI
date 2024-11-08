import { EmailRepository } from "../repositories/EmailRepository";
import { Email } from "../../domain/entities/Email";

export class CaptureEmailUseCase {
  constructor(private emailRepository: EmailRepository) {}

  async execute(name: string, emailAddress: string): Promise<void> {
    const email = new Email(name, emailAddress);
    await this.emailRepository.save(email);
  }
}
