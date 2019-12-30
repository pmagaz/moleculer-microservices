import { ServiceSchema } from "moleculer";
import ApiGwService from "moleculer-web";

const ApiGateWayService: ServiceSchema = {
  name: "ApiGateway",
  mixins: [ApiGwService],
  settings: {
    port: process.env.APIGATEWAY_PORT || 8000,
    routes: [
      {
        path: "/api",
        aliases: {
          "GET /helloWorld": "helloWorld.sayHello",
          "POST /sayHelloTo": "helloWorld.sayHelloTo",
          "GET /sayHelloTo/:name": "helloWorld.sayHelloTo"
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
