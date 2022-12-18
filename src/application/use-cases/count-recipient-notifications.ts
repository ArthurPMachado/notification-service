import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import {
  ICountRecipientNotificationsRequest,
  ICountRecipientNotificationsResponse,
} from './interfaces/ICountRecipientNotifications';

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ICountRecipientNotificationsRequest,
  ): Promise<ICountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
