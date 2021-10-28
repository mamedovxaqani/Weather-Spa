import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import headerComponent from "./components/headerComponent";

const app = createApp(App);

app.use(store);
app.use(router);

// Global component

app.component("header-component", headerComponent);

// ................
app.mount("#app");
