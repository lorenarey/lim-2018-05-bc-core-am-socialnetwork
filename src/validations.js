const regularExpresion = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const isNotEmpty = value => (value.trim() !== '');
const isEmail = value => (regularExpresion.test(value))
const equalPassword = (password, confirPassword) => password === confirPassword;
const minLenght = value => value.lenght > 5;




//  Valida los campos al Registrar Nuevo Usuario
//  ******************************************** 
const validationRegisterUser = (nameUser,email,password,confirPassword) => {
  const isValid = (isNotEmpty(nameUser) 
                  && isEmail(email) 
                  && isNotEmpty(password) 
                  && isNotEmpty(confirPassword) 
                  && equalPassword(password, confirPassword));
  
  if (isValid){
    campFull = 'campos llenos';
    console.log(campFull);
  }
  else {
    alert ('campos vacíos')
  }  
  return isValid;  
}


// Validando Login: email y password correctos
const isValidLogin = (email,password) =>(isEmail(email) && isNotEmpty(password))
