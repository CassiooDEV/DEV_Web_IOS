public class Teste {
    public static void main(String[] args) {
        int controle, acumulador = 1;
        boolean condicao;
        System.out.println("Numero da itera��o\tCondi��o\tControle\tAcumulador");
        for (controle = 1; controle <= 10; controle++) {
            acumulador *= controle;
            condicao = controle <= 10;
            System.out.println("Itera��o " + controle + "\t\t\t" + condicao + "\t\t\t"
                    + controle + "\t\t\t" + acumulador);

        }
    } // fim do m�todo main
}
