const app = Vue.createApp({
    data (){
        return {
            array : ['sajib','rifat','nayeem','arman'],
        };

    },
    methods: {
       random(){
           console.log(this.array)
       }
    },

    computed:{
        totalArrayItems(){
            return this.array.length;
        }
    }
});

app.mount("#app")