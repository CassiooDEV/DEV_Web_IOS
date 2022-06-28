package br.com.aluno;

import java.util.Scanner;

public class Banco {
    public static void main(String[] args) throws InterruptedException{
        Scanner input = new Scanner(System.in);
        char resp = 's';

        while (resp == 's' || resp == 'S') {
            System.out.println("======= Bem-Vindo ao SETBank ========");
            Thread.sleep(3000);
            System.out.println("======= Qual seu tipo de conta? ========");
            System.out.println(" 1 - Conta Corrente ");
            System.out.println(" 2 - Conta Poupan�a ");
            System.out.println(" 3 - Conta Estudante ");
            Thread.sleep(2000);
            System.out.println("======= Digite o n�mero correpondente � conta que deseja ========");
            System.out.print("-->");
            int menu = input.nextInt();

            switch (menu) {
                case 1:
                    System.out.println("Voc� selecionou Conta Corrente");
                    System.out.println("Voc� est� no SETBank");
                    break;
                case 2:
                    System.out.println("Voc� selecionou Conta Poupan�a");
                    System.out.println("Voc� est� no SETBank");
                    break;
                case 3:
                    System.out.println("Voc� selecionou Conta Estudante");
                    System.out.println("Voc� est� no SETBank");
                    break;
                default:
                    System.out.println("Item de menu invalido");
            }
            System.out.println("Deseja refazer a opera��o? (S/N)");
            resp = input.next().charAt(0);
            if(resp == 'n'||resp == 'N'){
                System.out.println("========= SETBank ==========");
                System.out.println(" Obrigado por usar a SETBank ");
                System.out.println("============================");
            }
        }
        input.close();

    }
}
