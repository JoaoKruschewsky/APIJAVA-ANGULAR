package br.com.projeto1.api.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import br.com.projeto1.api.Models.Loja;

@Repository
public interface Repositorio extends CrudRepository<Loja, Integer> {

    Loja findById(int id);

    Loja findByNameproduct(String name);

    List<Loja> findAll();

    @Modifying
    @Query(value = "UPDATE ListLoja SET value = ? WHERE nameproduct = ? ", nativeQuery = true)
    void setaramout(int quantidade, String name);

}
