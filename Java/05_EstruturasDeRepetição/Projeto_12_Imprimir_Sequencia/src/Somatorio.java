public class Somatorio {
    public static void main(String[] args) {
        int contador = 1;
        int acumulador = 0;

        while (contador <= 100) {
            if (contador % 2 == 0)
                acumulador = acumulador + contador; // adiciona o contador par ao acumulador
            contador++; // incrementa o contador
        }
        System.out.println("A soma dos n�meros pares de 1 a 100 � " + acumulador);
    } // fim do m�todo main
} // fim da classe Somatorio