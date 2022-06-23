import java.util.Scanner;

public class MenorNum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int num, arrayNum = 999999999,contador=0;
        while(contador<=10){

        System.out.println("Digite um número:");
        num = input.nextInt();

        if(num<arrayNum){
            arrayNum = num;
        }
        contador++;
        }
        System.out.println("O menor numero é: "+arrayNum);
    }
}
