package br.edu.utfpr.commerce.model;

public class Filial extends PessoaJuridica {
    private String descricao;

    public Filial() {
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

}
