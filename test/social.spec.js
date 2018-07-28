  describe('ingresar', () => {

    it('debería ser una función: isValidLogin', () => {
      assert.equal(typeof isValidLogin, 'function');  
    });

    it('debería retornar TRUE, al ingresar email(abc@hotmail.com) y password(123456aA$)', () => {
      assert.equal(isValidLogin('abc@hotmail.com', '123456aA$'),true);
    });

    it('debería retornar FALSE, al ingresar email(abcdefghij) y password(123) incorrecto', () => {
      assert.equal(isValidLogin('abcdefghij', '123'),false);
    });
    
    it('debería ser una función: validationRegisterUser', () => {
      assert.equal(typeof validationRegisterUser, 'function'); 
    });

    it('debería retornar TRUE, al ingresar: nombre, email, password y confirmar password, correctos', () => {
      assert.equal(validationRegisterUser('Lucero','abc@hotmail.com', '123456aA$', '123456aA$'),true); 
    });

    it('debería retornar FALSE, al ingresar: nombre, email, password y confirmar password, INCORRECTOS', () => {
      assert.equal(validationRegisterUser('name','abcdef', '1234', '1234'),false); 
    });
    
    it('debería ser una función: validationPublicPost', () => {
      assert.equal(typeof validationPublicPost, 'function');  
    });

    it('debería retornar TRUE, al publicar un post', () => {
      assert.equal(validationPublicPost('Estoy publicando un post'),true);
    });

    it('debería retornar FALSE, cuando intentamos publicar un mensaje vacío', () => {
      assert.equal(validationPublicPost(''),false);
    });
    
  });
