import {
  EmailOptions,
  IEmailService,
} from "../../domain/interfaces/IEmailService";

export class SendEmailUseCase {
  private emailService: IEmailService;

  constructor(emailService: IEmailService) {
    this.emailService = emailService;
  }

  async execute(emailOptions: EmailOptions): Promise<void> {
    await this.emailService.sendEmail(emailOptions);
  }
}
