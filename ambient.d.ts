declare module "ENV" {
  export function env(key: string, fallback?: any): string;
}

declare module "HANDLER" {
  export const handler: any;
}

declare module "MANIFEST" {
  import { SSRManifest } from "@sveltejs/kit";
  export const manifest: SSRManifest;
}

declare module "SERVER" {
  export { Server } from "@sveltejs/kit";
}
