package br.edu.utfpr.commerce.model;

import br.edu.utfpr.commerce.model.local.Endereco;

public abstract class Pessoa {

    private Long id;
    private String nome;
    private Endereco endereco;

    public Pessoa() {
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Endereco getEndereco() {
        return this.endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    @Override
    public String toString() {
        return "{"
                + " id='" + getId() + "'"
                + ", nome='" + getNome() + "'"
                + ", endereco='" + getEndereco() + "'"
                + "}";
    }
}
