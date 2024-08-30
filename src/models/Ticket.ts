import { Line } from './Line';

export class Ticket {
  id: string;
  purchaseTime: Date;
  lines: Line[];

  constructor(id: string, purchaseTime: Date, lines: Line[]) {
    this.id = id;
    this.purchaseTime = purchaseTime;
    this.lines = lines;
  }

  validate(): boolean {
    if (this.lines.length > 5) {
      throw new Error("A ticket cannot have more than 5 lines.");
    }
    return this.lines.every(line => line.isValid());
  }

  addLine(line: Line): void {
    if (this.lines.length >= 5) {
      throw new Error("Cannot add more than 5 lines to a ticket.");
    }
    this.lines.push(line);
  }
}
