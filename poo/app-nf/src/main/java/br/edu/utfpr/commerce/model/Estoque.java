package br.edu.utfpr.commerce.model;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

/**
 * Representa o ESTOQUE de um 'Produto' em uma 'Filial'.
 * 
 * @author Sobjak
 */
public class Estoque {

    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "produto_id")
    private Produto produto;
    
    @ManyToOne
    @JoinColumn(name = "filial_id")
    private Filial filial;
    
    private float valorCusto;
    private float quantidade;

    public Estoque() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public float getValorCusto() {
        return valorCusto;
    }

    public void setValorCusto(float valorCusto) {
        this.valorCusto = valorCusto;
    }

    public float getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(float quantidade) {
        this.quantidade = quantidade;
    }

    public Filial getFilial() {
        return filial;
    }

    public void setFilial(Filial filial) {
        this.filial = filial;
    }
}
