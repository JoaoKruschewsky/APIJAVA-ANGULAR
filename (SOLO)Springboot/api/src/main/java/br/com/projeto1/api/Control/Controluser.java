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

import br.com.projeto1.api.Models.Usuario;
import br.com.projeto1.api.Repository.Repositorio;
import br.com.projeto1.api.Repository.Repositoriouser;
import br.com.projeto1.api.Service.Servicousuario;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/users")
public class Controluser {
    @Autowired
    private Repositoriouser acao;

    @Autowired
    private Servicousuario servico;
    


    @PostMapping("/cadastrarusuario")
    public ResponseEntity<?> cadastrar(@RequestBody Usuario obj) {
        return servico.cadastro(obj);

    }

    

    @GetMapping("/Listar")
    public List<Usuario> Listar() {
        return acao.findAll();
    }

    @PostMapping("/getuser")
    public ResponseEntity<?> getUserbyPaassword(@RequestBody Usuario user) {
        return servico.getuser(user);
    }
    
}
