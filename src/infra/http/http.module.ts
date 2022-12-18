import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
