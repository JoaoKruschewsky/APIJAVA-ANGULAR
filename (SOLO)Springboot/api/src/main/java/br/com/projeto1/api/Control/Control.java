package br.com.projeto1.api.Control;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;




import java.util.*;

import br.com.projeto1.api.Models.Product;
import br.com.projeto1.api.Repository.Repositorio;
import br.com.projeto1.api.Service.Servico;
import jakarta.transaction.Transactional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/product") 
public class Control {
    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private Repositorio acao;

    
    @Autowired
    private Servico servico;

    // Cadastrar
    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastro(@RequestBody Product obj) {
        return servico.saveProduct(obj);
    }

    // Mostrar todos
    @GetMapping("Listar")
    public List<Product> listartodos() {
        return acao.findAll();
        

    }

    // Selecionar pelo id
    @GetMapping("selecionarpeloid/{id}")
    public ResponseEntity<?> selecionarpelocodigo(@PathVariable Long id) {
        return servico.selectbyid(id);
    }

   

    @Transactional
    @PutMapping("atualizar/{id}")
    public void  updatebyname(@PathVariable int id, @RequestBody Product produto) {
         acao.updateAnyPartOfProduct(produto, id);

        
         

    }

    // Deletarbyname

    
    // Deletarbycodigo
    @Transactional
    @DeleteMapping("deletarpeloid/{id}")
    public ResponseEntity<?> deletebyid(@PathVariable Long id) {
        return servico.deletebyid(id);
    }

    // Reoganizar os id 


}
