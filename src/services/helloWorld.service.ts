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

    async sayHelloWithPosts(ctx: Context): Promise<string> {
      const { name } = ctx.params;
      const numPosts = await ctx.call("posts.getNumPosts");
      return `Hello ${name}!. There are ${numPosts} posts in this blog.`;
    },

    async started(): Promise<void> {
      this.logger.info("HelloWorld microservice started!");
    }
  }
};

export = helloWorld;
