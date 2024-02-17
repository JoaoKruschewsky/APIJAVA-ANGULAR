package br.com.projeto1.api.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import br.com.projeto1.api.Models.Product;

@Repository
public interface Repositorio extends CrudRepository<Product, Long> {

    Product countById(Long id);
    @Query("SELECT l FROM Product l ORDER BY l.id ASC")
    List<Product> findAllOrderedById();

    //int countById(Long id);

    Product findByNameproduct(String name);

    List<Product> findAll();

    @Modifying
    @Query(value = "UPDATE Product SET " +
            "amount = COALESCE(:#{#Listloja.amount}, amount), " +
            "value = COALESCE(:#{#Listloja.value}, value), " +
            "nameproduct = COALESCE(:#{#Listloja.nameproduct}, nameproduct) " +
            "WHERE id = :id", nativeQuery = true)
    void updateAnyPartOfProduct(@Param("Listloja") Product produto, @Param("id") Integer id);

}
