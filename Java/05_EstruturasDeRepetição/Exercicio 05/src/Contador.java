public class Contador {
    public static void main(String[] args) {
        int contador;
        contador = 100;

        while (contador <= 200) {
            System.out.print(" |- " + contador + " -| ");
            if (contador % 10 == 0) System.out.println("");
            contador++;
        }
    }
}

