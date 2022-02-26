package br.edu.utfpr.date.jodatime;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.TimeZone;

/**
 * Trabalhando com Joda-Time
 *
 * A API padrão de manipulação de data/hora do Java sempre foi alvo de críticas
 * por parte da comunidade. Muitos a consideram complicada e até mesmo
 * deselegante. Tarefas simples, como calcular dias entre datas não estão
 * disponíveis na API e devem ser calculadas "no braço". Isso contraria o
 * movimento atual do desenvolvimento de software, que a cada dia privilegia
 * linguagens e frameworks menos "verbosos", que economizam digitação e
 * favorecem a produtividade e expressividade.
 *
 * Visando atacar as deficiências da API nativa, foi criado a biblioteca
 * Joda-Time, que oferece uma solução de alto nível para manipular data/hora.
 * Alguns pontos a destacar do Joda-Time: Facilidade de uso, Simplicidade,
 * Imutabilidade e Interface Fluente.
 *
 *
 * Classe DateTime
 *
 * A classe DateTime é a alternativa à classe Calendar. As classes Calendar e
 * Date representam instantes no tempo. Um instante pode ser considerado a
 * quantidade de milisegundos a partir da data de referência: 1970-01-01T00:00Z
 * (GMT).
 */
public class Example1 {

    public static void main(String... args) {
        // Configurando a data referência
        TimeZone timeZone = TimeZone.getTimeZone("GMT");
        Calendar calendar = new GregorianCalendar(1970, 00, 01, 00, 00, 00);
        calendar.setTimeZone(timeZone);

        // Deve ser 0
        System.out.println("Diferenca em milisegundos = " + calendar.getTimeInMillis());

        // Configurando uma hora de diferença
        calendar.set(Calendar.HOUR_OF_DAY, 1);
        // Deve ser de 1 hora = 3600000 milisegundos
        System.out.println("Diferenca em milisegundos = " + calendar.getTimeInMillis());
        System.out.println("Diferenca em horas = " + calendar.getTimeInMillis() / 1000 / 60 / 60);

        /**
         * Isso demonstra que o método getTimeInMillis() retorna sempre a
         * diferença em milissegundos da data configurada no Calendar e a data
         * referência.
         */
    }
}
