package br.com.projeto1.api.Repository;

import org.springframework.stereotype.Repository;

import br.com.projeto1.api.Models.Sector;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

/**
 * repository
 */

 @Repository
public interface  repositorySector extends CrudRepository<Sector, Long> {


    Sector countByName ( String name );

    Sector findByName( String name);

     List<Sector> findAll();

    
}