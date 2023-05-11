import en from "./src/locales/en-US.json";
type MessageSchema = typeof en;

declare module "vue-i18n" {
  export interface DefineLocaleMessage extends MessageSchema {}
}


declare module "*.png" {
  const img: string
  export default img
}