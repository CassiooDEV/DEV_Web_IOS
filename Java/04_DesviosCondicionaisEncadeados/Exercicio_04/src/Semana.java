import java.util.Scanner;

public class Semana {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int day;
        System.out.println("Digite um número de 1 a 7:");
        day = input.nextInt();
        switch (day) {
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Segunda");
                break;
            case 3:
                System.out.println("Terça");
                break;
            case 4:
                System.out.println("Quarta");
                break;
            case 5:
                System.out.println("Quinta");
                break;
            case 6:
                System.out.println("Sexta");
                break;
            case 7:
                System.out.println("Sabado");
                break;
            default:
                System.out.println("Digite um número de 1 a 7");
                break;
        }
        input.close();
    }
}
