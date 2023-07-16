import { server } from './server';
import { worker } from './browser';
import handlers from './handlers';

async function initMocks() {
  if (typeof window === 'undefined') {
    server.listen();
  } else {
    worker.start(...handlers);
  }
}

initMocks();
