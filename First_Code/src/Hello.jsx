function Hello(){

  // variable declaration as javascript
  let myName='chhaya';
  let number =562;

  // arrow function
  let fullName =()=>{
    return 'chhaya mishra';
  }


  //javascript variable in html code

  return <p>
    MessageNo:{number} <br></br> I am your student {fullName()}
  </p>
}


export default Hello;   // Exporting this jsx file to App.jsx