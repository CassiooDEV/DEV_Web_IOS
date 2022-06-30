import java.util.Locale;
import java.util.Scanner;

public class Strings {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String fruits[] = new String[5];

        //Armazenando no array
        for (var i = 0; i < fruits.length; i++) {
            System.out.println("Digite uma fruta:");
            fruits[i] = input.nextLine();
            fruits[i] = fruits[i].toUpperCase().trim();
            var compare = fruits[i].compareTo(fruits[0]);
            var empty = fruits[i].isEmpty();
            var tamanho = fruits[i].length();
            if (empty == true) {
                System.out.println("Como assim você não preencheu nada?");
            } else if (compare == 0) {
                System.out.println("Você colocou duas frutas iguais?!");
            } else if (tamanho < 3) {
                System.out.println("Nome pequeno pra uma fruta né?");
            } else if (compare != 0 && tamanho >= 3) {
                System.out.println("OK!");
            }
            if (compare != 0 && tamanho >= 3 && empty == false) {
                System.out.print("[ " + fruits[i].toLowerCase() + " ]");
            } else if (compare == 0 || tamanho < 3 || empty == true) {
                System.out.println("Você preencheu alguma fruta errado, por favor preencha a lista novamente!");
            }

        }


    }
}
