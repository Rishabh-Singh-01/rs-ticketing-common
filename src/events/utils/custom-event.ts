import { Subjects } from './subjects';

/**
 * Defining simple Custom Event for internal use
 */
export interface CustomEvent {
  subject: Subjects;
  data: any;
}
