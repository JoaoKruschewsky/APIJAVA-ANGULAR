package br.com.projeto1.api.Control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto1.api.Models.Sector;
import br.com.projeto1.api.Repository.repositorySector;
import br.com.projeto1.api.Service.serviceSector;
import jakarta.transaction.Transactional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/sector")
public class controlSector {
    

    @Autowired
    private serviceSector service;
    
    @Autowired 
    private repositorySector action;

    @PostMapping("/save")
    public ResponseEntity<?> saveSector(@RequestBody Sector sector){
        return service.saveSector(sector);
    }
        
    @GetMapping("List")
    public List<Sector> listSectors() {
        return action.findAll();
        
    }

   
    @DeleteMapping("delete/{id}")
    public void  deletById(@PathVariable long id) {
         action.deleteById(id);
    }

    
}
