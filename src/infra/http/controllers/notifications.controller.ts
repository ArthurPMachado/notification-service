import { CreateNotificationBody } from '../dtos/create-notification-body';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('notifications')
export class NotificationsController {
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
  }
}
