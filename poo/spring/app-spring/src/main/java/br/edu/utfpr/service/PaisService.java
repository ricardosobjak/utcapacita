package br.edu.utfpr.service;

import br.edu.utfpr.model.Pais;
import br.edu.utfpr.repository.PaisRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaisService {
    @Autowired
    private PaisRepository paisRepository;
    
    public List<Pais> findAll() {
        return this.paisRepository.findAll();
    }
        
    public Pais save(Pais pais) {
        return this.paisRepository.save(pais);
    }
    
    public boolean existsBySigla(String sigla) {
        return this.paisRepository.existsBySigla(sigla);
    }
    
    public Optional<Pais> findById(Integer id) {
        return this.paisRepository.findById(id);
    }
    
    public void delete(Pais pais) {
        this.paisRepository.delete(pais);
    }
    
    public Optional<Pais> findBySigla(String sigla) {
        return this.paisRepository.findBySigla(sigla);
    }
    
    public List<Pais> findByNome(String nome) {
        return this.paisRepository.findByNome(nome); 
    }
    
    
}