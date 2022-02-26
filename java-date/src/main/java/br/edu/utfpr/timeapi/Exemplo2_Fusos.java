package br.edu.utfpr.timeapi;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class Exemplo2_Fusos {

    public static void main(String[] args) {
        // Instanciando uma data e hora
        LocalDateTime data = LocalDateTime.of(2022, 5, 15, 10, 30, 00);

        // Instanciar fusos
        ZoneId fusoSP = ZoneId.of("America/Sao_Paulo");
        ZoneId fusoParis = ZoneId.of("Europe/Paris");

        ZonedDateTime horaSP = ZonedDateTime.of(data, fusoSP);
        System.out.println("Hora São Paulo:" + horaSP);

        ZonedDateTime horaParis = ZonedDateTime.of(data, fusoParis);
        System.out.println("Hora em Paris: " + horaParis);

        Duration diferenca = Duration.between(horaSP, horaParis);
        System.out.println("Diferença: " + diferenca.getSeconds() / 60 / 60);
        
        System.out.println("Mesmo instante em Paris: " 
                + horaSP.withZoneSameInstant(fusoParis));
    }
}
