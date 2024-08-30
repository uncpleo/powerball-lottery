import { Ticket } from '../models/Ticket';
import { TicketRepository } from './TicketRepository';

export class DummyTicketRepository implements TicketRepository {
  private tickets: Ticket[] = [];

  async save(ticket: Ticket): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.tickets.push(ticket);
        resolve();
      }, 500);
    });
  }

  async findById(id: string): Promise<Ticket | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const ticket = this.tickets.find(t => t.id === id) || null;
        resolve(ticket);
      }, 500);
    });
  }
}
