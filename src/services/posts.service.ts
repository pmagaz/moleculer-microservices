import { ServiceSchema } from "moleculer";
import fetch from "node-fetch";

const posts: ServiceSchema = {
  name: "posts",
  actions: {
    async getNumPosts(): Promise<number> {
      const res = await fetch("https://pablomagaz.com/api/posts");
      const json = await res.json();
      const { posts } = json;
      return posts.length;
    }
  },
  async started(): Promise<void> {
    this.logger.info("Posts microservice started!");
  }
};

export = posts;
