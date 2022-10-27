import 'dotenv/config';
import { RabbitMQServer } from "./rabbitmqServer";

const rabbitMQInit = async ()=> {
    const rabbitMQServer = new RabbitMQServer();
    await rabbitMQServer.start();

    const sended = rabbitMQServer.publish("queue-one", "First Message")
};

rabbitMQInit();