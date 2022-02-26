package br.edu.utfpr.exception;

public class ConversorDiaSemana {

    public static String convert(int dia) throws DiaSemanaException {
        switch (dia) {
            case 1: return "Domingo";
            case 2: return "Segunda-feira";
            case 3: return "Terça-feira";
            case 4: return "Quarta-feira";
            case 5: return "Quinta-feira";
            case 6: return "Sexta-feira";
            case 7: return "Sabado";
            default:
                throw new DiaSemanaException("Se liga mané, este dia no ecxiste!");
        }
    }
}
