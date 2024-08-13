# tecem-2024-02
Tecnologias Emergentes

## Chatbots

### Acesso IBM Cloud

- Cadastro `IBM Academic Initiative`

    [IBM Academic Initiative](https://github.com/academic-initiative/documentation/blob/main/academic-initiative/how-to/How-to-register-with-the-IBM-Academic-Initiative/readme.md)

- Obter promocode para a `IBM Cloud`

    [IBM Cloud Promocode](https://github.com/academic-initiative/documentation/blob/main/academic-initiative/how-to/How-to-request-and-IBM-Cloud-Feature-Code/readme.md)

- Ativar `IBM Cloud`

    [IBM Cloud](https://github.com/academic-initiative/documentation/blob/main/academic-initiative/how-to/How-to-create-an-IBM-Cloud-account/readme.md)


### Language Translator

- Acesso via `postman`
    - Utilizar a URL `https://api.us-south.language-translator.watson.cloud.ibm.com/instances/INSTANCE_ID/v3/translate?version=2018-05-01`
    - Autenticação deve ser `Basic Auth` onde `Username` deve ser `apikey` e `Password` a chave de API
    
### Uso NLU

- Acesso via `postman`
    - Utilizar a URL `https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/INSTANCE_ID/v1/analyze?version=2019-07-12`
    - Autenticação deve ser `Basic Auth` onde `Username` deve ser `apikey` e `Password` a chave de API

- Biblioteca `nodejs`
    
    [Bliblioteca Nodejs](https://www.npmjs.com/package/ibm-watson)

- Instalar a biblioteca

    ```nodejs
    npm init -y
    npm i --save ibm-watson
    ```
- Categorias

```json
    {
        url: 'https://www.espm.br/',
        features: {
            categories: {}
        }
    }
```
- Classificações

```json
    {
        text: 'I feel good today!',
        features: {
            classifications: { model: 'tone-classifications-en-v1' }
        }
    }
```

- Somente disponível para textos em inglês

    - excited: Mostrando entusiasmo e interesse pessoais
    - frustrated: Sentindo-se incomodado e irritado
    - impolite: Sendo desrespeitoso e rude
    - polite: Exibindo um comportamento racional e orientado a objetivos
    - sad: Uma emoção passiva desagradável
    - satisfied: Uma resposta afetiva à qualidade do serviço percebida
    - sympathetic: Um modo afetivo de compreensão que envolve ressonância emocional

- Referêcia: [Análise de Tons](https://cloud.ibm.com/docs/natural-language-understanding?topic=natural-language-understanding-tone_analytics)

- Conceitos
```json
    {
        url: 'www.espm.br',
        features: {
            concepts: {}
        }
    }
```
- Entidades

```json
    {
        text: 'Eu quero que o meu pedido entregue na cidade de São Paulo, na Rua Antonio da Silva, 123',
        features: {
            entities: {}
        }

    }
```

### Watson Assistant

#### Chatbot Secretaria Universidade

- Efetuar login na [IBM Cloud](https://cloud.ibm.com)
- Instanciar o serviço [Watson Assistant](https://cloud.ibm.com/catalog/services/watsonx-assistant)
- Utilizar o [ChatGPT](https://chatgpt.com/) para gerar os textos
- Criar uma `Persona` para o chatbot, por exemplo:
    ```dotnetcli
    Crie uma persona para um chatbot que auxilie alunos universitários da faculdade "Belo Diploma" 
    nas questões como: obter nota, faltas, grade de aulas, etc... Essa persona deve ter um ótimo 
    senso de humor e uma linguagem descontraída
    ```
- Criar o diálogo introdutório, o `On boarding`
- Adicionar 3 variações de resposta para quando a pergunta não for compreendida pelo Chatbot (escolhidas aleatoriamente)
    - Observar o `No matches count <= 3`;
- Criar a primeira ação: "Verificar as disciplinas matriculadas";
    - Aluno deve infomar o número de matrícula;
    - O diálogo deve informar "Estou pesquisando sua matrícula `numero_da_matricula`";
    - Criar uma variável de sessão para armazenar o número de matrícula do aluno;
    - Ao final, informar a grade de disciplinas e o nome do aluno (sempre o mesmo)
- Integração com o sistema da universidade
- Acessar o `endpoint` para obter a lista de disciplinas

    `https://sistema-universitario.glitch.me/grade/1000`

- Formato `OpenAPI`
```
Gere um json no formato OpenAPI para o endpoint https://sistema-universitario.glitch.me/grade/:matricula onde :matricula corresponde à matrícula do aluno. O endpoint retorna um JSON no formato {nome: "nome do aulo", disciplinas: ["disciplina1", "disciplina2"]}
```
- Desenvolver um diálogo para que o aluno possa solicitar a nota de uma disciplina informando o número de matrícula e a descrição da disciplina

    `https://sistema-universitario.glitch.me/nota/1000/Estrutura de Dados`

- Desenvolver um diálogo para que o aluno possa consultar a sala de aula de uma disciplina

    `https://sistema-universitario.glitch.me/sala/Estrutura de Dados`

- Instalar em uma página HTML

    [Instalar Assistente](https://developer.ibm.com/tutorials/embed-watson-assistant-in-website/)
