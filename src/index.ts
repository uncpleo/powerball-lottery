import express from 'express';
import { purchaseTicket } from './controllers/TicketController';

const app = express();
app.use(express.json());

app.post('/RequestTicketPurchase', purchaseTicket);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});