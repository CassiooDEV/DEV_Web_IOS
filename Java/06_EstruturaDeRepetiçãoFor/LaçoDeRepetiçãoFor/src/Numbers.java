public class Numbers {
    public static void main(String[] args) {
        for (int i = 0; i < 1000; i += 2) {
            System.out.print(" | " +i+ " | ");
            if (i % 20 == 0) {
                System.out.println("");
            }
        }
    }
}
