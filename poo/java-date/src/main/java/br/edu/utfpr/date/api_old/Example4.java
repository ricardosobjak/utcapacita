package br.edu.utfpr.date.api_old;

import java.text.DateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 *
 * DateFormat Essa classe permite converter informações do tipo String para data
 * do tipo Date, permitindo seguir um formato. Consegue-se trabalhar ao
 * contrário, convertendo um dado do tipo Date para uma String. Por ser uma
 * classe abstrata, não é possível instanciá-la, por isso deve ser usado para
 * método estático getDateInstance(). Sempre quando declarado é preciso importar
 * o pacote java.text.
 *
 * Abaixo são mostrados alguns exemplos dos métodos de formatação das datas.
 *
 */
public class Example4 {

    public static void main(String[] args) {
        Calendar c = Calendar.getInstance();
        c.set(2013, Calendar.FEBRUARY, 28);
        Date data = c.getTime();
        System.out.println("Data atual sem formatação: " + data);

        //Formata a data
        DateFormat formataData = DateFormat.getDateInstance();
        System.out.println("Data atual com formatação: " + formataData.format(data));

        //Formata Hora
        DateFormat hora = DateFormat.getTimeInstance();
        System.out.println("Hora formatada: " + hora.format(data));

        //Formata Data e Hora
        DateFormat dtHora = DateFormat.getDateTimeInstance();
        System.out.println(dtHora.format(data));

        DateFormat formataDataBrasileira = DateFormat.getDateInstance(DateFormat.FULL); //Data COmpleta
        System.out.println("Data brasileira: " + formataDataBrasileira.format(data));

        DateFormat formataDataBrasileira2 = DateFormat.getDateInstance(DateFormat.LONG);
        System.out.println("Data sem o dia descrito: " + formataDataBrasileira2.format(data));

        DateFormat formataDataBrasileira3 = DateFormat.getDateInstance(DateFormat.MEDIUM);
        System.out.println("Data resumida 1: " + formataDataBrasileira3.format(data));

        DateFormat formataDataBrasileira4 = DateFormat.getDateInstance(DateFormat.SHORT);
        System.out.println("Data resumida 2: " + formataDataBrasileira4.format(data));
    }
}
