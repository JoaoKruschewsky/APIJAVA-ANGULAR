package br.com.projeto1.api.Service;

import java.util.HashMap;

import org.apache.catalina.connector.Response;
import org.apache.tomcat.util.http.parser.HttpParser;
import org.hibernate.mapping.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.projeto1.api.Mensagem.Mensagem;
import br.com.projeto1.api.Models.Sector;
import br.com.projeto1.api.Repository.repositorySector;
import io.micrometer.common.lang.NonNull;

@Service
public class serviceSector {
    
    @Autowired
    private Mensagem mensage;

    @Autowired
    private repositorySector action;

    public ResponseEntity<?> saveSector(Sector sector) {
           
        if ( action.findByName(sector.getName()) != null) {

            mensage.setMensagem("Já existe um setor com esse nome!");
            return new ResponseEntity<>(mensage, HttpStatus.BAD_REQUEST);
        } else { 
        
            Sector saveSector = action.save(sector);
           mensage.setMensagem("Nao existe setor com esse nome, Salvando... " + " Nome do Setor salvo: "  + saveSector  );
            return new ResponseEntity<>(mensage,HttpStatus.OK);
        }
    }
}
