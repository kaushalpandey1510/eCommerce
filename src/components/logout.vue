<template>
    <div>
	</div>
	</template>
	<script>
	export default {
		
		
		data () {
				return {
				}
			},
			mounted () {				
			
			},
			beforeCreate: function () {
			//	alert(this.$route.params.uid);
			this.$session.destroy()
			this.$router.push('/');
			this.$session.set('loginname', 'Login');
			this.$session.set('loginlink', 'login');
			this.$session.set('usernm', ' ');	
			}
	}
	</script>