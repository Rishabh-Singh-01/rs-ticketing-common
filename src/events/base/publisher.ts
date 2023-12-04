import { Stan } from 'node-nats-streaming';
import { CustomEvent } from '../utils/custom-event';

/**
 * Abstract class to publish custom events to a certain subject or channel in nats streaming server
 */
export abstract class Publisher<T extends CustomEvent> {
  abstract subject: T['subject'];
  protected client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  publish(data: T['data']): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) return reject(err);

        console.log('Event published to subject ', this.subject);
        resolve();
      });
    });
  }
}
