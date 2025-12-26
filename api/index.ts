import * as tanstackApp from "./client/@tanstack/react-query.gen";
import * as fetchApp from "./client/sdk.gen";

export const api = {
  rq: tanstackApp,
  fetch: fetchApp
};
