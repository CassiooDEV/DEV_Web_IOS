import java.util.Scanner;

public class NumbersVerif {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int contador = 1;
        int par = 0;
        int impar = 0;
        int num = 0;

        while (contador <= 10) {
            System.out.println("Digite um n�mero: ");
            num = input.nextInt();
            if (num % 2 == 0)
                par++;
            else {
                impar++;
            }

            contador++;
        }
        System.out.println("A quantidade de n�meros pares �:" + par);
        System.out.println("A quantidade de n�meros impares �:" + impar);

    }
}

