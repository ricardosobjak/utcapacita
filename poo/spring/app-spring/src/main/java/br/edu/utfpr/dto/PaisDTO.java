package br.edu.utfpr.dto;

public class PaisDTO {
    private String nome;
    private String sigla;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSigla() {
        return sigla;
    }

    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    @Override
    public String toString() {
        return "PaisDTO{" + "nome=" + nome + ", sigla=" + sigla + '}';
    }

    
}
