package br.com.projeto1.api.Repository;

import java.util.*;
import org.springframework.data.repository.CrudRepository;

import br.com.projeto1.api.Models.Usuario;
import java.util.List;


public interface Repositoriouser extends CrudRepository<Usuario, Long> {

    String countByEmail(String email);

    Usuario findByEmail(String email);

    Usuario findByEmailAndSenha(String email, String senha);


    List<Usuario> findAll();

    Usuario findBySenha(String senha);
}
