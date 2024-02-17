package br.com.projeto1.api.Repository;

import org.springframework.stereotype.Repository;

import br.com.projeto1.api.Models.Sector;

import org.springframework.data.repository.CrudRepository;

/**
 * repository
 */

 @Repository
public interface  repositorySector extends CrudRepository<Sector, Long> {


    Sector countBySector ( Sector sector);
    
}