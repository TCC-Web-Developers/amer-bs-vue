import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { BIconXCircle, BIconList } from "bootstrap-icons-vue";

const app = createApp(App);

app.use(router);
app.component("close-icon", BIconXCircle);
app.component("list-icon", BIconList);

app.mount("#app");
