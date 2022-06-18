const app = Vue.createApp({
    data(){
        return{
            name:"Ariful Haque",
            age : 22,
            cars : [
                {name:"Toyota",model:24},
                {name:"Mitsubisi",model:24},
                {name:"Mazda",model:24},
                
            ]
        }
    },

    methods: {
        mouseEvent(e){
            console.log(e);
        }
    },
});

app.mount("#app");