export class Email {
  constructor(public name: string, public address: string) {
    if (!this.isValidEmail(address)) {
      throw new Error("Invalid email address");
    }
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
