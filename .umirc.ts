import { defineConfig } from "@umijs/max";
import routes from "@/config/routes";
import request from '@/config/request'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request,
  layout: {
    title: "@umijs/max",
  },
  routes,
  npmClient: "pnpm",
  tailwindcss: {},

});
