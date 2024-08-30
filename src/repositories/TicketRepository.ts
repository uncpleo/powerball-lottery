import { Ticket } from '../models/Ticket';

export interface TicketRepository {
  save(ticket: Ticket): Promise<void>;
  findById(id: string): Promise<Ticket | null>;
}
