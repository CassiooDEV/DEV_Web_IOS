import java.util.Scanner;

public class MaiorValor {
    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);

        int maior;
        int[] numeros = new int[5];

        // comprimento do vetor
        int tamanho = numeros.length;

        for (int i = 0; i < tamanho; i++) {
            System.out.println("Digite um número:");
            numeros[i] = entrada.nextInt();
        }

        maior = numeros[0];

        // encontra o maior número
        for (int i = 0; i < tamanho; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
        }

        System.out.println("O maior número é: " + maior);
        entrada.close();
    }
}