package br.edu.utfpr.date.jodatime;

import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.joda.time.Hours;

/**
 * Como DateTime utiliza a mesma data de referência, ela é facilmente
 * intercambiável com a API Padrão do Java. Além disso, ela é imutável e provê
 * várias facilidades que suas co-irmãs não possuem.
 *
 * FAVORITAR CONCLUÍDO 8GOSTEI 8
 *
 * Suporte ao aluno
 *
 * Anotar
 *
 * Marcar como concluído Artigos Java Trabalhando com Joda-Time A API padrão de
 * manipulação de data/hora do Java sempre foi alvo de críticas por parte da
 * comunidade. Muitos a consideram complicada e até mesmo deselegante. Tarefas
 * simples, como calcular dias entre datas não estão disponíveis na API e devem
 * ser calculadas "no braço". Isso contraria o movimento atual do
 * desenvolvimento de software, que a cada dia privilegia linguagens e
 * frameworks menos "verbosos", que economizam digitação e favorecem a
 * produtividade e expressividade.
 *
 * Visando atacar as deficiências da API nativa, foi criado a biblioteca
 * Joda-Time, que oferece uma solução de alto nível para manipular data/hora.
 * Alguns pontos a destacar do Joda-Time:
 *
 * Facilidade de uso Simplicidade Imutabilidade Interface Fluente Veremos como
 * utilizar alguns dos recursos do Joda-Time para resolveremos problemas comuns
 * do dia-a-dia. Nos exemplos abaixo, utilizou-se a versão 2.1 do Joda Time, que
 * pode ser obtida nesse link.
 *
 * Classe DateTime A classe DateTime é a alternativa à classe Calendar. As
 * classes Calendar e Date representam instantes no tempo. Um instante pode ser
 * considerado a quantidade de milisegundos a partir da data de referência:
 * 1970-01-01T00:00Z (GMT).
 *
 * import java.util.Calendar; import java.util.GregorianCalendar; import
 * java.util.TimeZone;
 *
 * public class InstanteTest { public static void main(String... args) { //
 * Configurando a data referência TimeZone timeZone =
 * TimeZone.getTimeZone("GMT"); Calendar calendar = new GregorianCalendar(1970,
 * 00, 01, 00, 00, 00); calendar.setTimeZone(timeZone); // Deve ser 0
 * System.out.println("Diferenca em milisegundos = " +
 * calendar.getTimeInMillis());
 *
 * // Configurando uma hora de diferença calendar.set(Calendar.HOUR_OF_DAY, 1);
 * // Deve ser de 1 hora = 3600000 milisegundos System.out.println("Diferenca em
 * milisegundos = " + calendar.getTimeInMillis()); System.out.println("Diferenca
 * em horas = " + calendar.getTimeInMillis()/1000/60/60); } } Listagem 1.
 * Compreendendo a data de referência Diferenca em Milisegundos = 0 Diferenca em
 * Milisegundos = 3600000 Diferenca em Horas = 1 Listagem 2. Resultado do código
 * da listagem 1 Isso demonstra que o método getTimeInMillis() retorna sempre a
 * diferença em milissegundos da data configurada no Calendar e a data
 * referência.
 *
 * Como DateTime utiliza a mesma data de referência, ela é facilmente
 * intercambiável com a API Padrão do Java. Além disso, ela é imutável e provê
 * várias facilidades que suas co-irmãs não possuem.
 *
 * import org.joda.time.DateTime; import org.joda.time.DateTimeZone; import
 * org.joda.time.Hours;
 *
 * public class InstanteJodaTimeTest {
 *
 * public static void main(String... args) { // Configurando a data referência
 * DateTimeZone timeZone = DateTimeZone.forID("GMT"); DateTime dateTime1 = new
 * DateTime(1970, 01, 01, 00, 00, 00, timeZone); // Deve ser 0
 * System.out.println("Diferenca em milisegundos = " + dateTime1.getMillis());
 *
 * // Configurando uma hora de diferença DateTime dateTime2 =
 * dateTime1.plusHours(1); // Deve ser de 1 hora = 3600000 milisegundos
 * System.out.println("Diferenca em milisegundos = " + dateTime2.getMillis());
 * System.out.println("Diferenca em horas = " + Hours.hoursBetween(dateTime1,
 * dateTime2).getHours()); } } Listagem 3. Versão utilizando Joda-Time Diferenca
 * em milisegundos = 0 Diferenca em milisegundos = 3600000 Diferenca em horas =
 * 1 Listagem 4. Saída da versão utilizando Joda-Time Existem algumas diferenças
 * importantes entre os 2 códigos:
 *
 * DateTime é imutável, por isso cada operação (como plusHour), retorna a cópia
 * do original (no caso, com a hora acrescida). Não existe um set(field, value)
 * como no Calendar. Isso é similar as operações da classe String, que também é
 * imutável.
 *
 * DateTime trabalha com o mês = 1 e não 0, como o Date/Calendar.
 *
 *
 * DateTime oferece várias métodos intuitivos para manipular os campos hora,
 * minuto e segundo, como os métodos plus e minus.
 *
 * Existe a classe Hours, que entre outras coisas, calcula a diferença de horas
 * entre dois DateTimes. Além dela, temos as classes Days, Months, Minutes,
 * Seconds, Weeks e Years que facilitam o cálculo de diferença de data/hora.
 *
 */
public class Example2 {

    public static void main(String... args) {
        // Configurando a data referência
        DateTimeZone timeZone = DateTimeZone.forID("GMT");
        DateTime dateTime1 = new DateTime(1970, 01, 01, 00, 00, 00, timeZone);
        // Deve ser 0
        System.out.println("Diferenca em milisegundos = " + dateTime1.getMillis());

        // Configurando uma hora de diferença
        DateTime dateTime2 = dateTime1.plusHours(1);

        // Deve ser de 1 hora = 3600000 milisegundos
        System.out.println("Diferenca em milisegundos = " + dateTime2.getMillis());
        System.out.println("Diferenca em horas = " + Hours.hoursBetween(dateTime1, dateTime2).getHours());
    }
}
