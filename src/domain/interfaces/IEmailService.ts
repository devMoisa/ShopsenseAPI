export interface EmailOptions {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export interface IEmailService {
  sendEmail(options: EmailOptions): Promise<void>;
}
