package br.com.projeto1.api.Control;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto1.api.Models.Sector;
import br.com.projeto1.api.Repository.repositorySector;
import br.com.projeto1.api.Service.Servicousuario;
import br.com.projeto1.api.Service.serviceSector;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/sector")
public class controlSector {
        @Autowired
    private repositorySector action;

    @Autowired
    private serviceSector service;
    


    @PostMapping("sector/save")
    public ResponseEntity<?> saveSector(@RequestBody Sector sector){
        return service.saveSector(sector);
    }
         
    
}