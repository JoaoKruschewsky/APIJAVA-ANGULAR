package br.com.projeto1.api.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.projeto1.api.Mensagem.Mensagem;
import br.com.projeto1.api.Models.Usuario;
import br.com.projeto1.api.Repository.Repositoriouser;

@Service
public class Servicousuario {
    
    @Autowired
    private Repositoriouser acao;
    @Autowired
    private Mensagem mensagem;
    


   
    public ResponseEntity<?> getuser(Usuario user) {
        // Verificar se o usuário já existe no banco de dados com o mesmo email e senha
        Usuario existingUser = acao.findByEmailAndSenha(user.getEmail(), user.getSenha());
        if (existingUser == null) {
            // Usuário com o mesmo email e senha já existe, retornar um código de status de erro
            mensagem.setMensagem("Usuario nao cadastrado, pedi pra fazer cadastro.");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        }      
    
        // Verificar se o salvamento foi bem-sucedido
      else {
            mensagem.setMensagem("Usuario cadastrado!");
            return new ResponseEntity<>(mensagem, HttpStatus.OK);
        }
    }

    public ResponseEntity<?> cadastro(Usuario user) {
        Usuario existingUser = acao.findByEmailAndSenha(user.getEmail(), user.getSenha());
    
        if (existingUser != null) {
            mensagem.setMensagem("Já existe um usuário com esse Email e Senha");
            return new ResponseEntity<>(mensagem, HttpStatus.BAD_REQUEST);
        } else {
            mensagem.setMensagem("Usuário Cadastrado");
            return new ResponseEntity<>(acao.save(user), HttpStatus.OK);
        }
    }
    
   

    /*public ResponseEntity<?> procurarpeloemail(String email){
        if (acao.countByEmail(email) == null) {
            
            
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>( HttpStatus.BAD_REQUEST);
        }
    }*/
}
