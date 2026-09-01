
import PJ from '../pessoas/PJ.mjs';


export default class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    constructor(numero, estado, dataRegistro) {
        this.#numero = numero;
        this.#estado = estado;
        this.#dataRegistro = dataRegistro;
        this.#pj = null;
    }

    setPJ(pj) {
       
        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        }
        return false;
    }

    getPJ() { return this.#pj; }
    getNumero() { return this.#numero; }
    getEstado() { return this.#estado; }
    getDataRegistro() { return this.#dataRegistro; }
}


export function IEfunc(numero, estado, dataRegistro) {
    let _numero = numero;
    let _estado = estado;
    let _dataRegistro = dataRegistro;
    let _pj = null;

    return {
        setPJ: function(pj) {
            if (pj instanceof PJ) {
                _pj = pj;
                return true;
            }
            return false;
        },
        getPJ: function() { return _pj; },
        getNumero: function() { return _numero; },
        getEstado: function() { return _estado; },
        getDataRegistro: function() { return _dataRegistro; }
    };
}

export const IEjson = {
    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,

    setPJ(pj) {
        if (pj instanceof PJ) {
            this.pj = pj;
            return true;
        }
        return false;
    },
    
    getPJ() { return this.pj; },
    getNumero() { return this.numero; },
    getEstado() { return this.estado; },
    getDataRegistro() { return this.dataRegistro; }
};