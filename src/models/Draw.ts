import { Ticket } from './Ticket';

export class Draw {
  drawDate: Date;
  tickets: Ticket[];

  constructor(drawDate: Date) {
    this.drawDate = drawDate;
    this.tickets = [];
  }

  validateTickets(): boolean {
    if (this.tickets.length > 1000) {
      throw new Error("Cannot have more than 1000 tickets for a draw.");
    }
    return this.tickets.every(ticket => ticket.validate());
  }

  addTicket(ticket: Ticket): void {
    if (this.tickets.length >= 1000) {
      throw new Error("Cannot add more than 1000 tickets to a draw.");
    }
    this.tickets.push(ticket);
  }
}
