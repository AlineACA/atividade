
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo; 
    }
  
    atacar() {
      const ataques = {
        mago: 'magia',
        guerreiro: 'espada',
        monge: 'artes marciais',
        ninja: 'shuriken',
      };
  
      const ataque = ataques[this.tipo] || 'ataque desconhecido'; 
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`); 
    }
  }
  
  // Exemplos de uso:
  const heroi1 = new Heroi('Palkia', 100, 'mago');
  heroi1.atacar();
  
  const heroi2 = new Heroi('Ragnar', 30, 'guerreiro');
  heroi2.atacar();
  
  const heroi3 = new Heroi('Tenzin', 50, 'monge');
  heroi3.atacar(); 
  
  const heroi4 = new Heroi('Satoshi', 25, 'ninja');
  heroi4.atacar(); 
