public class While2 {
    public static void main(String[] args) {
        int i = 0;
        while (i < 1000) {
            System.out.print(" | " + i + " | ");
            if (i % 20 == 0) {
                System.out.println("");
            }
            i+=2;
        }
    }
}

