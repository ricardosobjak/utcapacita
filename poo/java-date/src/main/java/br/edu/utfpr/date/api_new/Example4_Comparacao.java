package br.edu.utfpr.date.api_new;

import java.time.LocalDate;
import java.time.Period;

public class Example4_Comparacao {

    public static void main(String[] args) {
        LocalDate localDateAntigo = LocalDate.of(2010, 3, 7);
        LocalDate localDateNovo = LocalDate.of(2015, 3, 5);

        System.out.println(localDateAntigo.isAfter(localDateNovo));
        System.out.println(localDateAntigo.isBefore(localDateNovo));
        System.out.println(localDateAntigo.isEqual(localDateNovo));

        Period periodo = Period.between(localDateAntigo, localDateNovo);
        System.out.println(periodo.getYears() + " Anos " + periodo.getMonths() + " Meses " + periodo.getDays() + " Dias");
        System.out.println("Apenas meses: " + periodo.toTotalMonths());
    }
}
