package br.com.projeto1.api.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public Usuario salvarUsuario(Usuario usuario) {
        String senhaCriptografada = passwordEncoder.encode(usuario.getSenha());
        usuario.setSenha(senhaCriptografada);
        return acao.save(usuario);
    }

    

    /*public ResponseEntity<?> procurarpeloemail(String email){
        if (acao.countByEmail(email) == null) {
            
            
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>( HttpStatus.BAD_REQUEST);
        }
    }*/
}
