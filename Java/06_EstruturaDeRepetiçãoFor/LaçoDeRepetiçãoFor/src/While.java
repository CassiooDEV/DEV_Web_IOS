import java.util.Scanner;

public class While {
        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);
            int i = 0;
            int age;
            while (i < 5) {
                System.out.print("Digite uma idade:");
                age = input.nextInt();
                if (age >= 18) {
                    System.out.println("Voc� tem " + age + " anos, portanto � maior de idade");
                } else {
                    System.out.println("Voc� tem " + age + " anos, portanto � menor de idade");
                }
                i++;
            }
            input.close();
        }
    }

