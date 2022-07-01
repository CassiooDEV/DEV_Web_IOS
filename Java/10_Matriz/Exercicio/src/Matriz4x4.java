import java.util.Scanner;

public class Matriz4x4 {
    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);

        // Declaração da matriz
        int numeros[][] = new int[4][4];
        int contador = 0;

        // Armazenar os dados
        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                System.out.println("Digite um número para a posição [" + i + "][" + j + "]: ");
                numeros[i][j] = teclado.nextInt();
            }
        }
       System.out.println ("Esses são os números maiores que 10 na sua matriz");
        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                if (numeros[i][j] > 10) {
                    System.out.println("[ " + numeros[i][j] + " ] \t");
                    contador++;
                }
            }
        }

        System.out.println("Essa matriz tem " + contador + " números maior que 10");
        System.out.println("=================================================");

        System.out.println("| Elementos da Matriz |");

        System.out.println("=================================================");

        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                System.out.print(numeros[i][j] + "\t");
            }
            System.out.println("");
        }
        teclado.close();
    }
}

