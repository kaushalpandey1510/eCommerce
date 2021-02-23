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
        <section class="login_box_area section_gap"  style="min-height: 600px;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login_box_img">
                            <p></p>
                        
                            <div class="hover">
                                <h3>Welcome Back! </h3>
                                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                <router-link class="primary-btn" to="/registration">Create an Account</router-link>
                                <!-- <section v-if="errored">
                                    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
                                  </section>
                                
                                  <section v-else>
                                    <div v-if="loading">Loading...</div>
                                
                                <div v-else v-for="currency in info"  class="currency" :key="currency.rate_float">
                                    {{ currency.code }} | {{ currency.description }}:
                                      <span class="lighten">
                                        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
                                      </span>
                                    </div>
                                
                                  </section> -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="login_form_inner">
                            <p></p>
                            <h3 class="text-center">Log in</h3>
                            <p></p>
                            <form class="row login_form" @submit="formSubmit"  method="post">
                                <div class="col-md-12 form-group">
                                    <input type="text" required class="form-control" v-model="email" placeholder="Username" >
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="password" required class="form-control" v-model="password" placeholder="Password" >
                                </div>
                                <div class="col-md-12 form-group">
                                    <div class="creat_account">
                                        <input type="checkbox" id="f-option2" name="selector">
                                        <label for="f-option2">Keep me logged in</label>
                                    </div>
                                </div>
                                <div class="col-md-12 form-group">
                                    <button type="submit" value="submit" class="btn btn-primary col-sm-12">Log In</button>
                                    <a href="#">Forgot Password?</a>
    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!--================Login Box Area =================-->
    
    <!--================End Login Box Area =================-->
</template>
<script>
    import axios from 'axios';
    let opt = '';
    let vlu ;
export default  {
    
    data () {
        return {
            
              email: '',
              output: '',
            logname: null,
			loglink: null
            };
          },
          methods : {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost/eCommercePHP/apis/login', {
                  
                    email: this.email,
                    password: this.password
                })
                .then(function (response) {
                    console.log("Res:" +  response.data);
                    opt = response.data;
                   if(response.data == '')
                    alert("Invalid User"+ response.data);
                  
                })
                .catch(function (error) {
                    alert("error in register" + error);
                    currentObj.output = error;
                }).finally(() =>{
                    if(opt != '')
                    {
                        vlu = opt.split(",");
                        this.$session.set('userid', vlu[1]);
                        this.$session.set('usernm', vlu[2]);
                        this.$session.set('loginname', 'Logout');
				this.$session.set('loginlink', 'logout');
                        this.$router.push('/home');
                    }
                });
               
            }
          },


        mounted() {
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
			}
            console.log('Component mounted.');
            
        }
   
    // data () {
    //         return {
    //           info: null,
    //           loading: true,
    //           errored: false
    //         }
    //       },
    //       filters: {
    //         currencydecimal (value) {
    //           return value.toFixed(2)
    //         }
    //       },
    //       mounted () {
    //         axios
    //           .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //           .then(response => {
    //             console.log(response.data.bpi)
    //             this.info = response.data.bpi
    //           })
    //           .catch(error => {
    //             console.log(error)
    //             this.errored = true
    //           })
    //           .finally(() => this.loading = false)
    //       }
}
</script>
