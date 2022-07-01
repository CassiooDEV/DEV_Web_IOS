import java.util.Scanner;

public class Exemplo2Matriz {
    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);

        // Declara��o da matriz
        int[][] numeros = new int[2][2];
        int somaLinhas = 0, total = 0;

        // Armazenar os dados
        for (int i = 0; i < numeros.length; i++) {
            for (int j = 0; j < numeros[i].length; j++) {
                System.out.println("Digite um n�mero para a posi��o [" + i + "][" + j + "]: ");
                numeros[i][j] = teclado.nextInt();
            }
        }

        // Precorrer os dados para calcular o somat�rio
        for (int i = 0; i < numeros.length; i++) {
            somaLinhas = 0; // zera o acumulador de linhas toda vez que inicia uma nova linha
            for (int j = 0; j < numeros[i].length; j++) {

                somaLinhas += numeros[i][j]; // acumula os somat�rio dos elemento de cada linha
            }
            System.out.println("A soma da linha [" + i + "] �: " + somaLinhas);

            total += somaLinhas; // acumula o somat�rio total dos elementos da matriz
        }

        System.out.println("O somat�rio dos elementos da matriz �: " + total);


        // Precorrer a matrix para imprimir os dados
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