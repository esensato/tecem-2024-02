const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const nlu = new NaturalLanguageUnderstandingV1({
    authenticator: new IamAuthenticator({ apikey: 'dDlpcBjt8nuzoHITUMAwcH1loDARwWNe1-bFV7MvV9AC' }),
    version: '2018-04-05',
    serviceUrl: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/016df240-c6dc-4d79-ac54-1eefa2cc9d51'
});

nlu.analyze(
    {
        text: 'Eu quero que o meu pedido entregue na cidade de São Paulo, na Rua Antonio da Silva, 123',
        features: {
            entities: {}
        }

    })
    .then(response => {
        console.log(JSON.stringify(response.result, null, 2));
    })
    .catch(err => {
        console.log('error: ', err);
    });
