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
				<router-link class="primary-btn card-bag" to="/cart"><img src='/img/icons/bag.png' alt=""><span>+</span></router-link>
	
				
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
	

	<section v-if="errored">
		<p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
	</section>
	<div class="page-area product-page spad" v-else>
		<div class="container"  >
			<div class="row" v-for="prod in info"  :key="prod.name">
				<div class="col-lg-6">
					<figure>
						<img class="product-big-img" v-bind:src="'../'+prod.image"  alt="">
					</figure>
					
				</div>
				<div class="col-lg-6">
					<div class="product-content">
						<h2>{{ prod.name }} </h2>
						<div class="pc-meta">
							<h4 class="price">${{ prod.price }}</h4>
							
						</div>
						
						
						<router-link class="site-btn btn-line" v-bind:to="'/addcart/' + prod.id +'/' + useridd ">ADD TO CART</router-link>
					</div>
				</div>
			</div>
			<div class="product-details">
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<ul class="nav" role="tablist">
							<li class="nav-item">
								<a class="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Description</a>
							</li>
							
							<li class="nav-item">
								<a class="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Reviews</a>
							</li>
						</ul>
						<div class="tab-content">
							<!-- single tab content -->
							<div class="tab-pane fade show active" v-for="prod in info"  :key="prod.name" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
								<p>{{ prod.description }}</p>
							</div>
							
							<div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
								<div class="cart-total-details">
									
									<ul class="cart-total-card" >
										<li class="table-bordered" v-for="prodcmt in infocmt"  :key="prodcmt.description" style="margin-bottom: 0px"><b><u>{{ prodcmt.uname }}</u></b><br>  {{ prodcmt.description }}</li>
										
									</ul>
									
								</div>
								<div class="cupon-input"  v-if="cmtview">
									<form id="myForm" @submit="formSubmit"  method="post">
										<textarea id="myText" v-model="cmt" placeholder="Write..." class="form-control"></textarea>
										<button class="site-btn" >Comment</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>




</div>

</template>
<script>
	import axios from 'axios';
export default {
	
	
    data () {
            return {
			info: null,
			infocmt: null,
            loading: true,
			errored: false,
			useridd: null,
			logname: null,
			loglink: null,
			usernm: null,
			cmtview : null,
			cmtvlu:null
            }
          },
		
          mounted () {
			

            axios
              .get('http://localhost/eCommercePHP/apis/product?product_id='+ this.$route.params.pid)
              .then(response => {
                console.log(response.data)
                this.info = response.data
              })
              .catch(error => {
                console.log(error)
                this.errored = true
              })
			.finally(() => this.loading = false);

			this.bnncAPICall();
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
				this.cmtview = false;
				}
			else
			{
				//alert(2);
				this.$session.set('loginname', 'Logout');
				this.$session.set('loginlink', 'logout');
				this.logname = this.$session.get('loginname');
				this.loglink = this.$session.get('loginlink');
				this.usernm = this.$session.get('usernm');
				this.cmtview = true;
			}
			

			this.intervalFetchData();
			
		},
		beforeCreate: function () {
			
			
			
			},
		methods: {
			bnncAPICall: function () {
				axios
              .get('http://localhost/eCommercePHP/apis/comments?productid='+ this.$route.params.pid)
              .then(response => {
				//alert(response.data);
                console.log("Daaaaaaaaaaaaaa"+response.data)
                this.infocmt = response.data
              })
              .catch(error => {
                console.log(error)
                this.errored = true
			});
		//document.getElementById("myText").value = "";  
        },
        intervalFetchData: function () {
            setInterval(() => {    
                this.bnncAPICall();
				}, 1000);    
				
        },
			
			formSubmit(e) {

                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost/eCommercePHP/apis/comments', {
					
                    productid: this.$route.params.pid,
					userid: this.$session.get('userid'),
					description: this.cmt
                })
                .then(function (response) {
                    console.log("Res:" +  response.data);
					
                  
                })
                .catch(function (error) {
                    alert("error in register" + error);
                    currentObj.output = error;
                }).finally(() =>{
					
				//	this.$router.push('/login');
				//	this.$router.push('/product/'+this.$route.params.pid);
				document.getElementById("myForm").reset();
				this.cmtvlu= null;
				});
				this.cmt = '';
               
            }
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

