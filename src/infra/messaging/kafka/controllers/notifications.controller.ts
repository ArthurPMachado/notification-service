import { ISendNotificationPayload } from './interfaces/ISendNotificationPayload';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SendNotification } from '@application/use-cases/send-notification';

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { content, category, recipientId }: ISendNotificationPayload,
  ) {
    await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });
  }
}
