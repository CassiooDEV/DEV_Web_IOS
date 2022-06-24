import java.util.Scanner;

public class VerifNum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num;
        System.out.print("Digite um n�mero: ");
        num = input.nextInt();
        System.out.println("---> Tabuada do " + num + " <---");
        for (int i = 0; i <= 10; i++) {
            System.out.println(+num + " x " + i + " = " + (i * num));
        }
        if (num % 2 == 0)
            System.out.println(num + " � par!");
        else
            System.out.println(num + " � impar!");
        
        double raiz = Math.sqrt(num);
        System.out.printf("A raiz quadrada de " + num + " � %.2f %n ", raiz);
    }
}
