import java.util.Scanner;

public class OrdemNum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        float num1, num2;
        System.out.println("Digite o primeiro n�mero:");
        num1 = input.nextFloat();
        System.out.println("Digite o segundo n�mero:");
        num2 = input.nextFloat();

        if (num1 == num2) {
            System.out.println("Os n�meros sao iguais");
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