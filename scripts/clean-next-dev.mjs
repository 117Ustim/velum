import { rm } from 'node:fs/promises';

await rm('.next-dev', { recursive: true, force: true });
