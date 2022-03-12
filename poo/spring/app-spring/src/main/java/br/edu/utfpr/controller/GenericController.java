package br.edu.utfpr.controller;

import java.util.List;
import org.springframework.http.ResponseEntity;

public interface GenericController<T, TDTO, ID> {
    public ResponseEntity<Object> create(TDTO entity);
    public ResponseEntity<Object> update(ID id, TDTO entity);
    public ResponseEntity<List<T>> getAll();
}
