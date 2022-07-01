public class Exemplo1Matriz {
    public static void main(String[] args) {
        // Declarar e inicializar a matriz
        int numeros[][] = {{4, 5, 1, 10}, {16, 11, 76, 8}, {9, 54, 32, 89}};
        int i, j;
        for (i = 0; i < numeros.length; i++) {
            for (j = 0; j < numeros[i].length; j++) {
                System.out.print(numeros[i][j] + "\t");
            }
            System.out.println("");
        }
    }
}