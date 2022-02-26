package br.edu.utfpr.date.jodatime;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import org.joda.time.format.ISODateTimeFormat;

/**
 * Classes DateTimeFormatter e DateTimeFormat Para realizar o parse e formatação
 * de Strings para data/hora e vice-versa, temos as classes DateTimeFormatter
 * (que efetua as operações de formatação e parse) e a DateTimeFormat (fábrica
 * que cria objetos DateTimeFormatter a partir de padrões e estilos).
 *
 */
public class Example4 {

    public static void main(String... args) {
        DateTime dateTime = new DateTime(1970, 01, 01, 00, 00, 00);
        DateTimeFormatter fmt = DateTimeFormat.forPattern("dd-MM-YYYY");

        // Alternativa 1
        System.out.println(fmt.print(dateTime));
        
        // Alternativa 2
        System.out.println(dateTime.toString(fmt));

        // Efetuando parse da string no formato "dd-MM-YYYY"
        dateTime = fmt.parseDateTime("21-12-2012");
        System.out.println(dateTime.toString(fmt));

        // Imprimindo no formato ISO8601
        fmt = ISODateTimeFormat.dateTime();
        System.out.println(fmt.print(dateTime));
    }
}
