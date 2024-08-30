import { Ticket } from '../models/Ticket';
import { TicketRepository } from '../repositories/TicketRepository';

export class TicketService {
  private ticketRepository: TicketRepository;

  constructor(ticketRepository: TicketRepository) {
    this.ticketRepository = ticketRepository;
  }

  async requestTicketPurchase(ticket: Ticket): Promise<boolean> {
    if (!ticket.validate()) {
      throw new Error("Invalid ticket.");
    }
    await this.ticketRepository.save(ticket);
    return true;
  }
}
