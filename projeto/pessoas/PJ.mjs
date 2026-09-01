
import { Pessoa } from './Pessoa.js';

export default class PJ extends Pessoa {
    #cnpj;
    #razaoSocial;

    constructor(nome, email) {
        super(nome, email);
    }

    setCNPJ(cnpj) {

        if (typeof cnpj === 'string' && cnpj.length === 14) {
            this.#cnpj = cnpj;
            return true;
        }
        return false;
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setRazaoSocial(razaoSocial) {
        if (typeof razaoSocial === 'string' && razaoSocial.trim().length > 0) {
            this.#razaoSocial = razaoSocial;
            return true;
        }
        return false;
    }

    getRazaoSocial() {
        return this.#razaoSocial;
    }
}