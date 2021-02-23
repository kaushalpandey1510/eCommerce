<template>
<div>
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
	

	<!-- Featured section end -->


	<section v-if="errored">
		<p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
	</section>
	<section class="product-section spad" v-else>
		<div class="container">
			<div class="row" id="product-filter" >
				<div class="mix col-lg-3 col-md-6 best" v-for="prod in info"  :key="prod.name">
					<div class="product-item">
						<router-link class="primary-btn" v-bind:to="'/product/'+ prod.id ">
						<figure>
							<img v-bind:src="prod.image" alt="">
							
						</figure>
					</router-link>
						<div class="product-info">
							<h6>{{ prod.name }} </h6>
							<p>${{ prod.price }}</p>
							<!-- <a  @click="handleClick({{ prod.price }}, $event)" href="#" class="site-btn btn-line">ADD TO CART</a> -->
							<router-link class="site-btn btn-line" v-bind:to="'/addcart/' + prod.id +'/' + useridd ">ADD TO CART</router-link>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Product section -->
	<!-- <section class="product-section spad">
		<div class="container">
			
			<div class="row" id="product-filter">
				<div class="mix col-lg-3 col-md-6 best">
					<div class="product-item">
						<figure>
							<img src="img/products/1.jpg" alt="">
							<div class="pi-meta">
								<div class="pi-m-left">
									<img src="img/icons/eye.png" alt="">
									<p>quick view</p>
								</div>
								<div class="pi-m-right">
									<img src="img/icons/heart.png" alt="">
									<p>save</p>
								</div>
							</div>
						</figure>
						<div class="product-info">
							<h6>Long red Shirt</h6>
							<p>$39.90</p>
							<a href="#" class="site-btn btn-line">ADD TO CART</a>
						</div>
					</div>
				</div>
				<div class="mix col-lg-3 col-md-6 new">
					<div class="product-item">
						<figure>
							<img src="img/products/2.jpg" alt="">
							<div class="bache">NEW</div>
							<div class="pi-meta">
								<div class="pi-m-left">
									<img src="img/icons/eye.png" alt="">
									<p>quick view</p>
								</div>
								<div class="pi-m-right">
									<img src="img/icons/heart.png" alt="">
									<p>save</p>
								</div>
							</div>
						</figure>
						<div class="product-info">
							<h6>Hype grey shirt</h6>
							<p>$19.50</p>
							<a href="#" class="site-btn btn-line">ADD TO CART</a>
						</div>
					</div>
				</div>
				<div class="mix col-lg-3 col-md-6 best">
					<div class="product-item">
						<figure>
							<img src="img/products/3.jpg" alt="">
							<div class="pi-meta">
								<div class="pi-m-left">
									<img src="img/icons/eye.png" alt="">
									<p>quick view</p>
								</div>
								<div class="pi-m-right">
									<img src="img/icons/heart.png" alt="">
									<p>save</p>
								</div>
							</div>
						</figure>
						<div class="product-info">
							<h6>long sleeve jacket</h6>
							<p>$59.90</p>
							<a href="#" class="site-btn btn-line">ADD TO CART</a>
						</div>
					</div>
				</div>
				<div class="mix col-lg-3 col-md-6 new best">
					<div class="product-item">
						<figure>
							<img src="img/products/4.jpg" alt="">
							<div class="bache sale">SALE</div>
							<div class="pi-meta">
								<div class="pi-m-left">
									<img src="img/icons/eye.png" alt="">
									<p>quick view</p>
								</div>
								<div class="pi-m-right">
									<img src="img/icons/heart.png" alt="">
									<p>save</p>
								</div>
							</div>
						</figure>
						<div class="product-info">
							<h6>Denim men shirt</h6>
							<p>$32.20 <span>RRP 64.40</span></p>
							<a href="#" class="site-btn btn-line">ADD TO CART</a>
						</div>
					</div>
				</div>
				<div class="mix col-lg-3 col-md-6 best">
					<div class="product-item">
						<figure>
							<img src="img/products/5.jpg" alt="">
							<div class="pi-meta">
								<div class="pi-m-left">
									<img src="img/icons/eye.png" alt="">
									<p>quick view</p>
								</div>
								<div class="pi-m-right">
									<img src="img/icons/heart.png" alt="">
									<p>save</p>
								</div>
							</div>
						</figure>
						<div class="product-info">
							<h6>Long red Shirt</h6>
							<p>$39.90</p>
							<a href="#" class="site-btn btn-line">ADD TO CART</a>
						</div>
					</div>
				</div>
				<div class="mix col-lg-3 col-md-6 new">
					<div class="product-item">
						<figure>
							<img src="img/products/6.jpg" alt="">
							<div class="bache">NEW</div>
							<div class="pi-meta">
								<div class="pi-m-left">
									<img src="img/icons/eye.png" alt="">
									<p>quick view</p>
								</div>
								<div class="pi-m-right">
									<img src="img/icons/heart.png" alt="">
									<p>save</p>
								</div>
							</div>
						</figure>
						<div class="product-info">
							<h6>Hype grey shirt</h6>
							<p>$19.50</p>
							<a href="#" class="site-btn btn-line">ADD TO CART</a>
						</div>
					</div>
				</div>
				<div class="mix col-lg-3 col-md-6 best">
					<div class="product-item">
						<figure>
							<img src="img/products/7.jpg" alt="">
							<div class="pi-meta">
								<div class="pi-m-left">
									<img src="img/icons/eye.png" alt="">
									<p>quick view</p>
								</div>
								<div class="pi-m-right">
									<img src="img/icons/heart.png" alt="">
									<p>save</p>
								</div>
							</div>
						</figure>
						<div class="product-info">
							<h6>long sleeve jacket</h6>
							<p>$59.90</p>
							<a href="#" class="site-btn btn-line">ADD TO CART</a>
						</div>
					</div>
				</div>
				<div class="mix col-lg-3 col-md-6 best">
					<div class="product-item">
						<figure>
							<img src="img/products/8.jpg" alt="">
							<div class="pi-meta">
								<div class="pi-m-left">
									<img src="img/icons/eye.png" alt="">
									<p>quick view</p>
								</div>
								<div class="pi-m-right">
									<img src="img/icons/heart.png" alt="">
									<p>save</p>
								</div>
							</div>
						</figure>
						<div class="product-info">
							<h6>Denim men shirt</h6>
							<p>$32.20 <span>RRP 64.40</span></p>
							<a href="#" class="site-btn btn-line">ADD TO CART</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section> -->
	<!-- Product section end -->


	<!-- Blog section -->	





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
			logname: null,
			loglink: null,
			usernm: null
            }
          },
		
          mounted () {
			

            axios
              .get('http://localhost/eCommercePHP/apis/product')
              .then(response => {
                console.log(response.data)
                this.info = response.data
              })
              .catch(error => {
                console.log(error)
                this.errored = true
              })
			.finally(() => this.loading = false);
			if (!this.$session.get('userid')) {
			this.$session.set('userid', '0');
			this.useridd = '0';			
			}
			else
			{
				this.useridd = this.$session.get('userid');
			}
			if (this.$session.get('loginname') == 'Login' || this.$session.get('usernm') == null) {
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
			handleClick: function(text, event) {
			alert(text);
			console.log(event)
			}
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

