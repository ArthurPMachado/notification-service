import { Notification } from 'src/application/entities/Notification';

export interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

export interface ISendNotificationResponse {
  notification: Notification;
}
