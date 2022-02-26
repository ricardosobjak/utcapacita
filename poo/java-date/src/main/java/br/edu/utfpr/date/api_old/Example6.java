package br.edu.utfpr.date.api_old;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import javax.xml.crypto.Data;

/**
 * O Java oferece a classe Locale, que permite definir de qual país deseja-se
 * obter o retorno das informações, como data e hora. Nos exemplos acima não foi
 * necessário instanciar essa classe, pois já é detectado automaticamente do
 * computador quais são as configurações regionais.
 */
public class Example6 {
    
    public static void main(String[] args) throws ParseException {
        Calendar c = Calendar.getInstance();
        Date data = c.getTime();
        
        Locale brasil = new Locale("pt", "BR"); //Retorna do país e a língua
        Locale eua = Locale.US;
        Locale italia = Locale.ITALIAN;
        
        DateFormat f2 = DateFormat.getDateInstance(DateFormat.FULL, brasil);
        System.out.println("Data e hora brasileira: " + f2.format(data));
        
        DateFormat f3 = DateFormat.getDateInstance(DateFormat.FULL, eua);
        System.out.println("Data e hora americana: " + f3.format(data));
        
        DateFormat f4 = DateFormat.getDateInstance(DateFormat.FULL, italia);
        System.out.println("Data e hora italiana: " + f4.format(data));
        
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM", brasil);
        System.out.println(sdf.format(new Date()));
        System.out.println(sdf.getTimeZone());
        
    }
}
