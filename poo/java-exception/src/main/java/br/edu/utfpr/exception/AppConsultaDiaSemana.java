package br.edu.utfpr.exception;

public class AppConsultaDiaSemana {

    public static void main(String[] args) {

        int dia = 10;

        try {
            System.out.println(ConversorDiaSemana.convert(dia));
        } catch(DiaSemanaException e) {
            System.out.println(e.getMessage());
        }
    }
}
