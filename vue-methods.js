new Vue({
    el: '#app',
    data: {
	message: 'vuejs model'
    },
    methods: {
	hello() {
	    this.message = 'method called';
	}
    }
});
