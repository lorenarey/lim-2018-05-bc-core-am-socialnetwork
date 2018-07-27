  describe('ingresar', () => {

    it('debería ser una función: isValidLogin', () => {
      assert.equal(typeof isValidLogin, 'function');  
    });

    it('debería retornar TRUE, al ingresar email(abc@hotmail.com) y password(123456aA$)', () => {
      assert.equal(isValidLogin('abc@hotmail.com', '123456aA$'),true);
    });

    it('debería retornar FALSE, al ingresar email(abcdefghij) y password incorrecto(123)', () => {
      assert.equal(isValidLogin('abcdefghij', '123'),false);
    });
    
    it('debería ser una función: validationRegisterUser', () => {
      assert.equal(typeof validationRegisterUser, 'function'); 
    });

    it('debería retornar TRUE, al ingresar: nombre, email, password y confirmar password, correctos', () => {
      assert.equal(validationRegisterUser('Lucero','abc@hotmail.com', '123456aA$', '123456aA$'),true); 
    });

    it('debería retornar FALSE, al ingresar: los campos estan vacíos', () => {
      assert.equal(validationRegisterUser('','', '', ''),false); 
    });

    it('debería retornar FALSE, al ingresar: nombre, email, password y confirmar password incorrectos', () => {
      assert.equal(validationRegisterUser('name','abcdefghij', '123', '456'),false); 
    });
    
  });
