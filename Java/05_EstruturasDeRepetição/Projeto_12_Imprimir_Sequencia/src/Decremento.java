public class Decremento {
    public static void main(String[] args) {
        int contador = 99; // Declara e inicializa o contador

        while (contador >= 10) {
            System.out.print(" |- "+ contador +" -|");
            if (contador % 10 == 0) System.out.println(""); // Quebra de linha para ver todos os n�meros
            contador--; // mesma coisa que utilizar contador = contador - 1
        }
    } // fim do m�todo main
} // fim da classe Decremento

