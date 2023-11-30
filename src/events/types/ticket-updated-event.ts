import { Subjects } from '../utils/subjects';

/**
 * Interface to define Ticket Created Event used as common module
 */
export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
