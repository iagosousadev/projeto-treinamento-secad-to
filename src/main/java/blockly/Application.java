package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;



@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Application {

  public static final int TIMEOUT = 300;

  /**
   *
   * @return Var
   */
  // Application
  public static Var Current() throws Exception {
    return new Callable<Var>() {

      public Var call() throws Exception {
        return
            cronapi.util.Operations.getApplicationId();
      }
    }.call();
  }

}