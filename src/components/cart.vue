<template>
    <div>
	
	<!-- Header section -->
	<header class="header-section header-normal">
		<div class="container-fluid">
			<!-- logo -->
			<div class="site-logo ">
				<label><h4 class="" style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;">THE SHOPPY</h4> </label>
				
			</div>
			<!-- responsive -->
			<div class="nav-switch">
				<i class="fa fa-bars"></i>
			</div>
			<div class="header-right">
				<label><b><u>{{usernm}} </u></b></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<router-link class="primary-btn card-bag" to="/cart"><img src="img/icons/bag.png" alt=""><span>+</span></router-link>
	
				
			</div>
			<!-- site menu -->
			<ul class="main-menu">
				<li><router-link class="primary-btn" to="/">Home</router-link></li>
				
				<li><a href="#">Woman</a></li>
				<li><a href="#">Man</a></li>
				
				<li><a href="#">Contact</a></li>
				<li><router-link class="primary-btn" to="/registration">Registration</router-link></li>
				<li><router-link class="primary-btn" v-bind:to="'/'+ loglink ">{{logname}}</router-link></li>
			
			</ul>
		</div>
	</header>
	<!-- Header section end -->


	<!-- Page Info -->
	<div class="page-info-section page-info">
		<div class="container">
			<div class="site-breadcrumb">
				<a href="">Home</a> / 
				<span>Cart</span>
			</div>
			<img src="img/page-info-art.png" alt="" class="page-info-art">
		</div>
	</div>
	<!-- Page Info end -->


	<!-- Page -->
	<div class="page-area cart-page spad">
		<div class="container">
			<section v-if="errored">
				<p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
			</section>

			<div class="cart-table">
				<table>
					<thead>
						<tr>
							<th class="product-th">Product</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Total</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="prod in info"  :key="prod.name">
							<td class="product-col">
								<img v-bind:src="prod.imgpath" height="100px" alt="">
								<div class="pc-title">
									<h4>{{ prod.name }}</h4>
								</div>
							</td>
							<td class="price-col">${{ prod.price }}</td>
							<td class="price-col">
								<div class="">
									<router-link class="btn btn-dark" v-bind:to="'/updatecart/' + prod.id +'/add' ">+</router-link>
									
									<label style="padding: 15px;">{{prod.qnt}}</label>

									<router-link class="btn btn-dark" v-bind:to="'/updatecart/' + prod.id +'/minus' ">-</router-link>
								</div>
							</td>
							<td class="price-col">${{ prod.price * prod.qnt | currencydecimal}}</td>
							<td class="total-col">
								<router-link class="btn btn-danger" v-bind:to="'/removecart/' + prod.id +'/' + useridd " onclick="return confirm('Aru You Sure Delete This Row??')">Remove</router-link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="row cart-buttons">
				<div class="col-lg-5 col-md-5">
					<div class=""><router-link class="site-btn btn-continue" to="/">Continue shooping</router-link></div>
				</div>
				
			</div>
		</div>
		<div class="card-warp">
			<div class="container">
				<form class="contact-form" @submit="formSubmit">
				<div class="row">
					<div class="col-lg-6">
						<div class="shipping-info">
							<h4>Shipping Address</h4><p><br></p>
							
								<div class="row cart-total-card">
									<div class="col-md-6">
										<input type="text" v-model="fname" class="" placeholder="First Name *"> 
									</div>
									<div class="col-md-6">
										<input type="text" v-model="lname" class="" placeholder="Last Name *"> 
									</div>
									<div class="col-md-6">
										<input type="text" v-model="email" class="" placeholder="Email Id">
									</div>
									<div class="col-md-6">
										<input type="text" v-model="contact" class="" placeholder="Contact No">
									</div>
									<div class="col-md-12">
										
										
										<textarea class="" v-model="address"  placeholder="Address"></textarea>
										
									</div>
								</div>
							
						</div>
					</div>
					<div class="col-lg-6">
						<div class="cart-total-details">
							<h4>Cart total</h4>
							<p>Final Info</p>
							<ul class="cart-total-card">
								<li>Subtotal<span>${{totalamt}}</span></li>
								<li>Shipping<span>${{cost}}</span></li>
								<li class="total">Total<span id="ttl">$ {{final}}</span>
								
								</li>
							</ul>
							
							<button type="submit" class="site-btn btn-full">Proceed to checkout</button>
						</div>
					</div>
				</div>
			</form>
			</div>
		</div>
	</div>
	<!-- Page end -->


	
	<!-- Footer top section end -->	
	</div>
	</template>

	<script>
		import axios from 'axios';
		
	export default {
		
		
		data () {
				return {
				info: null,
				loading: true,
				errored: false,
				useridd: null,
				totalamt: null,
				logname: null,
				loglink: null,
				usernm: null,
				cost: null,
				final: null,
				cartid: '',
				qnttt: ''
				}
			},
			filters: {
			currencydecimal (value) {
				return value.toFixed(2)
			},
			MyInt (value) {
				return parseFloat(value)//.toFixed(2)
			}
			},
			mounted () {
				
	
				axios
				.get('http://localhost/eCommercePHP/apis/cart_controller?id='+this.$session.get('userid'))
				.then(response => {
					response.data.forEach(element => {
						//alert(element.total);
						this.totalamt = element.total.toFixed(2);
						this.cost = element.cost.toFixed(2)  ;
						this.final = element.final.toFixed(2);
						this.cartid = this.cartid +element.pid+ ",";
						this.qnttt = this.qnttt +element.qnt+ ",";
					});
					console.log(response.data);
					this.info = response.data;
				})
				.catch(error => {
					console.log(error)
					this.errored = true
				})
				.finally(() => this.loading = false);
				if (!this.$session.get('userid')) {
				this.$session.set('userid', '0');				
				}
				else
				{
					this.useridd = this.$session.get('userid');
				}
				if (this.$session.get('loginname') == 'Login') {
            this.$session.set('loginname', 'Login');
            this.$session.set('loginlink', 'login');
			//alert(1);
				this.logname = this.$session.get('loginname');
				this.loglink = this.$session.get('loginlink');
				}
			else
			{
				//alert(2);
				this.$session.set('loginname', 'Logout');
				this.$session.set('loginlink', 'logout');
				this.logname = this.$session.get('loginname');
				this.loglink = this.$session.get('loginlink');
				this.usernm = this.$session.get('usernm');
			}
			},
			beforeCreate: function () {
				
				
				
				},
			methods: {
				formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost/eCommercePHP/apis/guestcheckout', {
					name: this.fname + " " + this.lname,
					contact: this.contact,
					guest: this.$session.get('userid'),
					prodid: this.cartid,
					quntity: this.qnttt,
                    email: this.email,
                    address: this.address
                })
                .then(function (response) {
                    console.log("Res:" +  response.data);
                })
                .catch(function (error) {
                    alert("error in register" + error);
                    currentObj.output = error;
                }).finally(() =>{
					//	alert('Checkout successfully.');
				});

				axios
				.get('http://localhost/eCommercePHP/apis/cart_controller?idd='+this.$session.get('userid'))
				.then(response => {
					
					console.log(response.data);
					alert("Checkout successfully.");
				})
				.catch(error => {
					console.log(error)
					this.errored = true
				})
				.finally(()=>[
				this.$router.push('/home')
				]);

				
			}
				
               
            
			}
	}
	</script>
	