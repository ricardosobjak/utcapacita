package br.edu.utfpr.commerce.model;

public class PessoaFisica extends Pessoa {
    private String cpf;
    private String rg;

    public PessoaFisica() {
    }

    public String getCpf() {
        return this.cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getRg() {
        return this.rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }
}
