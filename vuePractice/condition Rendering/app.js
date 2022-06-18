const app = Vue.createApp({
    data (){
        return {
            title: "This is new title",
            show: true,
        };
    },
    methods: {
        toggle(){
            this.show = !this.show;
        }
    },
});

app.mount("#app")












// const app = Vue.createApp({
//     data (){
//         return {
//             
//         };

//     },
//     methods: {
        
//     },


// });

// app.mount("#app")