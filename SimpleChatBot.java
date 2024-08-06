import java.util.Scanner;

public class SimpleChatBot {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String userInput;
        String response;

        System.out.println("Como posso ajudar você hoje?");

        while (true) {
            System.out.print("Você: ");
            userInput = scanner.nextLine().toLowerCase();

            if (userInput.equals("sair")) {
                System.out.println("ChatBot: Adeus! Tenha um ótimo dia!");
                break;
            }

            response = getResponse(userInput);
            System.out.println("ChatBot: " + response);
        }

        scanner.close();
    }

    private static String getResponse(String input) {
        if (input.contains("olá") || input.contains("oi")) {
            return "Olá! Como posso ajudar você?";
        } else if (input.contains("clima") || input.contains("tempo")) {
            return "O clima está ótimo.";
        } else if (input.contains("obrigado") || input.contains("valeu")) {
            return "De nada! Se precisar de mais alguma coisa, é só falar.";
        } else {
            return "Desculpe, não entendi. Pode reformular sua pergunta?";
        }
    }

}