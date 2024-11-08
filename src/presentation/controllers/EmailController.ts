import { NextFunction, Request, Response } from "express";
import { CaptureEmailUseCase } from "../../application/usecases/CaptureEmailUseCase";
import { PrismaEmailRepository } from "../../infraestructure/database/PrismaEmailRepository";
import { ListAllEmailsUseCase } from "../../application/usecases/ListAllEmailsUseCase";
import { SendGridEmailService } from "../../infraestructure/email/sendGridEmailService";
import { SendEmailUseCase } from "../../application/usecases/SendEmailUseCase";

const emailRepository = new PrismaEmailRepository();
const captureEmailUseCase = new CaptureEmailUseCase(emailRepository);
const listEmailsUseCase = new ListAllEmailsUseCase(emailRepository);

export class EmailController {
  constructor(
    private readonly sendEmailUseCase: SendEmailUseCase = new SendEmailUseCase(
      new SendGridEmailService()
    )
  ) {}

  static async captureEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    const { name, email } = req.body;
    try {
      await captureEmailUseCase.execute(name, email);
      return res.status(201).json({ message: "Email captured successfully" });
    } catch (error: any) {
      return next(error);
    }
  }

  static async listEmails(req: Request, res: Response): Promise<Response> {
    try {
      const emails = await listEmailsUseCase.execute();
      return res.status(200).json({ emails });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async sendEmail(req: Request, res: Response): Promise<Response> {
    const { to, from, subject, text, html } = req.body;
    const emailService = new SendGridEmailService();
    const sendEmailUseCase = new SendEmailUseCase(emailService);

    try {
      await sendEmailUseCase.execute({ to, from, subject, text, html });
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
