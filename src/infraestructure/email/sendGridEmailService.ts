import sgMail from "@sendgrid/mail";
import {
  EmailOptions,
  IEmailService,
} from "../../domain/interfaces/IEmailService";

export class SendGridEmailService implements IEmailService {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  }

  async sendEmail(options: EmailOptions): Promise<void> {
    const msg = {
      to: options.to,
      from: options.from,
      subject: options.subject,
      text: options.text || "",
      html: options.html || "",
    };

    try {
      await sgMail.send(msg);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }
  }
}
