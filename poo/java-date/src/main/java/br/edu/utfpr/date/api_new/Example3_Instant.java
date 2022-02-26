package br.edu.utfpr.date.api_new;

import java.time.Duration;
import java.time.Instant;

/**
 *
 * @author Sobjak
 */
public class Example3_Instant {

    public static void main(String[] args) {
        /**
         * Obter um instante na API antiga
         */
        long instateInicial = System.currentTimeMillis();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        long instanteFinal = System.currentTimeMillis();
        long duracaoEmMilesegundos = instanteFinal - instateInicial;
        System.out.println("Duração em segundos: " + (duracaoEmMilesegundos / 1000) % 60);

        /**
         * Obter um instante na API nova (java.time)
         */
        Instant iInicial = Instant.now();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Instant iFinal = Instant.now();

        Duration duracao = Duration.between(iInicial, iFinal);

        System.out.println("Duração em nanos segundos: " + duracao.toNanos());
        System.out.println("Duração em minutos: " + duracao.toMinutes());
        System.out.println("Duração em horas: " + duracao.toHours());
        System.out.println("Duração em milisegundos: " + duracao.toMillis());
        System.out.println("Duração em dias: " + duracao.toDays());
    }
}
