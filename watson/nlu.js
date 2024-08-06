const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const nlu = new NaturalLanguageUnderstandingV1({
    authenticator: new IamAuthenticator({ apikey: '' }),
    version: '2018-04-05',
    serviceUrl: ''
});

nlu.analyze(
    {
        html: 'I feel very great today!', // Buffer or String
        features: {
            concepts: {},
            keywords: {},
            emotion: {}
        }
    })
    .then(response => {
        console.log(JSON.stringify(response.result, null, 2));
    })
    .catch(err => {
        console.log('error: ', err);
    });
