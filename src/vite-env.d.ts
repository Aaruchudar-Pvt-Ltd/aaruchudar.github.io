/// <reference types="vite/client" />

declare module "*.css";
declare module "*.module.css";
declare module "*.glb";
declare module "*.json";

declare module "next" {
  export type Metadata = Record<string, unknown>;
}
