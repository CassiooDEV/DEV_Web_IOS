package br.com.aluno;

import java.util.Scanner;

public class Banco {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        char resp = 's';

        while (resp == 's' || resp == 'S') {
            System.out.println("======= SETBank ========");
            System.out.println(" 1 - Conta Corrente ");
            System.out.println(" 2 - Conta Poupança ");
            System.out.println(" 3 - Conta Estudante ");
            System.out.println("======= Escolha um tipo de conta ========");
            int menu = input.nextInt();

            switch (menu) {
                case 1:
                    System.out.println("Você selecionou Conta Corrente");
                    System.out.println("Você está no SETBank");
                    break;
                case 2:
                    System.out.println("Você selecionou Conta Poupança");
                    System.out.println("Você está no SETBank");
                    break;
                case 3:
                    System.out.println("Você selecionou Conta Estudante");
                    System.out.println("Você está no SETBank");
                    break;
                default:
                    System.out.println("Item de menu invalido");
            }
            System.out.println("Deseja refazer a operação? (S/N)");
            resp = input.next().charAt(0);
        }
        input.close();

    }
}
