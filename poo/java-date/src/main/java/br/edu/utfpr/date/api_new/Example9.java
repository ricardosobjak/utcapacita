package br.edu.utfpr.date.api_new;

import static java.time.DayOfWeek.MONDAY;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import static java.time.temporal.ChronoUnit.MINUTES;
import java.time.temporal.TemporalAdjusters;
import static java.time.temporal.TemporalAdjusters.lastDayOfMonth;

/**
 *
 * @author Sobjak
 */
public class Example9 {

    public static void main(String[] args) {
        /**
         * truncatedTo
         *
         * Retorna uma cópia da data truncada pelo campo informado.
         */
        LocalTime horaMinuto = LocalTime.now().truncatedTo(MINUTES);
        System.out.println(horaMinuto);
        //horaMinuto = 20:30

        /**
         * withZoneSameInstant
         *
         * Retorna uma cópia do mesmo instante em um fuso horário diferente.
         * Enquanto em São Paulo temos 25/12/2017 20:30:50 em Los Angeles temos
         * 25/12/2017 14:30:50.
         */
        ZonedDateTime horaSP = ZonedDateTime.of(2017, 12, 25, 20, 30, 50, 0, ZoneId.of("America/Sao_Paulo"));
        ZonedDateTime horaLA = horaSP.withZoneSameInstant(ZoneId.of("America/Los_Angeles"));
        System.out.println("Hora São Paulo: " + horaSP);
        System.out.println("Hora Los Angeles: " + horaLA);

        /**
         * withZoneSameLocal
         *
         * Retorna uma cópia do mesmo instante em um fuso horário diferente
         * mantendo a hora.
         */
        ZonedDateTime horaSP2 = ZonedDateTime.of(2017, 12, 25, 20, 30, 50, 0, ZoneId.of("America/Sao_Paulo"));
        ZonedDateTime horaLA2 = horaSP.withZoneSameLocal(ZoneId.of("America/Los_Angeles"));
        System.out.println("Hora São Paulo: " + horaSP2);
        System.out.println("Hora Los Angeles: " + horaLA2);
        //horaSP = 2017-12-25T20:30:50-02:00[America/Sao_Paulo]
        //horaLA = 2017-12-25T20:30:50-08:00[America/Los_Angeles]

        /**
         * with
         *
         * Retorna uma cópia da data com o ajuste solicitado.
         */
        LocalDate proximaSegundaFeira = LocalDate.of(2017, 12, 1).with(TemporalAdjusters.nextOrSame(MONDAY));
        System.out.println(proximaSegundaFeira);

        //proximaSegundaFeira = 2017-12-04
        LocalDate ultimoDiaMes = LocalDate.of(2017, 12, 1).with(TemporalAdjusters.lastDayOfMonth());
        System.out.println(ultimoDiaMes);

        /**
         * plus - Retorna uma cópia do mesmo instante adicionado do tempo
         * informado. Um voo sai de São Paulo em 31/12/2017 20:30 e tem duração
         * de 12 horas e 35 minutos com destino a Los Angeles. Qual o horário de
         * chegada do voo?
         */
        ZonedDateTime partida = ZonedDateTime.of(2017, 12, 31, 20, 30, 0, 0, ZoneId.of("America/Sao_Paulo"));
        ZonedDateTime chegada = partida.withZoneSameInstant(ZoneId.of("America/Los_Angeles")).plusHours(12).plusMinutes(35);
        System.out.println("Partida SP: " + partida + ", Chegada LA: " + chegada);

        /**
         * Novidades para Data e Hora no Java 9
         *
         */
        /**
         * ofInstant
         *
         * Cria uma instância partindo de um Instant e de um ZoneId.
         *
         * Este método é novo apenas em LocalTime e em LocalDate, ele já existe
         * desde a versão 8 em LocalDateTime e em ZonedDateTime.
         */
        LocalDateTime dataHoraSP = LocalDateTime.ofInstant(Instant.now(), ZoneId.of("America/Sao_Paulo"));
        LocalDateTime dataHoraLA = LocalDateTime.ofInstant(Instant.now(), ZoneId.of("America/Los_Angeles"));
        System.out.println(dataHoraSP); //dataHoraSP = 2017-12-19T20:21:53.983975
        System.out.println(dataHoraLA); //dataHoraLA = 2017-12-19T14:21:53.984012

        /**
         * datesUntil
         *
         * Retorna um Stream<LocalDate> * de datas ordenadas que começa a partir
         * desta data(inclusive) e vai até a data do { final } do { período.
         */
        LocalDate inicioMes = LocalDate.of(2022, 2, 1);
        LocalDate finalMes = inicioMes.with(lastDayOfMonth()).plusDays(1);

        inicioMes.datesUntil(finalMes).forEach(System.out::println);
        //2017-02-01
        //2017-02-02
        //2017-02-03
        //...
        //2017-02-26
        //2017-02-27
        //2017-02-28

        /**
         * toEpochSecond
         *
         * Converte LocalDate para o número de segundos desde a época de
         * 1970–01–01T00: 00:00Z.
         */
        //long segundos = Instant.now().toEpochSecond(horaEspecifica, ZoneOffset.UTC);
        //segundos == 1514233850
    }
}
