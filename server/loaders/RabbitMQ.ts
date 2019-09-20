let amqp = require('amqplib')
// const open = amqp.connect('amqp://user:bitnami@localhost');

class RabbitMQ {
  hosts: string[];
  index: number;
  length: number;
  open: any;
  constructor() {
    this.hosts = ["amqp://user:bitnami@localhost"];
    this.index = 0;
    this.length = this.hosts.length;
    this.open = amqp.connect(this.hosts[this.index]);
  }

  /**
   * 
   * @param task 
   * @param msg 
   * @returns Promise
   */
  sendQueueMsg(task: string, msg: string) {
    return new Promise(resolve => {
      this.open.then((conn: any) => {
        return conn.createChannel();
      }).then((ch: any) => {
        return ch.assertQueue(task).then((res: any) => {
          ch.sendToQueue(task, Buffer.from(msg));
          return resolve({ ok: 0, res })
        });
      }).catch((err: any) => {
        return resolve({ ok: 1, err })
      });
    })

  }

  /**
   * 
   * @param tasks 
   * @param receiveCallBack 
   * @param errCallBack 
   * @returns Promise
   */
  receiveQueueMsg(tasks: string) {
    // return new Promise(resolve => {
    this.open.then((conn: any) => {
      return conn.createChannel();
    }).then((ch: any) => {
      return ch.assertQueue(tasks).then((ok: any) => {
        return ch.consume(tasks, (msg: any) => {
          if (msg !== null) {
            // resolve({ ok: 0, msg: msg.content.toString })
            console.log(msg.content.toString());
            ch.ack(msg);
          }
        });
      });
    }).catch(console.warn);
    // })
  }
}

export { RabbitMQ }