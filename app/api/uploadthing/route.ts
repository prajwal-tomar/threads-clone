// Resource: https://docs.uploadthing.com/nextjs/appdir#create-a-nextjs-api-route-using-the-filerouter
// Copy paste (be careful with imports)

import { createNextRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
// the following function exposes the functionality inside core.ts to the outside world via API
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});