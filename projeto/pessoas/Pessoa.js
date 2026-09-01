
export class Pessoa {
    #nome;
    #email;

    constructor(nome, email) {
        this.setNome(nome);
        this.setEmail(email);
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getNome() {
        return this.#nome;
    }

    setEmail(email) {
  
        this.#email = email;
        return true;
    }

    getEmail() {
        return this.#email;
    }
}