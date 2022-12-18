import { Notification } from '@application/entities/Notification';

export interface IGetRecipientNotificationsRequest {
  recipientId: string;
}

export interface IGetRecipientNotificationsResponse {
  notifications: Notification[];
}
