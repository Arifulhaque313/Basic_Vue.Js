const app = Vue.createApp({
    data() {
        return {
            msg: "Welcome to Vue.JS",
            object: {
                name: "Ariful Islam",
                url: "https://www.google.com"

            },
        };
    }


});

app.mount("#app")