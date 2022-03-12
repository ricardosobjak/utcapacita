
package br.edu.utfpr.controller;

import br.edu.utfpr.dto.PaisDTO;
import br.edu.utfpr.model.Pais;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pais")
public class PaisController implements GenericController<Pais, PaisDTO, Integer> {

    @Override
    @PostMapping
    public Pais create(PaisDTO entity) {
        System.out.println(entity);
        return new Pais();
    }

    @Override
    public Pais update(Integer id, PaisDTO entity) {
        return new Pais();
    }

    @Override
    public List<Pais> getAll() {
        return new ArrayList<>();
    }
    
}
