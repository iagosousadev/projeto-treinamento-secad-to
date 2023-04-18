package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;

import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class RoleManager {

    public static final int TIMEOUT = 300;

    /**
     * RoleManager
     *
     * @param Entidade<app.entity.Role>
     */
    public static Var BeforeInsert(@ParamMetaData(description = "Entidade", id = "e6bedf99") Var Entidade) throws Exception {
        return new Callable<Var>() {

            public Var call() throws Exception {
                return
                        cronapi.authentication.Operations.beforeInsert(Entidade);
            }
        }.call();
    }

    /**
     * RoleManager
     *
     * @param Entidade<app.entity.Role>
     */
    public static Var BeforeUpdate(@ParamMetaData(description = "Entidade", id = "75ee9924") Var Entidade) throws Exception {
        return new Callable<Var>() {

            public Var call() throws Exception {
                return
                        cronapi.authentication.Operations.beforeUpdate(Entidade);
            }
        }.call();
    }

    /**
     * Descreva esta função...
     *
     * @param Entidade<app.entity.Role>
     */
    public static Var Normalize(@ParamMetaData(description = "Entidade", id = "989c607f") Var Entidade) throws Exception {
        return new Callable<Var>() {

            public Var call() throws Exception {
                return
                        cronapi.authentication.Operations.normalize(Entidade);
            }
        }.call();
    }

}

