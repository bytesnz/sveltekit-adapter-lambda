import { handler as internalHandler } from "HANDLER";
import polka from "polka";
import { ServerlessAdapter } from '@h4ad/serverless-adapter';
import { AwsStreamHandler } from '@h4ad/serverless-adapter/handlers/aws';
import { ApiGatewayV2Adapter } from '@h4ad/serverless-adapter/adapters/aws';
import { DummyResolver } from '@h4ad/serverless-adapter/resolvers/dummy';
import { PolkaFramework } from '@h4ad/serverless-adapter/frameworks/polka';

const app = polka().use(internalHandler);

export const handler = ServerlessAdapter.new(app)
  .setFramework(new PolkaFramework())
  .setHandler(new AwsStreamHandler({ callbackWaitsForEmptyEventLoop: false }))
  .setResolver(new DummyResolver())
  .addAdapter(new ApiGatewayV2Adapter())
  .build();
