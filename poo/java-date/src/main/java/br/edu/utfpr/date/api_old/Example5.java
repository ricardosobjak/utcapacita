package br.edu.utfpr.date.api_old;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Conversões Às vezes é preciso transformar um texto em uma data ou vice versa,
 * para isso abaixo é exibida a função parse e a classe SimpleDateFormat.
 * Geralmente a classe SimpleDateFormat é mais usada quando trata-se de
 * formatação de datas, pois já no seu construtor, quando instanciada, permite
 * passar como argumento o formato da data desejada.
 */
public class Example5 {

    public static void main(String[] args) throws ParseException {
        Calendar c = Calendar.getInstance();
        Date data = c.getTime();

        DateFormat f = DateFormat.getDateInstance();

        //Date data2 = f.parse("04/01/1985");
        //System.out.println(data2);

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        System.out.println("Data formatada: " + sdf.format(data));

        //Converte Objetos
        System.out.println("Data convertida: " + sdf.parse("02/08/1970"));
    }
}
