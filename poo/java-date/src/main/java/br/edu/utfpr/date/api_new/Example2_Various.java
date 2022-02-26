package br.edu.utfpr.date.api_new;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class Example2_Various {

    public static void main(String[] args) {
        LocalTime horaAgora = LocalTime.now();
        System.out.println(horaAgora);

        LocalTime horaEspecifica = LocalTime.of(20, 30, 50);
        System.out.println(horaEspecifica);

        LocalTime horaEspecificaDoTexto = LocalTime.parse("20:30:50");
        System.out.println(horaEspecificaDoTexto);

        LocalDate dataHoje = LocalDate.now();
        System.out.println(dataHoje);

        LocalDate dataEspecifica = LocalDate.of(2017, 12, 25);
        System.out.println(dataEspecifica);

        LocalDate dataEspecificaDoTexto = LocalDate.parse("2017-12-25");
        System.out.println(dataEspecificaDoTexto);

        LocalDateTime dataHoraAgora = LocalDateTime.now();
        System.out.println(dataHoraAgora);

        LocalDateTime dataHoraEspecifica = LocalDateTime.of(2017, 12, 25, 20, 30, 50);
        System.out.println(dataHoraEspecifica);

        LocalDateTime dataHoraEspecificaDoTexto = LocalDateTime.parse("2017-12-25T20:30:50");
        System.out.println(dataHoraEspecificaDoTexto);

        Instant momentoAgora = Instant.now();
        System.out.println("Momento agora: " + momentoAgora);

        Instant momentoDoTexto = Instant.parse("2017-12-25T20:30:50Z");
        System.out.println("Momento do texto: " + momentoDoTexto);

        ZonedDateTime dataHoraZonaAgora = ZonedDateTime.now();
        System.out.println(dataHoraZonaAgora);

        ZonedDateTime dataHoraZonaEspecifica = ZonedDateTime.of(dataHoraEspecifica, ZoneId.of("America/Sao_Paulo"));
        System.out.println(dataHoraZonaEspecifica);

        ZonedDateTime dataHoraZonaEspecificaDoTexto = ZonedDateTime.parse("2017-12-25T20:30:50-02:00[America/Sao_Paulo]");
        System.out.println(dataHoraZonaEspecificaDoTexto);
    }
}
