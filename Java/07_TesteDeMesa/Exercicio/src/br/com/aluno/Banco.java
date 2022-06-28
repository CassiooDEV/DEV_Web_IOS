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
            System.out.println(" 2 - Conta Poupança ");
            System.out.println(" 3 - Conta Estudante ");
            Thread.sleep(2000);
            System.out.println("======= Digite o número correpondente á conta que deseja ========");
            System.out.print("-->");
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
            if(resp == 'n'||resp == 'N'){
                System.out.println("========= SETBank ==========");
                System.out.println(" Obrigado por usar a SETBank ");
                System.out.println("============================");
            }
        }
        input.close();

    }
}
