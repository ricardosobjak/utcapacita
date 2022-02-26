package br.edu.utfpr.date;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Locale;

public class Exemplo2 {
    
    public static void main(String[] args) {
        Calendar hoje = Calendar.getInstance();
        
        System.out.println(
                hoje.get(Calendar.DAY_OF_MONTH)
                + "/"
                + (hoje.get(Calendar.MONTH) + 1)
                + "/"
                + hoje.get(Calendar.YEAR));

        // Formatador de data
        DateFormat formataData = DateFormat.getDateInstance();
        System.out.println("Data: " + formataData.format(hoje.getTime()));

        // Formatador de Hora
        DateFormat formataHora = DateFormat.getTimeInstance();
        System.out.println(formataHora.format(hoje.getTime()));

        // Formatador de Hora
        DateFormat formataDataHora = DateFormat.getDateTimeInstance();
        System.out.println(formataDataHora.format(hoje.getTime()));
        
        System.out.println(
                DateFormat.getDateInstance(DateFormat.SHORT).format(hoje.getTime())
        );
        
        System.out.println(
                DateFormat.getDateInstance(DateFormat.MEDIUM).format(hoje.getTime())
        );
        
        System.out.println(
                DateFormat.getDateInstance(DateFormat.LONG).format(hoje.getTime())
        );
        
        System.out.println(
                DateFormat.getDateInstance(DateFormat.SHORT).format(hoje.getTime())
        );

        /**
         * Formatação com a Classe SimpleDateFormat
         */
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yy");
        SimpleDateFormat hora = new SimpleDateFormat("hh:mm (ss)");
        
        System.out.println(sdf.format(hoje.getTime()));
        System.out.println(hora.format(hoje.getTime()));
        
        /**
         * Formatação de data conforme o Local
         */
        Locale brasil = new Locale("pt", "BR");
        Locale usa = Locale.US;
        Locale italia = Locale.ITALIAN;
        
        DateFormat dfBrasil = DateFormat.getDateInstance(DateFormat.SHORT, brasil);
        DateFormat dfUsa = DateFormat.getDateInstance(DateFormat.SHORT, usa);
        DateFormat dfItalia = DateFormat.getDateInstance(DateFormat.SHORT, italia);
        
        System.out.println(dfBrasil.format(hoje.getTime()));
        System.out.println(dfUsa.format(hoje.getTime()));
        System.out.println(dfItalia.format(hoje.getTime()));
        
        
    }
    
}
