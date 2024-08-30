import { Request, Response } from 'express';
import { TicketService } from '../services/TicketService';
import { DummyTicketRepository } from '../repositories/DummyTicketRepository';
import { Ticket } from '../models/Ticket';
import { Line } from '../models/Line'; 

const ticketRepository = new DummyTicketRepository();
const ticketService = new TicketService(ticketRepository);

export const purchaseTicket = async (req: Request, res: Response) => {
  try {
    const { id, purchaseTime, lines } = req.body;
    const parsedLines = lines.map((line: any) => new Line(line.mainNumbers, line.powerballNumber));
    const ticket = new Ticket(id, new Date(purchaseTime), parsedLines);
    await ticketService.requestTicketPurchase(ticket);
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(400).send({ success: false, error: (error as Error).message });
  }
};