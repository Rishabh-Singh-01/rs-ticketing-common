import { Subjects } from '../utils/subjects';

/**
 * Interface to define Ticket Created Event used as common module
 */
export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    version: number;
    title: string;
    price: number;
    userId: string;
  };
}
