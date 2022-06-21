import java.util.Scanner;

public class Numbers {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int number;

        System.out.println("Digite um número:");
        number = input.nextInt();

        if (number % 2 == 0) {
            System.out.println(+number+" e par!");
        } else {
            System.out.println(+number+" e impar!");
        }

        input.close();
    }
}