package br.edu.utfpr.controller;

import br.edu.utfpr.dto.PaisDTO;
import br.edu.utfpr.model.Pais;
import br.edu.utfpr.service.PaisService;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pais")
public class PaisController implements GenericController<Pais, PaisDTO, Integer> {

    @Autowired
    private PaisService paisService;

    @Override
    @PostMapping
    public ResponseEntity<Object> create(@RequestBody PaisDTO entity) {

        if (this.paisService.existsBySigla(entity.getSigla())) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Conflito: Sigla já existe.");
        }

        System.out.println(entity);
        var pais = new Pais();
        BeanUtils.copyProperties(entity, pais);
        System.out.println(pais);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(paisService.save(pais));
    }

    @Override
    public ResponseEntity<Object> update(Integer id, PaisDTO entity) {
        return null;
    }

    @Override
    @GetMapping
    public ResponseEntity<List<Pais>> getAll() {
        return ResponseEntity.ok(paisService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getById(@PathVariable Integer id) {
        Optional<Pais> pais = this.paisService.findById(id);

        if (pais.isEmpty()) {
            //return ResponseEntity.notFound().build();
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body("Pais não encontrado");
        }

        return ResponseEntity.ok(pais.get());
    }

    @GetMapping("/sigla/{sigla}")
    public ResponseEntity<Object> getBySigla(@PathVariable String sigla) {
        Optional<Pais> pais = this.paisService.findBySigla(sigla);

        if (pais.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(pais.get());
    }

    @GetMapping("/nome/{nome}")
    public ResponseEntity<Object> getByNome(@PathVariable String nome) {
        return ResponseEntity.ok(paisService.findByNome(nome));
    }

}
