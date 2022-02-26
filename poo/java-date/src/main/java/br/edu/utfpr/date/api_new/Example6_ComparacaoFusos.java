package br.edu.utfpr.date.api_new;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class Example6_ComparacaoFusos {

    public static void main(String[] args) {
        LocalDateTime hora = LocalDateTime.of(2016, Month.APRIL, 4, 22, 30);

        ZoneId fusoHorarioDeSaoPaulo = ZoneId.of("America/Sao_Paulo");
        ZonedDateTime horaSaoPaulo = ZonedDateTime.of(hora, fusoHorarioDeSaoPaulo);
        System.out.println(horaSaoPaulo);

        ZoneId fusoHorarioDeParis = ZoneId.of("Europe/Paris");
        ZonedDateTime horaParis = ZonedDateTime.of(hora, fusoHorarioDeParis);
        System.out.println(horaParis);

        Duration diferencaDeHoras = Duration.between(horaSaoPaulo, horaParis);
        System.out.println(diferencaDeHoras.getSeconds() / 60 / 60);
    }

}
