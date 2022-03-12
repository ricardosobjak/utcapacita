package br.edu.utfpr.commerce;

import br.edu.utfpr.commerce.model.local.Endereco;
import br.edu.utfpr.commerce.model.local.Pais;
import br.edu.utfpr.commerce.model.local.Estado;
import br.edu.utfpr.commerce.model.local.Cidade;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
import java.util.List;

public class App {

    public static void main(String[] args) {
        EntityManagerFactory factory = Persistence.createEntityManagerFactory("app-comercio");

        // Gerenciador de entidades (persistir, recuperar, interagir com o DB)
        EntityManager em = factory.createEntityManager();

        Pais br = new Pais("Brasil", "BR");

        Estado pr = new Estado("Paraná", "PR", br);
        Cidade medianeira = new Cidade("Medianeira", pr);

        // Obtendo uma transação
        EntityTransaction transaction = em.getTransaction();

        try {
            transaction.begin(); // Iniciando a transação

            // em.persist(br); // Persistindo o Pais Brasil
            //em.persist(pr); // Persistindo o estado do Paraná
            em.persist(medianeira); // Persistindo a cidade de Medianeira 

            em.persist(new Pais("Paraguay", "PY"));
            em.persist(new Pais("Argentina", "AR"));

            transaction.commit(); // Efetivando as alterações do DB
        } catch (Exception e) {
            System.out.println("Falha ao executar transação: " + e.getMessage());
            transaction.rollback();

            e.printStackTrace();
        } finally {
            //em.close();
            //factory.close();
            System.out.println("Transação para inserir Pais, Estado e Cidade foi finalizada");
        }

        Endereco e = new Endereco("Rua A", "1234", "Cidade Alta", medianeira, "85884-000");

        // Pessoa juca = new PessoaFisica("Juca", e, "00011122233344", "12345");
        //System.out.println(juca);
        // Exemplos de consulta no Banco de Dados
        // JPQL
        // select * from tb_pais;
        // select id, nome FROM tb_pais
        Query query1 = em.createQuery("SELECT p FROM Pais p");
        List<Pais> paises = query1.getResultList();
        System.out.println(paises);

        String strQuery2 = "SELECT p FROM Pais p WHERE p.sigla = 'PY'";
        TypedQuery<Pais> query2 = em.createQuery(strQuery2, Pais.class);
        Pais py = query2.getSingleResult();
        System.out.println(py);

        // Exemplo de Named Query
        TypedQuery<Long> query3 = em.createNamedQuery("Pais.count", Long.class);
        Long qtd = query3.getSingleResult();
        System.out.println("Total de países: " + qtd);

        TypedQuery<Pais> query4 = em.createNamedQuery("Pais.getBySigla", Pais.class);
        query4.setParameter("sigla", "AR");
        query4.setParameter("n", "Argentina");
        //query4.setParameter(1, "AR");
        Pais ar = query4.getSingleResult();
        System.out.println(ar);

    }
}
