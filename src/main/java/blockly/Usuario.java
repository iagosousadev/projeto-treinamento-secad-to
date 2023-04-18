package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;



@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Usuario {

public static final int TIMEOUT = 300;

/**
 *
 * Usuario
 *
 * @author Francisco Iago De Sousa Mendes
 * @since 18/04/2023, 15:23:31
 *
 */
public static Var ObertIDUsuarioLogado() throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    return
cronapi.list.Operations.getFirst((
cronapi.database.Operations.query(Var.valueOf("app.entity.User"),Var.valueOf("select \n	u.id \nfrom \n	User u \nwhere \n	u.normalizedUserName = :normalizedUserName"),Var.valueOf("normalizedUserName",
cronapi.text.Operations.normalize(
cronapi.util.Operations.getCurrentUserName())))));
   }
 }.call();
}

}

