import { server } from "./server";
import { worker } from "./browser";

async function initMocks() {
  if (typeof window === "undefined") {
    server.listen();
  } else {
    worker.start();
  }
}

initMocks();
