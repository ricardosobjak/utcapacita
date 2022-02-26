package br.edu.utfpr.date.api_old;

import java.util.Calendar;

/**
 * Classe Calendar
 *
 * Essa classe pode produzir os valores de todos os campos de calendário
 * necessários para implementar a formatação de data e hora, para uma
 * determinada língua e estilo de calendário. Por exemplo, japonês, americano,
 * italiano, brasileiro entre outros.
 *
 * A classe Calendar é a mais usada quando se trata de datas, mas como é uma
 * classe abstrata, não pode ser instanciada, portanto para obter um calendário
 * é necessário usar o método estático getInstance()
 */
public class Example2 {

    public static void main(String[] args) {
        Calendar c = Calendar.getInstance();

        System.out.println("Data/Hora atual: " + c.getTime());
        System.out.println("Ano: " + c.get(Calendar.YEAR));
        System.out.println("Mês: " + c.get(Calendar.MONTH)); // 0 a 11
        System.out.println("Dia do Mês: " + c.get(Calendar.DAY_OF_MONTH));
        System.out.println("Dia da Semana: " + c.get(Calendar.DAY_OF_WEEK));
        System.out.println("Dia do Ano: " + c.get(Calendar.DAY_OF_YEAR));
        System.out.println("Hora: " + c.get(Calendar.HOUR));
        System.out.println("Minuto: " + c.get(Calendar.MINUTE));
        System.out.println("Segundo: " + c.get(Calendar.SECOND));
        System.out.println("Milisegundo: " + c.get(Calendar.MILLISECOND));
    }
}
