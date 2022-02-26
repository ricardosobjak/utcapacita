package br.edu.utfpr.date.api_new;

import java.time.LocalDate;

/**
 * Em diversas aplicações é necessário manipular datas de alguma forma, seja
 * para salvar a data de algum evento que aconteceu, como a data de nascimento
 * de uma pessoa, a data de admissão de uma pessoa em uma empresa ou de uma
 * festa. Algumas das possíveis operações de datas são: comparação entre elas,
 * criação de um filtro para encontrar um evento que aconteceu entre duas datas
 * e o cálculo do número de dias ou meses que faltam para um evento. Porém, em
 * Java isso sempre foi um problema, pois a API nativa de manipulação de datas
 * sempre foi bastante limitada.
 *
 * Algumas tentativas para resolver esses problemas surgiram como o framework
 * JodaTime, que tem um conjunto de funcionalidades para a manipulação de datas
 * muito maior que a API do Java até a versão 7. Mas apesar de o JodaTime ser
 * bastante útil os programadores Java, sempre pediram que a API do Java fosse
 * revista para melhorar o tratamento de datas e isso só aconteceu na última
 * versão do Java, onde toda a API foi revista.
 *
 * Necessário o Java 8.
 */
public class Example1_Basic {

    public static void main(String[] args) {
        LocalDate localDate = LocalDate.now();

        System.out.println(localDate);
        System.out.println("Dia da semana: " + localDate.getDayOfWeek().name());
        System.out.println("Dia da semana: " + localDate.getDayOfWeek().ordinal());
        System.out.println("Mes: " + localDate.getMonthValue());
        System.out.println("Mes: " + localDate.getMonth().name());
        System.out.println("Ano: " + localDate.getYear());

        LocalDate date1 = LocalDate.of(2015, 02, 20);
        System.out.println(date1);

        LocalDate date2 = LocalDate.parse("2015-02-20");
        System.out.println(date2);
    }
}
