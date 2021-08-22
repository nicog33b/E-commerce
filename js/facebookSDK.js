function onLogin(){
  FB.login((Response) =>{
if(Response.authResponse){
  FB.api('/me',(Response)=>{
console.log(Response);
  })
}
  })
}

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '534968161160578',
      cookie     : true,
      xfbml      : true,
      version    : 'v11.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

  