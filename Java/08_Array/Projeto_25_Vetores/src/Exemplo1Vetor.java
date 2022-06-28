import java.util.Scanner;

public class Exemplo1Vetor {
    public static void main(String[] args) {

        double[] notas = new double[10];

        Scanner entrada = new Scanner(System.in);

        // comprimento do vetor
        int tamanho = notas.length;

        // loop para leitura das 10 notas
        for (int i = 0; i < tamanho; i++) {
            System.out.println(" Digite a nota " + (i + 1));
            notas[i] = entrada.nextDouble();
        }

        // loop para imprimir as 10 notas
        for (int i = 0; i < tamanho; i++) {
            System.out.println(" nota : " + (i + 1) + " = " + notas[i]);
        }

        entrada.close();
    }
}
