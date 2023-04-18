
package app.entity;

import java.io.*;
import javax.persistence.*;
import java.util.*;
import javax.xml.bind.annotation.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonFilter;
import cronapi.rest.security.CronappSecurity;
import cronapi.swagger.CronappSwagger;


/**
* Classe que representa a tabela PRODUTO
* @generated
*/
@javax.persistence.Entity
@javax.persistence.Table(name = "\"PRODUTO\"")
@XmlRootElement
@CronappSecurity
@JsonFilter("app.entity.Produto")
public class Produto implements Serializable {
    /**
    * UID da classe, necessário na serialização
    * @generated
    */
    private static final long serialVersionUID = 1L;

    /**
    * @generated
    */
    @Id
    @Column(name = "id", nullable = false, insertable=true, updatable=true)
        private java.lang.String id = UUID.randomUUID().toString().toUpperCase();


    /**
    * @generated
    */
    @Column(name = "nome", nullable = true, unique = false, insertable=true, updatable=true)
        
        private java.lang.String nome;


    /**
    * @generated
    */
    @Column(name = "quantidade", nullable = true, unique = false, insertable=true, updatable=true)
        
        private java.lang.Integer quantidade;


    /**
    * Construtor
    * @generated
    */
    public Produto(){
    }

    /**
    * Obtém id
    * return id
    * @generated
    */
    public java.lang.String getId() {
        return this.id;
    }

    /**
    * Define id
    * @param id id
    * @generated
    */
    public Produto setId(java.lang.String id) {
        this.id = id;
        return this;
    }
    /**
    * Obtém nome
    * return nome
    * @generated
    */
    public java.lang.String getNome() {
        return this.nome;
    }

    /**
    * Define nome
    * @param nome nome
    * @generated
    */
    public Produto setNome(java.lang.String nome) {
        this.nome = nome;
        return this;
    }
    /**
    * Obtém quantidade
    * return quantidade
    * @generated
    */
    public java.lang.Integer getQuantidade() {
        return this.quantidade;
    }

    /**
    * Define quantidade
    * @param quantidade quantidade
    * @generated
    */
    public Produto setQuantidade(java.lang.Integer quantidade) {
        this.quantidade = quantidade;
        return this;
    }

    /**
    * @generated
    */
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
Produto object = (Produto)obj;
        if (id != null ? !id.equals(object.id) : object.id != null) return false;
        return true;
    }

    /**
    * @generated
    */
    @Override
    public int hashCode() {
        int result = 1;
        result = 31 * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

}