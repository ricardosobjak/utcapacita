package br.edu.utfpr.date.api_new;

import java.time.LocalDate;

public class Example8_OutrosMetodos {

    public static void main(String[] args) {
        LocalDate data = LocalDate.now();

        System.out.println("Ano bissexto: " + data.isLeapYear());
        System.out.println("Número de dias do mês: " + data.lengthOfMonth());
        System.out.println("Número de dias do ano: " + data.lengthOfYear());
        System.out.println("Menor data: " + LocalDate.MIN);
        System.out.println("Maior data: " + LocalDate.MAX);
    }

}
