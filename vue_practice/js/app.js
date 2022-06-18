const app = Vue.createApp({
    data () {
        return {
            title : "Your Age",
            age :10,
            show : true,
            book :[
               {
                   author:"arif", price : 20
               },{
                   author:"sajib", price : 30
               }
            ]
        }
    },

    methods: {
        changeTitle(a){
            this.title = a
        },

        toggle(){
            this.show = ! this.show
        }
    },
});

app.mount('#app');