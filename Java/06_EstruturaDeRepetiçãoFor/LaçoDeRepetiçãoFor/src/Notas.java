import java.util.Scanner;

public class Notas {
    public static void main(String[] args){
        Scanner input = new Scanner(System.in);
        double nota1,nota2,nota3,nota4,nota5,nota6,nota7,nota8;
        for(int i = 1;i<2;i++){
        System.out.println("Digite a primeira nota:");
        nota1 = input.nextInt();
        System.out.println("Digite a segunda nota:");
        nota2 = input.nextInt();
        System.out.println("Digite a terceira nota:");
        nota3 = input.nextInt();
        System.out.println("Digite a quarta nota:");
        nota4 = input.nextInt();
        System.out.println("Digite a quinta nota:");
        nota5 = input.nextInt();
        System.out.println("Digite a sexta nota:");
        nota6 = input.nextInt();
        System.out.println("Digite a sétima nota:");
        nota7 = input.nextInt();
        System.out.println("Digite a oitava nota:");
        nota8 = input.nextInt();


        double media = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8)/8;
        System.out.println("A média do aluno é "+media);}
    }
}
