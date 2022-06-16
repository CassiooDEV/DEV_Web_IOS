public class OperArit {
    // método main inicia a execução do aplicativo
    public static void main(String[] args) {
        System.out.println("Precedência: " + (10 / 2 + 3));
        System.out.println("Alterando a Precedência: " + 10 / (2 + 3));

        System.out.println("Divisão inteira: " + 9 / 2);
        System.out.println("Divisão real: " + 9 / 2.0);
        System.out.println("Divisão real: " + 9.0 / 2);
        System.out.println("Divisão real: " + 9.0 / 2.0);

        System.out.println("Resto da divisão inteira: " + 9 % 2);
        System.out.println("Resto da divisão inteira: " + 8 % 2);
        System.out.println("Resto da divisão inteira: " + 9 % 5);
    } // fim do método main
}