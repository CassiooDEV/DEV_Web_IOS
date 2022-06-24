import java.util.Scanner;

public class Exercicio {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String mes;
        for (int i = 0; i < 12; i++) {
            System.out.println("Digite um mês: ");
            mes = input.nextLine();
            if (mes.equalsIgnoreCase("janeiro")) {
                System.out.println("O mês de " + mes + " é verão");
            }
            if (mes.equalsIgnoreCase("fevereiro")) {
                System.out.println("O mês de " + mes + " é verão");
            }
            if (mes.equalsIgnoreCase("março")) {
                System.out.println("O mês de " + mes + " é verão até dia 21, a partir dai começa o outono");
            }
            if (mes.equalsIgnoreCase("abril")) {
                System.out.println("O mês de " + mes + " é outono");
            }
            if (mes.equalsIgnoreCase("maio")) {
                System.out.println("O mês de " + mes + " é outono");
            }
            if (mes.equalsIgnoreCase("junho")) {
                System.out.println("O mês de " + mes + " é outono até dia 21, a partir dai começa o inverno");
            }
            if (mes.equalsIgnoreCase("julho")) {
                System.out.println("O mês de " + mes + " é inverno");
            }
            if (mes.equalsIgnoreCase("agosto")) {
                System.out.println("O mês de " + mes + " é inverno");
            }
            if (mes.equalsIgnoreCase("setembro")) {
                System.out.println("O mês de " + mes + " é inverno até dia 23, a partir dai começa a primavera");
            }
            if (mes.equalsIgnoreCase("outubro")) {
                System.out.println("O mês de " + mes + " é primavera");
            }
            if (mes.equalsIgnoreCase("novembro")) {
                System.out.println("O mês de " + mes + " é primavera");
            }
            if (mes.equalsIgnoreCase("dezembro")) {
                System.out.println("O mês de " + mes + " é primavera até dia 21, a partir dai começa o verão");
            }
        }
    }
}
