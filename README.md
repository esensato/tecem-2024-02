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
- Permite a criação de **chatbots**
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
- Variáveis de sessão:

    <div style="width:100px; height:100px">
    <img src="img/img2.png">
    </div>

#### Integração com o sistema da universidade

<div style="width:100px; height:100px">
<img src="img/img3.png">
</div>

- Acessar o `endpoint` para obter a lista de disciplinas

    `https://sistema-universitario.glitch.me/grade/1000`

- Formato `OpenAPI`
```
Gere um json no formato OpenAPI para o endpoint https://sistema-universitario.glitch.me/grade/:matricula onde :matricula corresponde à matrícula do aluno. O endpoint retorna um JSON no formato {aluno: "nome do aulo", disciplinas: ["disciplina1", "disciplina2"]}
```

<div style="width:100px; height:100px">
<img src="img/img4.png">
</div>

- Desenvolver um diálogo para que o aluno possa solicitar a nota de uma disciplina informando o número de matrícula e a descrição da disciplina

    `https://sistema-universitario.glitch.me/nota/1000/Estrutura de Dados`

- Desenvolver um diálogo para que o aluno possa consultar a sala de aula de uma disciplina

    `https://sistema-universitario.glitch.me/sala/Estrutura de Dados`

### Personalizando o chatbot
- Instalar em uma página HTML

    [Instalar Assistente](https://developer.ibm.com/tutorials/embed-watson-assistant-in-website/)

- Código inicial para exibir o chatbot em um site
    ```javascript
    <script>
      window.watsonAssistantChatOptions = {
        // A UUID like '1d7e34d5-3952-4b86-90eb-7c7232b9b540' included in the embed code provided in IBM watsonx Assistant.
        integrationID: 'YOUR_INTEGRATION_ID',
        // Your assistants region e.g. 'us-south', 'us-east', 'jp-tok' 'au-syd', 'eu-gb', 'eu-de', etc.
        region: 'YOUR_REGION',
        // A UUID like '6435434b-b3e1-4f70-8eff-7149d43d938b' included in the embed code provided in IBM watsonx Assistant.
        serviceInstanceID: 'YOUR_SERVICE_INSTANCE_ID',
        // The callback function that is called after the widget instance has been created.
        onLoad: async (instance) => {
          await instance.render();
        }
      };
      setTimeout(function(){const t=document.createElement('script');t.src='https://web-chat.global.assistant.watson.appdomain.cloud/versions/' + (window.watsonAssistantChatOptions.clientVersion || 'latest') + '/WatsonAssistantChatEntry.js';document.head.appendChild(t);});
    </script>
    ```
- Para obter um exemplo, clicar em
    <div style="width:100px; height:100px">
    <img src="img/img1.png">
    </div>

- E em seguida, clicar na aba superior **Embed**
- `onLoad` executado quando o chatbot é carregado
- Configurações de *layout*
    ```json
        layout: {
            showFrame: true,
            hasContentMaxWidth: false,
        }
    ```
- Configurações do tema
    ```json
        themeConfig: {
            carbonTheme: 'g100',
            corners: 'round',
        }
    ```
- Obs: `carbonTheme` podem ser "white", "g10", "g90" ou "g100" e `corner` "square" ou "round"
- Botão para fechar o chatbot
    ```json
        headerConfig: {
            closeButtonIconType: 'side-panel-left',
        }
    ```
- Obs: opções "minimize", "close", "side-panel-left" e "side-panel-right".
#### Eventos
- Lista de eventos completa pode ser encontrada [Aqui](https://web-chat.global.assistant.watson.cloud.ibm.com/docs.html?to=api-events#event-list)
    ```javascript
        instance.on({
            type: 'receive', handler: (event) => { console.log('I received a message!', event); }
        });
    ```
- Evento `receive`: executado quando uma mensagem é recebida;
- - Os principais parâmetros recebidos pelas funçõs na varável `event` são:
    - `event.data`: mensagem (dados) recebidos pelo chatbot como respostas das intenções do usuário;
    - `event.data.output.generic`: itens da resposta recebidos (texto, etc...)
- Evento `pre:receive`: executado antes do `receive`;
    ```javascript
        instance.on({
            type: 'pre:receive', handler: (event) => {
                console.log('pre:receive')
                const message = event.data;
                if (message.output.generic) {
                    message.output.generic.forEach(messageItem => {
                        console.log(messageItem);
                        if (messageItem.response_type === 'text') {
                            messageItem.response_type = 'teste123';
                        }
                    })
                }
            }
        });
    ```

- Evento `customResponse`: permite criar uma resposta personalizada;
    ```javascript
        function customResponseHandler(event) {
            const { message, element, fullMessage } = event.data;

            const div = document.createElement('div');
            // obtem o texto da mensagem
            div.innerHTML = message.text;
            div.style.border = 'solid 1px';
            div.style.color = 'red';

            // message.options.forEach((messageItem, index) => {
            //     const button = document.createElement('button');
            //     button.innerHTML = messageItem.label;
            //     button.classList.add('CardButton');
            //     button.addEventListener('click', () => onClick(messageItem, button, fullMessage, index));
            //     element.appendChild(button);
            // });

            element.appendChild(div);

        }
    ```

## IoT

- Acessar o emulador [Arduino Uno](https://wokwi.com/projects/new/arduino-uno) ou [instalar no VSCode](https://docs.wokwi.com/pt-BR/vscode/getting-started)
- Pinos digitais (0-13): entrada ou saída (HIGH ou LOW)
- GND: terra
#### Linguagem Arduino
- É uma linguagem para progeramação do **Arduino** [Linguagem Arduino](https://www.arduino.cc/reference/pt/)
- Código básico
    ```javascript
    void setup() {
      // Configurações iniciais
    }
    
    void loop() {
      // Loop principal
    }
    ```
- Principais funções:
    - `pinMode(pino, modo)`: configura um pino como entrada (`INPUT`) ou saída (`OUTPUT`)
    - `digitalWrite(pino, valor)`: envia um sinal (`HIGH` / `LOW`) a um determinado pino
    - `delay(ms)`: aguarda o período especificado (em milisegundos)
- Exemplo *led* piscando no pino 13:
    ```javascript
    // Defina o pino do LED
    const int ledPin = 13;
    
    void setup() {
      // Configure o pino do LED como saída
      pinMode(ledPin, OUTPUT);
    }
    
    void loop() {
      // Acenda o LED
      digitalWrite(ledPin, HIGH);
      // Espere 1 segundo (1000 milissegundos)
      delay(1000);
      // Apague o LED
      digitalWrite(ledPin, LOW);
      // Espere 1 segundo (1000 milissegundos)
      delay(1000);
    }
    ```
- Saída serial - permite comunicação com um computador via porta serial
- Imprimir caracteres ASCII
```javascript
    void setup() {
        // definir taxa de transmissão (bauds)
        Serial.begin(9600);
    }
    
    void loop() {
        // imprimir mensagem
        Serial.println("Arduino is ok");
        // Verifica se há dados disponíveis na porta serial
        if (Serial.available() > 0) {
            // Lê a string digitada pelo usuário
            String texto = Serial.readStringUntil('\n'); // Lê até o usuário pressionar Enter
            // Imprime o texto lido no monitor serial
            Serial.print("Você digitou: ");
            Serial.println(texto);
        }
    }
```

- Exemplo 3 leds piscando de forma aleatória
    ```javascript
    // Defina os pinos dos LEDs
    const int ledPins[] = {8, 9, 10}; // Pinos aos quais os LEDs estão conectados
    const int numLeds = 3; // Número de LEDs
    
    void setup() {
      // Configure todos os pinos dos LEDs como saída
      for (int i = 0; i < numLeds; i++) {
        pinMode(ledPins[i], OUTPUT);
      }
      
      // Inicialize os LEDs apagados
      for (int i = 0; i < numLeds; i++) {
        digitalWrite(ledPins[i], LOW);
      }
    }
    
    void loop() {
      // Escolha um LED aleatório para piscar
      int ledIndex = random(numLeds);
      
      // Acenda o LED escolhido
      digitalWrite(ledPins[ledIndex], HIGH);
      
      // Espere um intervalo aleatório entre 500 e 1500 milissegundos
      delay(random(500, 1501));
      
      // Apague o LED escolhido
      digitalWrite(ledPins[ledIndex], LOW);
      
      // Espere um intervalo aleatório entre 500 e 1500 milissegundos antes de piscar o próximo LED
      delay(random(500, 1501));
    }
    ```
- Exemplo [push button](https://docs.wokwi.com/pt-BR/parts/wokwi-pushbutton) para ligar e desligar um led (obs: no push button a entrada e saída são invertidas)
    ```javascript
    // Defina o pino do LED e do botão
    const int ledPin = 13;
    const int buttonPin = 2;
    
    // Variáveis para armazenar o estado do botão e do LED
    int buttonState = 0;
    int lastButtonState = 0;
    bool ledState = false;
    
    void setup() {
    
      Serial.begin(9600);
      // Configure o pino do LED como saída
      pinMode(ledPin, OUTPUT);
      
      // Configure o pino do botão como entrada com pull-up interno
      pinMode(buttonPin, INPUT_PULLUP);
      
      // Inicialize o LED apagado
      digitalWrite(ledPin, LOW);
    }
    
    void loop() {
    
      // Leia o estado atual do botão
      buttonState = digitalRead(buttonPin);
          Serial.print(buttonState);
      // Verifique se o botão foi pressionado (transição de HIGH para LOW)
      if (buttonState == LOW && lastButtonState == HIGH) {
        // Troque o estado do LED
        ledState = !ledState;
        // Atualize o estado do LED
        digitalWrite(ledPin, ledState ? HIGH : LOW);
        // Espere um tempo para debouncing
        delay(50);
      }
      
      // Armazene o estado atual do botão para a próxima iteração
      lastButtonState = buttonState;
    }
    ```
- Exemplo [joystick](https://docs.wokwi.com/pt-BR/parts/wokwi-analog-joystick)
    - Utilizar portas seriais

    ```javascript
    #define VERT_PIN A0
    #define HORZ_PIN A1
    #define SEL_PIN  2
    
    void setup() {
      pinMode(VERT_PIN, INPUT);
      pinMode(HORZ_PIN, INPUT);
      pinMode(SEL_PIN, INPUT_PULLUP);
    }
    
    void loop() {
      int vert = analogRead(VERT_PIN);
      int horz = analogRead(HORZ_PIN);
      bool selPressed = digitalRead(SEL_PIN) == LOW;
      // horz vai de 0 (direita) a 1023 (esquerda)
      // vert vai de 0 (parte inferior) a 1023 (parte superior)
      // selPressed é true se o joystick estiver pressionado
    }
    ```
- Exercício: Acender 4 leds conforme o movimento realizado pelo *joysctick*
- Exemplo [display de 7 segmentos](https://docs.wokwi.com/pt-BR/parts/wokwi-7segment)
    - P(2) - S(A), P(3) - S(B), P(4) - S(C), P(5) - S(D), P(6) - S(E), P(7) - S(F), P(8) - S(G)
    - COM2 - GND
    ```javascript
    const int segmentPins[8] = {2, 3, 4, 5, 6, 7, 8};
    
    const byte numbers[11] = {
      B11111100, // 0
      B01100000, // 1
      B11011010, // 2
      B11110010, // 3
      B01100110, // 4
      B10110110, // 5
      B10111110, // 6
      B11100000, // 7
      B11111110, // 8
      B11110110  // 9
    };
    
    void setup() {
    
      for (int i = 0; i < 7; i++) {
        pinMode(segmentPins[i], OUTPUT);
      }
    
    }
    
    void loop() {
    
      for (int i = 0; i < 10; i++) 
      {
        displayNumber(i);
        delay(1000);
      }
    }
    
    
    void displayNumber(int num) {
    
      for (int i = 0; i < 8; i++) {
        digitalWrite(segmentPins[i], HIGH);
      }
    
    
      for (int i = 0; i < 8; i++) {
        if (bitRead(numbers[num], i) == LOW) {
          digitalWrite(segmentPins[7-i], LOW);
        }
      }
    
    }
    
    ```
- Uso de [bibliotecas Arduino](https://www.arduino.cc/reference/en/libraries/)
- Exemplo [motor](https://docs.wokwi.com/pt-BR/parts/wokwi-stepper-motor)
    - Definir no `diagram.json`:
    ```json
        {
      "version": 1,
      "author": "Michael Möller",
      "editor": "wokwi",
      "parts": [
        { "type": "wokwi-arduino-uno", "id": "uno", "top": 160.98, "left": -237.02, "attrs": {} },
        {
          "type": "wokwi-stepper-motor",
          "id": "sw1",
          "top": -139.49,
          "left": -191.12,
          "attrs": { "gearRatio": "2:1", "display": "steps", "arrow": "orange" }
        }
      ],
      "connections": [
        [ "sw1:B-", "uno:8", "green", [ "v0" ] ],
        [ "sw1:A-", "uno:11", "yellow", [ "v0" ] ],
        [ "sw1:B+", "uno:9", "red", [ "v0" ] ],
        [ "sw1:A+", "uno:10", "blue", [ "v0" ] ]
      ],
      "dependencies": {}
    }
    ```
- Utilizar biblioteca `Stepper` do Arduino para controlar o motor de passo
    ```javascript
    #include <Stepper.h>
    
    const int stepsPerRevolution = 200;  // change this to fit the number of steps per revolution
    // for your motor
    
    // initialize the stepper library on pins 8 through 11:
    Stepper myStepper(stepsPerRevolution, 8, 9, 10, 11);
    
    void setup() {
      // set the speed at 60 rpm:
      myStepper.setSpeed(60);
      // initialize the serial port:
      Serial.begin(9600);
    }
    
    void loop() {
      // step one revolution  in one direction:
      Serial.println("clockwise");
      myStepper.step(stepsPerRevolution);
      delay(500);
    
      // step one revolution in the other direction:
      Serial.println("counterclockwise");
      myStepper.step(-stepsPerRevolution);
      delay(500);
    }
    ```
- Exemplo [servo](https://docs.wokwi.com/pt-BR/parts/wokwi-servo)
    - Adicionar a biblioteca `Servo` no arquivo `libraries.txt`
    ```javascript
    #include <Servo.h>
    
    Servo arm; // Create a "Servo" object called "arm"
    float pos = 0.0; // Variable where the arm's position will be stored (in degrees)
    float step = 1.0; // Variable used for the arm's position step
    
    void setup() {
    
      arm.attach(2); // Attache the arm to the pin 2
      arm.write(pos); // Initialize the arm's position to 0 (leftmost)
    
    }
    
    void loop() {
    
      arm.write(pos);
      delay(100);
      pos++;
    
    }
    ```
- Incluir ium [potenciômetro](https://docs.wokwi.com/pt-BR/parts/wokwi-potentiometer) para aumentar ou diminuir o passo do `servo`
    - Conectado à porta analógica (A0)
    ```javascript
    #include <Servo.h>
    
    Servo arm; // Create a "Servo" object called "arm"
    float pos = 0.0; // Variable where the arm's position will be stored (in degrees)
    float step = 1.0; // Variable used for the arm's position step
    
    void setup() {
    
      arm.attach(2); // Attache the arm to the pin 2
      arm.write(pos); // Initialize the arm's position to 0 (leftmost)
    
      Serial.begin(115200);
      pinMode(A0, INPUT);
    
    }
    
    void loop() {
    
      arm.write(pos);
      delay(100);
      pos = pos + step;
    
      step = analogRead(A0);
      Serial.println(step);
    
    }
    ```

- Exemplo sensor de temperatura (DS 18B20 - pinos: alimentação, leitura e terra)
    ```javascript
    #include <OneWire.h>
    #include <DallasTemperature.h>
    
    OneWire oneWire(10);
    DallasTemperature sensor(&oneWire);
    
    void setup(void) {
        Serial.begin(115200);
        delay(2);
        sensor.begin();
        delay(20);
    }
    
    void loop(void) {
        sensor.requestTemperatures();
        Serial.print("Temperature is: ");
        delay(10);
        Serial.println(sensor.getTempCByIndex(0));
        delay(1000);
    }
    ```
#### Acesso Internet
- Arduino Uno não possui interface com a internet
- Utilizar o [ESP32](https://wokwi.com/projects/new/esp32) que possui uma placa de rede integrada
- Exemplo de requisição *POST*
    ```javascript
    #include <WiFi.h>
    #include <HTTPClient.h>
    
    void setup() {
      Serial.begin(9600);
      Serial.print("Conectando-se ao Wi-Fi");
      WiFi.begin("Wokwi-GUEST", "", 6);
      while (WiFi.status() != WL_CONNECTED) {
        delay(100);
        Serial.print(".");
      }
      Serial.println(" Conectado!");
    
      // Realizar a requisição POST
      if (WiFi.status() == WL_CONNECTED) {
        HTTPClient http;
    
        // Defina o URL do servidor que receberá a requisição POST
        http.begin("https://teste-iot-server.glitch.me/temperatura"); // Substitua pela URL do servidor
    
        // Defina o tipo de conteúdo (JSON, neste caso)
        http.addHeader("Content-Type", "application/json");
    
        // Dados JSON que serão enviados
        String postData = "{\"sensor\":\"ESP32\",\"temperatura\":\"30\"}";
    
        // Realiza a requisição POST
        int httpResponseCode = http.POST(postData);
    
        // Verifica a resposta do servidor
        if (httpResponseCode > 0) {
          String response = http.getString();  // Obtém a resposta
          Serial.println("Resposta do servidor: " + response);
        } else {
          Serial.println("Erro na requisição POST");
        }
    
        http.end();  // Fecha a conexão
      } else {
        Serial.println("Falha na conexão Wi-Fi");
      }
    }
    
    void loop() {
      // Não precisa fazer nada no loop principal
    }
    ```
    

