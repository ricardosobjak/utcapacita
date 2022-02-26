package br.edu.utfpr.timeapi;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.FormatStyle;
import java.util.Locale;


public class Exemplo3_Formatacao {
    
    public static void main(String[] args) {
        LocalDate hoje = LocalDate.now();
        
        DateTimeFormatter formato1 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        DateTimeFormatter formato2 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        
        System.out.println(formato1.format(hoje));
        System.out.println(formato2.format(hoje));

        // Exemplo formatando a partir da data
        System.out.println(hoje.format(DateTimeFormatter.ISO_DATE));

        // Exemplo: Formatação específica
        System.out.println(
                hoje.format(DateTimeFormatter.ofLocalizedDate(FormatStyle.SHORT).withLocale(Locale.GERMANY))
        );
    }
}
