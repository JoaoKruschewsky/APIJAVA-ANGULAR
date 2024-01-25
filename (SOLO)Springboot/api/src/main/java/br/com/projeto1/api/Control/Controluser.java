package br.com.projeto1.api.Control;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto1.api.Models.Useremail;
import br.com.projeto1.api.Models.Usuario;
import br.com.projeto1.api.Repository.Repositorio;
import br.com.projeto1.api.Repository.Repositoriouser;
import br.com.projeto1.api.Service.Servicousuario;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/usuarios")
public class Controluser {
    @Autowired
    private Repositoriouser acao;

    @Autowired
    private Servicousuario servico;

    @PostMapping("/cadastrarusuario")
    public Usuario cadastrar(@RequestBody Usuario obj) {
        return acao.save(obj);

    }

    @GetMapping("/procurarpeloemail")
    public Usuario procurarpeloemail(@RequestBody Useremail emailuser) {
     
      String email = emailuser.getUseremail();

      return acao.findByEmail(email);

    }

    @GetMapping("/Listar")
    public List<Usuario> Listar() {
        return acao.findAll();
    }
}
