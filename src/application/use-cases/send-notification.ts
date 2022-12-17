import { Content } from '../entities/content';
import { Notification } from '../entities/Notification';
import {
  ISendNotificationRequest,
  ISendNotificationResponse,
} from './interfaces/ISendNotification';

export class SendNotification {
  async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    return {
      notification,
    };
  }
}
