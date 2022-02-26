package br.edu.utfpr.date.api_new;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.Locale;

public class Example7_Formatacao {

    public static void main(String[] args) {
        LocalDate hoje = LocalDate.now();
        DateTimeFormatter formatadorBarra = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        DateTimeFormatter formatadorTraco = DateTimeFormatter.ofPattern("dd-MM-yyyy");

        System.out.println("Data com /: " + hoje.format(formatadorBarra));
        System.out.println("Data com -: " + hoje.format(formatadorTraco));

        LocalDateTime localDateTime = LocalDateTime.of(2015, Month.JANUARY, 25, 6, 30);
        System.out.println(localDateTime.format(DateTimeFormatter.ISO_DATE));
        
        
        System.out.println(localDateTime.format(DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM).withLocale(Locale.CANADA)));
        
    }

}
