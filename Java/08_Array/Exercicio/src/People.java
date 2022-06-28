import java.util.Scanner;

public class People {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String people[] = new String[5];
        for (int i = 0; i < people.length; i++) {
            System.out.println("Digite um nome: ");
            people[i] = input.nextLine();
        }
        for (int c = 4; c >= 0; c--) {
            System.out.println(people[c]);
        }
    }
}
