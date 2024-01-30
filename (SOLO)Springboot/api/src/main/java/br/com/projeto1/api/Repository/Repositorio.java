package br.com.projeto1.api.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.projeto1.api.Models.Loja;

@Repository
public interface Repositorio extends CrudRepository<Loja, Integer> {

    Loja findById(int id);

    int countById(int id);

    Loja findByNameproduct(String name);

    List<Loja> findAll();

    @Modifying
    @Query(value = "UPDATE ListLoja SET " +
            "amount = COALESCE(:#{#Listloja.amount}, amount), " +
            "value = CASE WHEN :#{#Listloja.value} IS NULL THEN value ELSE :#{#Listloja.value} END, " +
            "nameproduct = COALESCE(:#{#Listloja.nameproduct}, nameproduct) " +
            "WHERE id = :id", nativeQuery = true)
    void updateAnyPartOfProduct(@Param("Listloja") Loja produto, @Param("id") Integer id);

}
