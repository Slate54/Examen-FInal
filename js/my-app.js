// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Delivery Food',
	dialog: {
		title: 'Delivery Food',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/products/',
    	url: 'products.html',
    	name: 'products',
  		},
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		},
		
	]
});

// Export selectors engine
var $$ = Dom7;

$$('#btnAlert').on('click', function (){
	app.dialog.alert('Hello World');
});

$$('#btnLogin').on('click', function(e){
	e.preventDefault();
	
	var usuario = $$('#username').val();
	var password = $$('#password').val();
	
	if (usuario == 'admin' && password == "admin"){
		$$('#nombre').html(usuario);
		app.loginScreen.close('.login-screen');
	}else{
		app.dialog.alert('Datos No Validos');
	}  	
  
});

 

