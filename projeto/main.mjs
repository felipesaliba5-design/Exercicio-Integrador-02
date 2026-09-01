// Importações
import IEclss, { IEfunc, IEjson } from './objetos/IE.mjs';
import PJ from './pessoas/PJ.mjs';

// Criação e configuração das Pessoas Jurídicas
const pj1 = new PJ("Tech Solutions", "contato@techsolutions.com.br");
pj1.setCNPJ("12345678000199");
pj1.setRazaoSocial("Tech Solutions LTDA");

const pj2 = new PJ("Inova Services", "admin@inovaservices.com.br");
pj2.setCNPJ("98765432000188");
pj2.setRazaoSocial("Inova Services S.A.");

const dataDeHoje = new Date();

// Criação das Inscrições Estaduais
const ie1 = new IEclss("111.222.333.444", "SP", dataDeHoje);
const ie2 = IEfunc("555.666.777.888", "RJ", dataDeHoje);

IEjson.numero = "999.000.111.222";
IEjson.estado = "MG";
IEjson.dataRegistro = dataDeHoje;

// Validação com objeto inválido (deve retornar false)
console.log("=== Testando instanceof ===");
const objetoInvalido = { nome: 'Empresa Inválida' };
console.log("Inválido (IEclss):", ie1.setPJ(objetoInvalido)); 
console.log("Inválido (IEfunc):", ie2.setPJ(objetoInvalido));
console.log("Inválido (IEjson):", IEjson.setPJ(objetoInvalido));

// Associação com instâncias válidas de PJ (deve retornar true)
console.log("\nVálido (IEclss):", ie1.setPJ(pj1)); 
console.log("Válido (IEfunc):", ie2.setPJ(pj2)); 
console.log("Válido (IEjson):", IEjson.setPJ(pj1));

// Função polimórfica para exibir os dados
function mostrarIE(ie) {
    const pj = ie.getPJ();
    
    console.log(`
=== Pessoa Jurídica ===
Nome: ${pj.getNome()}
E-mail: ${pj.getEmail()}
CNPJ: ${pj.getCNPJ()}
Razão Social: ${pj.getRazaoSocial()}

=== Inscrição Estadual ===
Número: ${ie.getNumero()}
Estado: ${ie.getEstado()}
Data de Registro: ${ie.getDataRegistro().toLocaleString('pt-BR')}
Pessoa Jurídica: ${pj.getRazaoSocial()}
`);
}

// Exibição dos relatórios
console.log("\n--- Relatório IEclss ---");
mostrarIE(ie1);

console.log("\n--- Relatório IEfunc ---");
mostrarIE(ie2);

console.log("\n--- Relatório IEjson ---");
mostrarIE(IEjson);

// Recuperação de dados pelo relacionamento (Desafio Extra 2)
console.log("\n--- Desafio Extra 2 ---");
console.log("Razão Social vinculada a IEclss:", ie1.getPJ().getRazaoSocial());
console.log("Razão Social vinculada a IEfunc:", ie2.getPJ().getRazaoSocial());