<template>
    <div>
	</div>
	</template>
	<script>
			
		import axios from 'axios';
	export default {
		
		
		data () {
				return {
				}
			},
			mounted () {
			
				if(!this.$route.params.uid)
				{
					//alert(2);
					//this.$router.push('/login');
				}
				else if(this.$route.params.uid == '0')
				{
					//alert(2);
					//this.$router.push('/login');
					this.$session.set('userid',Math.floor(Math.random() * 1000000)  )
					axios.post('http://localhost/eCommercePHP/apis/cart_controller', {
                    userid: this.$session.get('userid'),
                    pid: this.$route.params.pid
                    
                })
                .then(function (response) {
                   
				console.log("Res:" +  response.data);
				
                    // currentObj.output = response.data;
                })
				.catch(error => {
					console.log(error)
					this.errored = true
				}).finally(() =>{
                        this.$router.push('/cart');
                })
				}
				else
				{
					//alert(this.$route.params.pid);
					axios.post('http://localhost/eCommercePHP/apis/cart_controller', {
                    userid: this.$route.params.uid,
                    pid: this.$route.params.pid
                    
                })
                .then(function (response) {
                   
				console.log("Res:" +  response.data);
				
                    // currentObj.output = response.data;
                })
				.catch(error => {
					console.log(error)
					this.errored = true
				}).finally(() =>{
                        this.$router.push('/cart');
                })
				}				
				
			},
			beforeCreate: function () {
				//alert(12);
			//	alert(this.$route.params.uid);
				if(this.$route.params.uid == '0')
				{
					//this.$router.push('/login');
				}
				
			},
	}
	</script>