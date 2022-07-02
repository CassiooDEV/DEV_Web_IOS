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
            var empty = fruits[i].isEmpty();
            var tamanho = fruits[i].length();
            if (empty == true) {
                System.out.println("Como assim você não preencheu nada?");
            } else if (tamanho < 3) {
                System.out.println("Nome pequeno pra uma fruta né?");
            } else if (empty == false && tamanho >= 3) {
                System.out.println("OK!");
            }
            if ( tamanho >= 3 && empty == false) {
                System.out.println("[ " + fruits[i].replace(fruits[i], fruits[i].toLowerCase()) + " ]");
            } else if ( tamanho < 3 || empty == true) {
                System.out.println("Você preencheu errado, por favor preencha novamente!");
            }

        }


    }
}
