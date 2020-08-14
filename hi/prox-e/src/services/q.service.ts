import motherLogger from '../logger';
import { FsService } from "./fs.service";

export class QService extends FsService {

    protected readonly logger = motherLogger.child({ file: 'QService' });

    private readonly clients: string[] = [''];

    constructor() {
        super();
    }

    getQueue(clientQueue: string): any {
        if (!this.clients.find(v => v === clientQueue)) this.clients.push(clientQueue);
        return this.queueServiceClient.getQueClient(clientQueue);
    }

    get queueServiceClient(): any {
        return this.queueServiceClient;
    }

    createQueue() {
        const queueName = `newqueue${new Date().getTime()}`;
        const queueClient = this.queueServiceClient.getQueueClient(queueName);
        this.logger.trace(`Create queue ${queueName} successfully`);
        return queueClient.create();
        
    }

    sendMsgToCurrentQueue(queue: string, msg: string) {
        this.logger.trace(`Message sent to queue: Msg: ${msg}, Queue: ${queue}`);
        return this.getQueue(queue).sendMessage(msg);
    }

    peekMessages(queue: string) {
        return this.getQueue(queue).peekMessages();
    }

    async removeMessageFromQueue(queue: string) {
        const dequeueResponse = await this.getQueue(queue).receiveMessages();
        if (dequeueResponse.receivedMessageItems.length == 1) {
          const dequeueMessageItem = dequeueResponse.receivedMessageItems[0];
          console.log(`Processing & deleting message with content: ${dequeueMessageItem.messageText}`);
          const deleteMessageResponse = this.getQueue(queue).deleteMessage(
            dequeueMessageItem.messageId,
            dequeueMessageItem.popReceipt
          );
          this.logger.trace(
            `Delete message successfully, service assigned request Id: ${deleteMessageResponse.requestId}`
          );
        }
    }
}