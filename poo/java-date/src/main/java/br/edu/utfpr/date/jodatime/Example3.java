package br.edu.utfpr.date.jodatime;

import java.util.Locale;
import org.joda.time.DateTime;

public class Example3 {

    public static void main(String... args) {

        DateTime dateTime = new DateTime(1970, 01, 01, 00, 00, 00);

        // Imprimindo a data no formato YYYY-MM-dd
        System.out.println("dateTime.toString() = " + dateTime.toString("YYYY-MM-dd"));

        // Imprimindo a data no formato YYYY-MM-dd HH:mm:ss
        System.out.println("dateTime.toString() = " + dateTime.toString("YYYY-MM-dd HH:mm:ss"));

        // Imprimindo o mês: Janeiro
        System.out.println("dateTime.toString() = " + dateTime.monthOfYear().getAsText());

        // Imprimindo o mês: Jan
        System.out.println("dateTime.toString() = " + dateTime.monthOfYear().getAsShortText());

        // Imprimindo o mês em Inglês
        System.out.println("dateTime.toString() = " + dateTime.monthOfYear().getAsText(Locale.ENGLISH));
    }
}
