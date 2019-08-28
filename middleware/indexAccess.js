export default function (context) {
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  //--------------------------------------------------------------------------------------------

  // if(context.store.state.userLogin == false){
  //   //Redirige a la pagina de inicio si la variable de userLogin no es verdadera
  //   context.redirect({
  //     name:"index"
  //   })
  // }
}
