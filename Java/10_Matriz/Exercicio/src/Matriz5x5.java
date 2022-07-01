public class Matriz5x5 {
    public static void main(String[] args){
        int matriz[][]= {{1,0,0,0,0},{0,1,0,0,0},{0,0,1,0,0},{0,0,0,1,0},{0,0,0,0,1}};
        for (int i =0;i< matriz.length;i++){
            for(int j =0;j<matriz[i].length;j++){
                System.out.print(matriz[i][j]+"\t");
            }
            System.out.println("");
        }
    }
}
