package br.edu.utfpr.controller;

import java.util.List;

public interface GenericController<T, TDTO, ID> {
    public T create(TDTO entity);
    public T update(ID id, TDTO entity);
    public List<T> getAll();
}
