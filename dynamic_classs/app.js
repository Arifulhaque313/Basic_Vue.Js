const app = Vue.createApp({
    data(){
        return{
            cars : [
                {name:"Toyota",model:2017,class:true},
                {name:"Mitsubisi",model:2019, class:false},
                {name:"Mazda",model:2022, class:true},
                
            ]
        }
    },

    methods: {
            changeClass(car){
                car.class=!car.class;
            }
    },

    computed:{
         countCar(){
            return this.cars.length;
        },

        favclass(){
            let total = this.cars.filter((cars)=>cars.class);
            return total;
        },

        favcount(){
            let total = this.cars.filter((cars)=>cars.class);
            return total.length;
        }
    }
});

app.mount("#app");