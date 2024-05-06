package persistencia;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
/**
 *
 * @author marco
 */
public class Conexion {
    
    private String USERNAME = "root";
    private String PASSWORD = "admin";
    private String HOST = "localhost";
    private String PORT = "3306";
    private String DATABASE = "laboratorio";
    private String CLASSNAME = "com.mysql.cj.jdbc.Driver";
    private String URL = "jdbc:mysql://"+HOST+":"+PORT+"/"+DATABASE;
    private Connection con;
    
    public Conexion(){
        try{
            Class.forName(CLASSNAME);
            con = DriverManager.getConnection(URL, USERNAME, PASSWORD);
        }catch(ClassNotFoundException e){
            System.err.println("Error en: " +e.getMessage());
        }catch(SQLException e){
            System.err.println("Error en: " +e.getMessage());
        }
    }
    
    public Connection getConexion(){
        
        if(con == null){
            new Conexion();
        }
        return con;
    }
}
