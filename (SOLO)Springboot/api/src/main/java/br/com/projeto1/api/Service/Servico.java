package br.com.projeto1.api.Service;

import java.util.List;

import javax.management.RuntimeErrorException;
import javax.swing.JOptionPane;
import javax.swing.Spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.projeto1.api.Mensagem.Mensagem;
import br.com.projeto1.api.Models.Product;
import br.com.projeto1.api.Repository.Repositorio;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

@Service
public class Servico {

    @Autowired
    private Mensagem mensagem;

    @Autowired
    private Repositorio acao;

    // selecionar pelo Id
  public ResponseEntity<?> selectbyid(Long id ) {
        if (acao.countById(id) == null){
            mensagem.setMensagem("Nao existe produto oom esse id");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(acao.countById(id), HttpStatus.OK);
        }
    }

    // selecionar pelo nome
    public ResponseEntity<?> selectbyname(String name) {
        if (acao.findByNameproduct(name) == null) {
            mensagem.setMensagem("Nao existe produto com esse nome");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(acao.findByNameproduct(name), HttpStatus.OK);
        }
    }

    public ResponseEntity<?> saveProduct(Product product){ 
        Product productexisting = acao.findByNameproduct(product.getNameproduct());
        
        if (product.getNameproduct() == "" || product.getAmount() == 0 || product.getValue() == null ) {
            mensagem.setMensagem("Insira todos os elementos na Entrada");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else  if (productexisting == null) {
                mensagem.setMensagem("Nao existe nenhum produto com esse Nome!");
                return new ResponseEntity<>(acao.save(product), HttpStatus.OK);

        } else {
            mensagem.setMensagem("Já existe um produto com esse Nome!");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        }
    }

    // deletar pelo id
    public ResponseEntity<?> deletebyid(Long id) {

        if (acao.countById(id) == null) {
            mensagem.setMensagem("Nao existe produto oom esse id");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else {
            Product obj = acao.countById(id);
            acao.delete(obj);
            mensagem.setMensagem("Produto deletado com sucesso");
            return new ResponseEntity<>(mensagem, HttpStatus.OK);
        }
    }

    // deletar pelo nome
    public ResponseEntity<?> delete(String name) {
        if (acao.findByNameproduct(name) == null) {
            mensagem.setMensagem("Esse produto nao existe.");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else {
            Product obj = acao.findByNameproduct(name);
            acao.delete(obj);
            mensagem.setMensagem("Produto deletado com sucesso.");
            return new ResponseEntity<>(mensagem, HttpStatus.OK);

        }
    }
 
    // Uptade pelo nome

   /* public ResponseEntity<?> uptadebyname(int id) {
        if (selectbyid(id) == null) {
            mensagem.setMensagem("Nao existe produto com esse nome");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);

        } else {

            acao.setaramout();
            mensagem.setMensagem(
                    "Produto " + name + "atualizado para quantidade de " + novaquantidade + "com sucesso.");
            return new ResponseEntity<>(mensagem, HttpStatus.OK);

        }

    }*/ 
}
