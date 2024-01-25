package br.com.projeto1.api.Service;

import javax.management.RuntimeErrorException;
import javax.swing.JOptionPane;
import javax.swing.Spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.projeto1.api.Mensagem.Mensagem;
import br.com.projeto1.api.Models.Loja;
import br.com.projeto1.api.Repository.Repositorio;
import jakarta.transaction.Transactional;

@Service
public class Servico {

    @Autowired
    private Mensagem mensagem;

    @Autowired
    private Repositorio acao;

    // selecionar pelo Id
    public ResponseEntity<?> selectbyid(int id) {
        if (acao.findById(id) == null) {
            mensagem.setMensagem("Nao existe produto oom esse id");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(acao.findById(id), HttpStatus.OK);
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

    // deletar pelo id
    public ResponseEntity<?> deletebyid(int id) {

        if (acao.findById(id) == null) {
            mensagem.setMensagem("Nao existe produto oom esse id");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else {
            Loja obj = acao.findById(id);
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
            Loja obj = acao.findByNameproduct(name);
            acao.delete(obj);
            mensagem.setMensagem("Produto deletado com sucesso.");
            return new ResponseEntity<>(mensagem, HttpStatus.OK);

        }
    }

    // Uptade pelo nome

    public ResponseEntity<?> uptadebyname(int novaquantidade, String name) {
        if (selectbyname(name) == null) {
            mensagem.setMensagem("Nao existe produto com esse nome");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);

        } else {

            acao.setaramout(novaquantidade, name);
            mensagem.setMensagem(
                    "Produto " + name + "atualizado para quantidade de " + novaquantidade + "com sucesso.");
            return new ResponseEntity<>(mensagem, HttpStatus.OK);

        }

    }
}
