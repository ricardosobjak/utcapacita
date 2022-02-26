package br.edu.utfpr.commerce.model;

import java.util.ArrayList;
import java.util.List;

public class Produto {

    private Long id;
    private String nome;
    private String descricao;
    private String unidadeMedida;
    private Float percentualIpi;
    private Float valorUnitario;
    private Float pesoLiquido;
    private Float pesoBruto;
    private Marca marca;
    private Categoria categoria;
    private List<Estoque> estoques = new ArrayList<>();

    public Produto() {
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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getUnidadeMedida() {
        return unidadeMedida;
    }

    public void setUnidadeMedida(String unidadeMedida) {
        this.unidadeMedida = unidadeMedida;
    }

    public Float getPercentualIpi() {
        return percentualIpi;
    }

    public void setPercentualIpi(Float percentualIpi) {
        this.percentualIpi = percentualIpi;
    }

    public Float getValorUnitario() {
        return valorUnitario;
    }

    public void setValorUnitario(Float valorUnitario) {
        this.valorUnitario = valorUnitario;
    }

    public Float getPesoLiquido() {
        return this.pesoLiquido;
    }

    public void setPesoLiquido(Float pesoLiquido) {
        this.pesoLiquido = pesoLiquido;
    }

    public Float getPesoBruto() {
        return this.pesoBruto;
    }

    public void setPesoBruto(Float pesoBruto) {
        this.pesoBruto = pesoBruto;
    }

    public Marca getMarca() {
        return marca;
    }

    public void setMarca(Marca marca) {
        this.marca = marca;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public List<Estoque> getEstoques() {
        return estoques;
    }

    public void setEstoques(List<Estoque> estoques) {
        this.estoques = estoques;
    }

}
