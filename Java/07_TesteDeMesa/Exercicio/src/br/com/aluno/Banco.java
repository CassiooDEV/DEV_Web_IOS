package br.com.aluno;

import java.util.Scanner;

public class Banco {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        char resp = 's';

        while (resp == 's' || resp == 'S') {
            System.out.println("======= SETBank ========");
            System.out.println(" 1 - Conta Corrente ");
            System.out.println(" 2 - Conta Poupan�a ");
            System.out.println(" 3 - Conta Estudante ");
            System.out.println("======= Escolha um tipo de conta ========");
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
        }
        input.close();

    }
}
