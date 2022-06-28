import java.util.Random;
import java.util.Scanner;

public class Sorteio {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        Random rand = new Random();
        int menor =99999;
        int numbers[]= new int[10];
        for(int i = 0;i<numbers.length;i++){
            numbers[i] = rand.nextInt(10)+1;
            if (numbers[i] < menor)
                menor = numbers[i];
            System.out.print(" ["+numbers[i]+"] ");


        }
        System.out.println(" ");
        System.out.println("O menor número é: " +menor);
    }
}
