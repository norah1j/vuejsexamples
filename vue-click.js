new Vue({
    el: '#app',
    data: {
	x: ""
    },
    methods: {
	clicked: function() {
	    this.x = 'clicked';
	}
    }
});
