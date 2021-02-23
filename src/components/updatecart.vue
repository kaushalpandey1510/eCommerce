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
				axios.post('http://localhost/eCommercePHP/apis/cartupdate', {
                    status: this.$route.params.status,
                    cid: this.$route.params.cid
                    
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
			},
			beforeCreate: function () {
			//	alert(this.$route.params.uid);
				if(this.$route.params.uid == '0')
				{
					this.$router.push('/login');
				}
				
			}
	}
	</script>