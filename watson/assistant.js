const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
    authenticator: new IamAuthenticator({ apikey: '' }),
    serviceUrl: '',
    version: '2021-06-14'
});

// Propriedade Draft Environment ID
assistant.createSession({
    assistantId: ''
})
    .then(res => {
        console.log(JSON.stringify(res.result, null, 2));

        console.log(res.result.session_id)

        assistant.message(
            {
                input: { text: "Qual é a minha nota?" },
                // Propriedade Draft Environment ID
                assistantId: '',
                sessionId: res.result.session_id,
            })
            .then(response => {
                console.log(JSON.stringify(response.result, null, 2));
            })
            .catch(err => {
                console.log(err);
            });

    })
    .catch(err => {
        console.log(err);
    });

