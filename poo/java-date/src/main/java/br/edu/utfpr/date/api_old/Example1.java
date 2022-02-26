package br.edu.utfpr.date.api_old;

import java.util.Date;

/**
 * Classe Date
 *
 * A data representa o tempo, um tempo é composto por ano, mês, dia atual,
 * minuto atual, entre outras propriedades que essa classe possui.
 *
 * Hoje a maioria dos métodos da classe Date estão classificados como deprecated
 * (depreciados), ou seja, são métodos que não são mais utilizados, por isso
 * essa classe foi substituída pela classe Calendar, para haver suporte correto
 * à internacionalização do sistema de datas.
 */
public class Example1 {

    public static void main(String[] args) {
        Date data = new Date();
        System.out.println("Data Agora: " + data);
    }
}
