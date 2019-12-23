import { ServiceSchema } from "moleculer";
import ApiService from "moleculer-web";

const ApiGateWayService: ServiceSchema = {
  name: "api",
  mixins: [ApiService],
  settings: {
    port: process.env.APIGATEWAY_PORT || 8000,
    routes: [
      {
        path: "/api",
        aliases: {
          "GET /helloWorld": "helloWorld.sayHello"
        }
      }
    ],
    onError(req, res, err): void {
      if (err) {
        const { code, type } = err;
        this.logger.error(code, type);
      }
    }
  },
  async started(): Promise<void> {
    this.logger.info("ApiGateway started!");
  }
};

export = ApiGateWayService;
