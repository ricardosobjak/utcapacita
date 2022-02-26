package br.edu.utfpr.date.jodatime;

import org.joda.time.DateTime;
import org.joda.time.format.DateTimeFormatter;
import org.joda.time.format.DateTimeFormatterBuilder;

/**
 * Method chaining
 *
 * uma das formas de se implementar interface fluente.
 */
public class Example5 {

    public static void main(String... args) {

        DateTime dateTime = new DateTime();

        // Configurando o ano para 2010
        System.out.println(dateTime.withYear(2010));

        // Somando 20 dias
        System.out.println(dateTime.withYear(2010).plusDays(20));

        // Verificando se o ano é bissexto
        System.out.println(dateTime.withYear(2010).plusDays(20).year().isLeap());

        DateTimeFormatter fmt = new DateTimeFormatterBuilder().
                appendDayOfMonth(2). // 2 Digito (Valor mínimo) - reenche com 0 se for menor que 10 
                appendLiteral('-'). // Separador
                appendMonthOfYearText(). // Mes como Texto
                appendLiteral('-'). // Separador
                appendYear(2, 4). // Numero minimo para impressao (2) | Numero { maximo } para parse (4)
                toFormatter();

        // Imprime DD-Mes Por Extenso-Ano
        System.out.println(fmt.print(dateTime));
    }
}
