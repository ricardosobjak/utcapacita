package br.edu.utfpr.date;

import java.util.Calendar;
import java.util.Date;

import static java.util.Calendar.MONTH;
import static java.util.Calendar.DAY_OF_MONTH;

/**
 * Exemplo de uso de datas com a API antiga.
 */
public class Exemplo1 {

    public static void main(String[] args) {
        // Classe Date
        Date hoje = new Date();
        System.out.println(hoje);

        // Calendário
        Calendar c = Calendar.getInstance();
        System.out.println(c);
        System.out.println("Data/hora atual: " + c.getTime());
        System.out.println("Ano: " + c.get(Calendar.YEAR));
        System.out.println("Mês: " + c.get(Calendar.MONTH));
        System.out.println("Dia do Mês: " + c.get(Calendar.DAY_OF_MONTH));
        System.out.println("Dia da Semana: " + c.get(Calendar.DAY_OF_WEEK));
        System.out.println("Dia do ano: " + c.get(Calendar.DAY_OF_YEAR));
        System.out.println("Hora: " + c.get(Calendar.HOUR));
        System.out.println("Minutes: " + c.get(Calendar.MINUTE));
        System.out.println("Milisegundos: " + c.get(Calendar.MILLISECOND));
        
        // Definir uma data específica
        c.set(2018, 2, 28, 8, 25, 55); 
        System.out.println(c.getTime());
        
        // Definindo a data pelor atributos
        c.set(Calendar.YEAR, 2025);
        c.set(MONTH, 5);
        c.set(DAY_OF_MONTH, 10);
        c.set(Calendar.HOUR, 12);
        System.out.println(c.getTime());
        
    }
}
