import java.util.Scanner;

public class Age {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        for (var i = 0; i < 5; i++) {
            int age;
            System.out.print("Digite uma idade:");
            age = input.nextInt();
            if (age >= 18) {
                System.out.println("Voc� tem " + age + " anos, portanto � maior de idade");
            } else {
                System.out.println("Voc� tem " + age + " anos, portanto � menor de idade");
            }

        }
        input.close();
    }
}
