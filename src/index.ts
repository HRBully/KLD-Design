import { App } from "vue";
import KButton from "./KButton.vue";
import JButton from "./JButton.tsx";
// 导出单独组件
export { KButton, JButton };

export default {
  install(app: App): void {
    // 全局注册组件
    app.component(KButton.name, KButton);
    app.component(JButton.name, JButton);
  },
};
