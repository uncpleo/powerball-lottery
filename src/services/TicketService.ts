import { Ticket } from '../models/Ticket';
import { TicketRepository } from '../repositories/TicketRepository';

export class TicketService {
  private ticketRepository: TicketRepository;

  constructor(ticketRepository: TicketRepository) {
    this.ticketRepository = ticketRepository;
  }

  async requestTicketPurchase(ticket: Ticket): Promise<boolean> {
    const now = new Date();
    const purchaseTime = ticket.purchaseTime;
    const minPurchaseTime = new Date(now.getTime() - 60 * 60 * 1000);
  
    console.log('Current Time:', now);
    console.log('Purchase Time:', purchaseTime);
    console.log('Minimum Purchase Time:', minPurchaseTime);
  
    if (purchaseTime >= minPurchaseTime) {
      throw new Error("Ticket must be purchased at least 60 minutes before the drawing event.");
    }
  
    if (!ticket.validate()) {
      throw new Error("Invalid ticket.");
    }
  
    await this.ticketRepository.save(ticket);
    return true;
  }
  
}

