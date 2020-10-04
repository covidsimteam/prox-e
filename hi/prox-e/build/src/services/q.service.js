"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyQService = void 0;
const logger_1 = __importDefault(require("../logger"));
const fs_service_1 = require("./fs.service");
class ProxyQService extends fs_service_1.ProxyFsService {
    constructor() {
        super();
        this.qlogger = logger_1.default.child({ file: 'QService' });
        this.clients = [''];
        if (!ProxyQService.proxyQServiceInstance) {
            ProxyQService.proxyQServiceInstance = this;
        }
        return ProxyQService.proxyQServiceInstance;
    }
    getQueue(clientQueue) {
        if (!this.clients.find(v => v === clientQueue))
            this.clients.push(clientQueue);
        return this.queueServiceClient.getQueClient(clientQueue);
    }
    get queueServiceClient() {
        return this.queueServiceClient;
    }
    createQueue() {
        const queueName = `newqueue${new Date().getTime()}`;
        const queueClient = this.queueServiceClient.getQueueClient(queueName);
        this.qlogger.trace(`Create queue ${queueName} successfully`);
        return queueClient.create();
    }
    sendMsgToCurrentQueue(queue, msg) {
        this.qlogger.trace(`Message sent to queue: Msg: ${msg}, Queue: ${queue}`);
        return this.getQueue(queue).sendMessage(msg);
    }
    peekMessages(queue) {
        return this.getQueue(queue).peekMessages();
    }
    async removeMessageFromQueue(queue) {
        const dequeueResponse = await this.getQueue(queue).receiveMessages();
        if (dequeueResponse.receivedMessageItems.length == 1) {
            const dequeueMessageItem = dequeueResponse.receivedMessageItems[0];
            console.log(`Processing & deleting message with content: ${dequeueMessageItem.messageText}`);
            const deleteMessageResponse = this.getQueue(queue).deleteMessage(dequeueMessageItem.messageId, dequeueMessageItem.popReceipt);
            this.qlogger.trace(`Delete message successfully, service assigned request Id: ${deleteMessageResponse.requestId}`);
        }
    }
}
exports.ProxyQService = ProxyQService;
