package br.edu.utfpr.exception;

import javax.swing.JOptionPane;

/**
 * Exemplo de tratamento de exceção!
 *
 * @author Ricardo Sobjak
 */
public class Exemplo1 {

    public static void main(String[] args) {
        int numero = -1;

        String res = JOptionPane.showInputDialog("Informe um número");

        try {
            numero = Integer.valueOf(res);
            System.out.println("O número lido foi " + numero);

            if (numero == 10) {
                float a = numero / 0;
            }
        } catch (NumberFormatException e) {
            System.out.println("Formato de número inválido! " + e.getMessage());
            JOptionPane.showMessageDialog(null, "Formato de número inválido");

            //e.printStackTrace();
        } catch(ArithmeticException e) {
            System.out.println("Operação inválida: " + e.getMessage());
        }
        finally {
            System.out.println("Finalizou a execução do algoritmo");
        }

    }
}
