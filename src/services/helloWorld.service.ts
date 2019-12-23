import { ServiceSchema } from "moleculer";

const helloWorld: ServiceSchema = {
  name: "helloWorld",
  actions: {
    sayHello(): string {
      return "Hello World!";
    },

    async started(): Promise<void> {
      this.logger.info("HelloWorld microservice started!");
    }
  }
};

export = helloWorld;
