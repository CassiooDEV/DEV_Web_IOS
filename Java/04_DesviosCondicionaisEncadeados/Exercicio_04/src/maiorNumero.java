import java.util.Scanner;

public class maiorNumero {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num1, num2,num3;
        System.out.println("Digite o primeiro número:");
        num1 = input.nextInt();
        System.out.println("Digite o segundo número:");
        num2 = input.nextInt();
        System.out.println("Digite o terceiro número:");
        num3 = input.nextInt();

        if (num1 == num2 && num1 == num3 && num2 == num3) {
            System.out.println("Os números sao iguais");
        } else {
            if (num1 > num2 && num1 > num3) {
                System.out.println(num1);
            }
            else if (num2>num3 && num2>num1) {
                System.out.println(num2);
            }
            else if (num3>num2 && num3>num1) {
                System.out.println(num3);
            }
        }
        input.close();
    }
}