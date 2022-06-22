import java.util.Scanner;

public class OrdemNum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        float num1, num2;
        System.out.println("Digite o primeiro número:");
        num1 = input.nextFloat();
        System.out.println("Digite o segundo número:");
        num2 = input.nextFloat();

        if (num1 == num2) {
            System.out.println("Os números sao iguais");
        } else {
            if (num1 > num2) {
                System.out.println(num1);
                System.out.println(num2);
            } else {
                System.out.println(num2);
                System.out.println(num1);
            }
        }
        input.close();
    }
}