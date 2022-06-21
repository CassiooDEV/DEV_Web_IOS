import java.util.Scanner;

public class Scores {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        String player;
        float score , game;

        System.out.println("Digite seu Nick:");
        player = input.nextLine();

        System.out.println("Quanto e 5x2?");
        game = input.nextFloat();

        if(game == 10){
            score = 1100;
            if(score>=1000){
            System.out.println("Voce passou para a segunda fase!");}
        }

        input.close();
    }
}
