import java.util.Scanner;

public class Arrays {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);

        String array1[] = new String[4];
        String array2[] = new String[7];
        String array3[] = new String[11];

        System.out.println("Primeiro Array:");
        for(var i = 0; i < array1.length; i++){
            System.out.println("Digite algo: ");
            System.out.print("--> ");
            array1[i] = input.nextLine();
        }
        System.out.println("Primeiro Array concluido!");
        System.out.println("\n");
        System.out.println("Segundo Array:");
        for(var i = 0; i < array2.length; i++){
            System.out.println("Digite algo: ");
            System.out.print("--> ");
            array2[i] = input.nextLine();
        }
        System.out.println("Segundo Array concluido!");
        System.out.println("\n");
        System.out.println("Juntando os arrays: ");
        for(var i = 0; i < array1.length; i++){
            array3[i] = array1[i];
        }
        for(var i = 4; i < array2.length + 4; i++){
            array3[i] = array2[i-4];
        }
        for(var i = 0; i < array3.length; i++){
            System.out.println(array3[i]);
        }
    }
}