package br.edu.utfpr.commerce;

import br.edu.utfpr.commerce.model.local.Endereco;
import br.edu.utfpr.commerce.model.local.Pais;
import br.edu.utfpr.commerce.model.local.Estado;
import br.edu.utfpr.commerce.model.local.Cidade;

public class App {

    public static void main(String[] args) {
        Pais br = new Pais("Brasil", "BR");
        Estado pr = new Estado("Paraná", "PR", br);
        Cidade medianeira = new Cidade("Medianeira", pr);
        Endereco e = new Endereco("Rua A", "1234", "Cidade Alta", medianeira, "85884-000");

       // Pessoa juca = new PessoaFisica("Juca", e, "00011122233344", "12345");

        //System.out.println(juca);
    }
}
