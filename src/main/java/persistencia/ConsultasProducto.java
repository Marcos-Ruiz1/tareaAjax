/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package persistencia;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
/**
 *
 * @author marco
 */
public class ConsultasProducto extends Conexion{
    
    public ConsultasProducto(){};
    
    public boolean registrar(String nombre, int cantidad){
        PreparedStatement pst = null;
        try{
            String consulta = "insert into productos (nombre,cantidad) values(?,?)";
            System.out.println("Consulta es: " +consulta);
            pst = getConexion().prepareStatement(consulta);
            pst.setString(1, nombre);
            pst.setInt(2, cantidad);
            
            if(pst.executeUpdate() == 1){
                return true;
            }
            
        }catch(SQLException e){
            System.err.println("Error en la consulta: " +e.getMessage());
        }finally{
            try{
                if(getConexion() != null) getConexion().close();
                if(pst != null) pst.close();
            }catch(SQLException e){
                System.out.println("Error SQL en: " +e.getMessage());
            }
        }
        return false;
    }
}
