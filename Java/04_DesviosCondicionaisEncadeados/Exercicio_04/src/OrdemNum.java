import java.util.Scanner;

public class OrdemNum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num1, num2;
        System.out.println("Digite o primeiro numero:");
        num1 = input.nextInt();
        System.out.println("Digite o segundo numero:");
        num2 = input.nextInt();

        if (num1 == num2) {
            System.out.println("Os numeros sao iguais");
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
