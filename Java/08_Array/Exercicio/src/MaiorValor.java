import java.util.Scanner;

public class MaiorValor {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int numbers[] = new int[10];
        int maior=0, menor=9999999;
        double media =0;
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Digite um n�mero:");
            numbers[i] = input.nextInt();

            if (numbers[i] > maior)
                maior = numbers[i];

            if (numbers[i] < menor)
                menor = numbers[i];
            media += numbers[i];
        }
        System.out.println("O maior n�mero �: " + maior);
        System.out.println("O menor n�mero �: " + menor);
        System.out.println("A m�dia dos numeros �: " + media/numbers.length);

        input.close();
    }
}

