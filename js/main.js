const app = new Vue({
    el: '#root',
    data: {
        array: [],
    },
    methods: {},
    mounted(){
            const self = this;
            for(i= 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function (answer){
                self.array.push(answer.data.response);
                });
            }
    }
})
