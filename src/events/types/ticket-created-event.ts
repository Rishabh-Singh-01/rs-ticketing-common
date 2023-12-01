import { Subjects } from '../utils/subjects';

/**
 * Interface to define Ticket Created Event used as common module
 */
export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
