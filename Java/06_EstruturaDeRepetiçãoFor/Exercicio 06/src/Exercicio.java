import java.util.Scanner;

public class Exercicio {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String mes;
        for (int i = 0; i < 12; i++) {
            System.out.println("Digite um m�s: ");
            mes = input.nextLine();
            if (mes.equalsIgnoreCase("janeiro")) {
                System.out.println("O m�s de " + mes + " � ver�o");
            }
            if (mes.equalsIgnoreCase("fevereiro")) {
                System.out.println("O m�s de " + mes + " � ver�o");
            }
            if (mes.equalsIgnoreCase("mar�o")) {
                System.out.println("O m�s de " + mes + " � ver�o at� dia 21, a partir dai come�a o outono");
            }
            if (mes.equalsIgnoreCase("abril")) {
                System.out.println("O m�s de " + mes + " � outono");
            }
            if (mes.equalsIgnoreCase("maio")) {
                System.out.println("O m�s de " + mes + " � outono");
            }
            if (mes.equalsIgnoreCase("junho")) {
                System.out.println("O m�s de " + mes + " � outono at� dia 21, a partir dai come�a o inverno");
            }
            if (mes.equalsIgnoreCase("julho")) {
                System.out.println("O m�s de " + mes + " � inverno");
            }
            if (mes.equalsIgnoreCase("agosto")) {
                System.out.println("O m�s de " + mes + " � inverno");
            }
            if (mes.equalsIgnoreCase("setembro")) {
                System.out.println("O m�s de " + mes + " � inverno at� dia 23, a partir dai come�a a primavera");
            }
            if (mes.equalsIgnoreCase("outubro")) {
                System.out.println("O m�s de " + mes + " � primavera");
            }
            if (mes.equalsIgnoreCase("novembro")) {
                System.out.println("O m�s de " + mes + " � primavera");
            }
            if (mes.equalsIgnoreCase("dezembro")) {
                System.out.println("O m�s de " + mes + " � primavera at� dia 21, a partir dai come�a o ver�o");
            }
        }
    }
}
