# Exercicio-Integrador-02

### 📝 Respostas das Questões Teóricas

**1. Qual a vantagem de fazer PJ herdar da classe Pessoa?**[cite: 1]
A principal vantagem é a **reutilização de código**[cite: 1]. Ao aplicar a herança, a classe `PJ` ganha acesso automático aos atributos e métodos já criados em `Pessoa` (como `nome`, `email`, `setNome` e `getEmail`), evitando que você precise reescrever a mesma lógica[cite: 1].

**2. Por que não devemos copiar para PJ os métodos já implementados em Pessoa?**[cite: 1]
Para evitar a duplicação de código e facilitar a manutenção futura[cite: 1]. Se for necessário corrigir um erro ou alterar a validação do e-mail, por exemplo, basta alterar apenas na classe `Pessoa`, e a classe `PJ` herdará a correção imediatamente[cite: 1].

**3. Qual a finalidade do operador instanceof no método setPJ()?**[cite: 1]
Garantir a integridade do relacionamento[cite: 1]. Ele verifica se o objeto passado como parâmetro foi realmente construído a partir da classe `PJ`, impedindo que estruturas genéricas ou strings sejam salvas acidentalmente no lugar da Pessoa Jurídica[cite: 1].

**4. Qual a diferença entre: `if (pj)` e `if (pj instanceof PJ)`?**[cite: 1]
* **`if (pj)`:** Apenas verifica se a variável contém qualquer valor verdadeiro (não é `null`, `undefined`, `0` ou vazia)[cite: 1]. Aceitaria até mesmo uma simples string.
* **`if (pj instanceof PJ)`:** Verifica de forma estrita se a variável carrega um objeto que pertence especificamente à classe `PJ` (ou a uma de suas subclasses)[cite: 1].

**5. Qual a diferença entre a classe IEclss e a função fábrica IEfunc()?**[cite: 1]
* **IEclss:** É um molde (classe) que exige a palavra reservada `new` para instanciar objetos e criar o vínculo com o construtor[cite: 1].
* **IEfunc():** É uma função que já monta e retorna um novo objeto literal a cada chamada, sem a necessidade do operador `new`[cite: 1].

**6. Como a função fábrica protege seus dados internos?**[cite: 1]
Através de um conceito chamado **closure** (fechamento)[cite: 1]. As variáveis declaradas internamente com `let` ou `const` ficam isoladas no escopo da função[cite: 1]. O mundo externo só consegue interagir com elas através dos métodos que a função decide retornar no objeto[cite: 1].

**7. Qual a diferença entre o objeto literal IEjson e um documento JSON?**[cite: 1]
* **IEjson (Objeto Literal):** É uma estrutura de dados "viva" na memória do JavaScript, que pode armazenar variáveis, executar funções (métodos) e referenciar outros objetos dinamicamente[cite: 1].
* **Documento JSON:** É estritamente um formato de texto (uma string) usado para transferir dados entre sistemas[cite: 1]. Um JSON não pode conter funções, métodos ou lógica de programação[cite: 1].

**8. Qual a diferença entre exportação padrão e exportação nomeada?**[cite: 1]
* **Exportação Padrão (`export default`):** Exporta um único recurso principal por arquivo[cite: 1]. Na hora de importar, você pode dar o nome que quiser para ele[cite: 1].
* **Exportação Nomeada (`export`):** Permite exportar vários recursos do mesmo arquivo[cite: 1]. Ao importar, você é obrigado a usar o nome exato definido na exportação, utilizando as chaves `{ }`[cite: 1].

**9. Por que IEclss utiliza `new`, enquanto IEfunc() não utiliza?**[cite: 1]
Porque `IEclss` é uma classe, e a linguagem JavaScript exige o operador `new` para disparar o método `constructor` e alocar o novo objeto na memória[cite: 1]. Já `IEfunc()` é uma função comum programada especificamente para retornar um objeto já montado, dispensando o uso do construtor nativo[cite: 1].

**10. Qual a vantagem de organizar as classes e estruturas em arquivos separados?**[cite: 1]
Modularização[cite: 1]. Isso deixa o código mais organizado, fácil de ler, isola responsabilidades e permite que você importe (reutilize) apenas os pedaços de código que precisa em outras partes do sistema ou até em outros projetos[cite: 1].

**11. Como o relacionamento entre IE e PJ é representado no código?**[cite: 1]
Através da **associação (ou agregação)**[cite: 1]. A classe de Inscrição Estadual possui um atributo interno (como `#pj` ou `this.pj`) que guarda a referência completa de um objeto da classe `PJ`, conectando os dois[cite: 1].

**12. Por que instanceof Date pode ser utilizado mesmo sem termos criado a classe Date?**[cite: 1]
Porque a classe `Date` é uma classe nativa (*Built-in Object*) do JavaScript[cite: 1]. O próprio motor do navegador ou do Node.js já traz essa estrutura pronta de fábrica para manipulação de datas, então não precisamos criá-la manualmente[cite: 1].