#include <WiFi.h>
#include <PubSubClient.h>

// Substitua pelos detalhes da sua rede WiFi
#define SSID "Wokwi-GUEST"
#define WIFI_PASSWD ""
// Substitua pelos detalhes do broker Mosquitto
#define MQTT_SERVER "test.mosquitto.org"
#define MQTT_PORT 1883 // Porta padrão MQTT para conexões não seguras

WiFiClient espClient;
PubSubClient client(espClient);

void setup_wifi()
{
  delay(10);
  Serial.println();
  Serial.print("Conectando-se a ");
  Serial.println(SSID);

  WiFi.begin(SSID, WIFI_PASSWD);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }

  Serial.println("Conectado.");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}

void connect_mqtt()
{
  while (!client.connected())
  {
    Serial.print("Conectando ao MQTT...");
    if (client.connect("WokwiClient"))
    {
      Serial.println("Conectado.");
    }
    else
    {
      Serial.print("Falha, rc=");
      Serial.print(client.state());
      Serial.println(" Tentar novamente em 5 segundos.");
      delay(5000);
    }
  }
}

void publish_message()
{
  String message = "Hello from ESP!";
  if (client.publish("test/topic-esensato", message.c_str()))
  {
    Serial.println("Mensagem publicada com sucesso.");
  }
  else
  {
    Serial.println("Falha ao publicar a mensagem.");
  }
}

void setup()
{
  Serial.begin(115200);
  setup_wifi();
  client.setServer(MQTT_SERVER, MQTT_PORT);
  connect_mqtt();
}

void loop()
{
  if (!client.connected())
  {
    connect_mqtt();
  }
  client.loop();
  publish_message();
  delay(5000); // Aguarda 5 segundos entre publicações
}