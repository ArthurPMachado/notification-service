import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['wanted-newt-11561-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'd2FudGVkLW5ld3QtMTE1NjEkfJ79oUN_k82Dsx7X4mDEFr8qRp6i1fsd-5C8y8U',
          password:
            '1ETwrGyUY1B9nTBs8RaIxknkaEo_I_nXXZ9ZqLdCaCoQefBerxOU4xqvSfjAiR3203d1Pw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
