import { ServiceSchema, Context } from "moleculer";

const helloWorld: ServiceSchema = {
  name: "helloWorld",
  actions: {
    sayHello(): string {
      return "Hello World!";
    },

    sayHelloTo(ctx: Context): string {
      const { name } = ctx.params;
      return `Hello ${name}!`;
    },

    async started(): Promise<void> {
      this.logger.info("HelloWorld microservice started!");
    }
  }
};

export = helloWorld;
