function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GerarCPF() {
    let cpf = '';
  
  
    for (let i = 0; i < 9; i++) {
      cpf += getRandomInt(0, 9).toString();
    }
  
  
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (10 - i);
    }
    let firstDigit = (sum % 11) < 2 ? 0 : 11 - (sum % 11);
    cpf += firstDigit.toString();
  
  
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf[i]) * (11 - i);
    }
    let secondDigit = (sum % 11) < 2 ? 0 : 11 - (sum % 11);
    cpf += secondDigit.toString();
  
    return cpf;
  }
  
  export { GerarCPF };
