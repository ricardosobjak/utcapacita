
package br.edu.utfpr.repository;

import br.edu.utfpr.model.Pais;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaisRepository extends JpaRepository<Pais, Integer>{
    
    public boolean existsBySigla(String sigla);
    
    public Optional<Pais> findBySigla(String sigla);
    
    public List<Pais> findByNome(String nome);
}
