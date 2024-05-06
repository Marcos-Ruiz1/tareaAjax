/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dominio;

/**
 *
 * @author marco
 */
public class Producto {
    private int id;
    private String nombre;
    private int cantidad;
    
    public Producto(){
        
    }

    public Producto(int id, String nombre, int canitdad) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = canitdad;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int canitdad) {
        this.cantidad = canitdad;
    }
    
    
}
