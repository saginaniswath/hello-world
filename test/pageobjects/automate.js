const Page = require('./page');
class searchpage extends Page  {                           
get search(){
   return $ ('//*[@class="gLFyf"]');
}
get tools(){
   return $('//*[@type="submit"]');
}
//get tool2(){
//   return $('');
//}
//get tool3(){
  // return $('//*[@id="selenium_logo"]')
//}
// let i=0;
// while( i=0,i<10){
//    i++;

// }
open () {
   return super.open();
}
}
module.exports=new searchpage();