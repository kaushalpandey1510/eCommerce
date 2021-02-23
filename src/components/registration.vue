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
        <section class="login_box_area section_gap" style="min-height: 600px;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login_box_img">
                            <p></p>
                            <div class="hover">
                                <h3>New to our website?</h3>
                                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                <router-link class="primary-btn" to="/login">Login</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="login_form_inner">
                            <p></p>
                            <h3 class="text-center">Register to enter</h3>
                            <p></p>
                            <form class="row login_form"  @submit="formSubmit" method="post">
                                <div class="col-md-12 form-group">
                                    <input type="text" pattern="^[a-zA-Z0-9']{0,50}" required class="form-control" id="fname" v-model="fname" placeholder='First Name'>
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="text" pattern="^[a-zA-Z0-9']{0,50}" required class="form-control" id="lname" v-model="lname" placeholder='Last Name'>
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="text" required class="form-control" id="email" v-model="email" placeholder='Email'>
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Password" >
                                </div>
                                 <div class="col-md-12 form-group">
                                    <input type="password" class="form-control" id="cpassword" v-model="cpassword" placeholder="Confirm Password" >
                                </div>
                                <div class="col-md-12 form-group">
                                    <button type="submit" value="submit" class="btn btn-primary col-sm-12">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
   
</template>
<script>
    import axios from 'axios';
     let opt = '';
export default {
    data () {
        return {
              fname: '',
              lname: '',
              email: '',
              output: '',
            logname: null,
            loglink: null,
            usrenm: null
            };
          },
          methods : {
            formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                axios.post('http://localhost/eCommercePHP/apis/user_registration', {
                    fname: this.fname,
                    lname: this.lname,
                    email: this.email,
                    password: this.password,
                    cpassword: this.cpassword
                })
                .then(function (response) {
                   
                   console.log("Res:" +  response.data);
                   if(response.data == 'Email already exists')
                   {
                       alert('Email already exists');
                        opt = '';
                   }
                   else if(response.data == 'Password not match')
                   {
                       alert('Password not match');
                        opt = '';
                   }
                   else
                   {
                        opt = 'DONE';
                   }
                    // currentObj.output = response.data;
                })
                .catch(function (error) {
                    alert("error in register");
                    currentObj.output = error;
                }).finally(() =>{
                    if(opt != '')
                    {
                        console.log("OPT: " + opt);
                        this.$router.push('/login');
                    }
                })
                
            }
          },


        mounted() {
            console.log('Component mounted.');
            if (this.$session.get('loginname') == 'Login') {
            this.$session.set('loginname', 'Login');
            this.$session.set('loginlink', 'login');
			//alert(1);
				this.logname = this.$session.get('loginname');
                this.loglink = this.$session.get('loginlink');
                
				}
			else
			{
			//	alert(2);
				this.$session.set('loginname', 'Logout');
				this.$session.set('loginlink', 'logout');
				this.logname = this.$session.get('loginname');
                this.loglink = this.$session.get('loginlink');
                this.usernm = this.$session.get('usernm');
			}
        }
        // data() {
        //     return {
        //       fname: '',
        //       lname: '',
        //       email: '',
        //       output: ''
        //     };
        // },
        // methods: {
        //     formSubmit(e) {
        //         e.preventDefault();
        //         let currentObj = this;
        //         this.axios.post('http://localhost/helina/adduser.php', {
        //             fname: this.fname,
        //             lname: this.lname,
        //             email: this.email,
        //             password: this.password
        //         })
        //         .then(function (response) {
        //             currentObj.output = response.data;
        //         })
        //         .catch(function (error) {
        //             currentObj.output = error;
        //         });
        //     }
        // }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

