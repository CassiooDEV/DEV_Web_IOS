import java.util.Scanner; // Import necessário para utilizar a classe Scanner

public class Calculadora {
    public static void main(String[] args) {

        System.out.println("======= Calculadora ========");

        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite um número:");
        double num1 = entrada.nextDouble(); // Lê a opção digitada
        System.out.println("Digite outro número:");
        double num2 = entrada.nextDouble(); // Lê a opção digitada
        System.out.println("======= Operação Matemática ========");
        System.out.println(" + Adicionar os números ");
        System.out.println(" - Subtrair os números ");
        System.out.println(" * multiplicar os números ");
        System.out.println("======== Escolha uma opcao =========");
        String oper = entrada.next(); // Lê a opção digitada

        switch (oper) {
            case "+":
                double soma = num1 + num2;
                System.out.println("Voce escolheu adição");
                System.out.println("O número " + num1 + " + " + num2 + " = " + soma);
                break;
            case "-":
                double sub = num1 - num2;
                System.out.println("Voce escolheu subtração");
                System.out.println("O número " + num1 + " - " + num2 + " = " + sub);
                break;
            case "*":
                double mult = num1 * num2;
                System.out.println("Voce escolheu subtração");
                System.out.println("O número " + num1 + " * " + num2 + " = " + mult);
                break;
            default:
                System.out.println("Operação não disponível ou inválida!");
        }
        entrada.close();
    } // fim do método main
} // fim da classe Calculadora
