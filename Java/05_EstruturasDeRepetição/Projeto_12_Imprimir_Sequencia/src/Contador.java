public class Contador {
    public static void main(String[] args) {
        int contador; // declarando o contado
        contador = 12; // inicializando o contador

        while (contador <= 99) {
            System.out.print( " |- "+ contador +" -| ");
            if (contador % 11 == 0) System.out.println(""); // Quebra de linha para ver todos os n�meros
            contador++; // mesma coisa que utilizar contador = contador + 1
        }
    } // fim do m�todo main
} // fim da classe Contador

