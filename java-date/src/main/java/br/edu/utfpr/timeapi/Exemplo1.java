package br.edu.utfpr.timeapi;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Month;
import java.time.format.TextStyle;
import java.util.Locale;

/**
 * Exemplo de uso da nova API (Java >= 8) para trabalhar com data.
 * @author Ricardo Sobjak
 */
public class Exemplo1 {
    public static void main(String[] args) {
        LocalDate hoje = LocalDate.now();
        
        System.out.println(hoje);
        System.out.println("Ano:" + hoje.getYear());
        System.out.println("Mês (número): " + hoje.getMonthValue() );
        System.out.println("Mês (nome): " + hoje.getMonth().name() );
        System.out.println("Dia da semana (número): " + hoje.getDayOfWeek().ordinal());
        System.out.println("Dia da semana (nome): " + hoje.getDayOfWeek().name());
        System.out.println("Dia da semana (nome): " + hoje.getDayOfWeek().getDisplayName(TextStyle.SHORT, Locale.FRANCE));
        
        // Instanciação em uma data definida
        LocalDate nascimento = LocalDate.of(1985, Month.JANUARY, 4);
        //LocalDate nascimento = LocalDate.of(1985, 1, 4);
        System.out.println(nascimento);
        
        // Instanciação em uma data definida a partir de uma string
        LocalDate natal = LocalDate.parse("2022-12-25");
        System.out.println(natal);
        
        /**
         * Trabalhar com Hora Local
         */
        LocalTime horaAgora = LocalTime.now();
        System.out.println(horaAgora);
        System.out.println("Hora: " + horaAgora.getHour());
        System.out.println("Minutos: " + horaAgora.getMinute());
        System.out.println("Segundos: " + horaAgora.getSecond());
        System.out.println("Milisegundos: " + horaAgora.getNano());
        
        /**
         * Trabalhar com data e hora
         */
        LocalDateTime dtAgora = LocalDateTime.now();
        System.out.println(dtAgora);
        
        LocalDateTime inicioAula = LocalDateTime.parse("2022-03-03T07:30:00");
        System.out.println(inicioAula);
    }
}
