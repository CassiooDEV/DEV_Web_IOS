import java.util.Scanner;

public class MaiorValor {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int numbers[] = new int[10];
        int maior=0, menor=9999999;
        double media =0;
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Digite um número:");
            numbers[i] = input.nextInt();

            if (numbers[i] > maior)
                maior = numbers[i];

            if (numbers[i] < menor)
                menor = numbers[i];
            media += numbers[i];
        }
        System.out.println("O maior número é: " + maior);
        System.out.println("O menor número é: " + menor);
        System.out.println("A média dos numeros é: " + media/numbers.length);

        input.close();
    }
}

