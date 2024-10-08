import { TicketService } from '../src/services/TicketService';
import { DummyTicketRepository } from '../src/repositories/DummyTicketRepository';
import { Ticket } from '../src/models/Ticket';
import { Line } from '../src/models/Line';

describe('TicketService', () => {
  let ticketService: TicketService;

  beforeEach(() => {
    const ticketRepository = new DummyTicketRepository();
    ticketService = new TicketService(ticketRepository);
  });

  it('should allow a valid ticket to be purchased', async () => {
    const lines = [new Line([1, 2, 3, 4, 5], 10)];
    const ticket = new Ticket('123', new Date(Date.now() - 100 * 60 * 1000), lines);
    const result = await ticketService.requestTicketPurchase(ticket);
    expect(result).toBe(true);
  });

  it('should throw an error if the ticket has more than 5 lines', async () => {
    const lines = Array(6).fill(new Line([1, 2, 3, 4, 5], 10));
    const ticket = new Ticket('123', new Date(Date.now() - 100 * 60 * 1000), lines); 
    await expect(ticketService.requestTicketPurchase(ticket)).rejects.toThrow("A ticket cannot have more than 5 lines.");
  });

  it('should throw an error if the ticket is purchased less than 60 minutes before the drawing event', async () => {
    const lines = [new Line([1, 2, 3, 4, 5], 10)];
    const ticket = new Ticket('123', new Date(), lines);
    await expect(ticketService.requestTicketPurchase(ticket)).rejects.toThrow("Ticket must be purchased at least 60 minutes before the drawing event.");
  });
});
