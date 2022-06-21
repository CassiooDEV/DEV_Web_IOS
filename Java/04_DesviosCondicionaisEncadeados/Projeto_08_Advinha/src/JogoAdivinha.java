
import java.util.Scanner; // Import necessário para utilizar a classe

public class JogoAdivinha {
    public static void main(String[] args) {
        // Intância do objeto (buffer) utilizando a classe Scanner
        Scanner entrada = new Scanner(System.in);
        int palpite;
        System.out.println("Digite seu palpite:");
        palpite = entrada.nextInt();
        int adv = 15 - palpite;
        int adv1 = palpite - 15;
        if (palpite == 15) {
            System.out.println("Você acertou!!!");
        } else {
            if (palpite < 15) {
                System.out.println("Seu palpite esta " +adv+ " abaixo do numero correto !!!");
            } else {
                System.out.println("Seu palpite esta "+adv1+ " acima do numero correto!!!");
            }
        }
        entrada.close();
    } // fim da classe JogoAdivinha
}  // fim do método main
