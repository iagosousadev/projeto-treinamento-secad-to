package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;

import java.util.concurrent.Callable;


@CronapiMetaData(type = "blockly")
@CronappSecurity
public class UserManager {

    public static final int TIMEOUT = 300;

    /**
     * UserManager
     *
     * @param Entidade<app.entity.User>
     */
    public static Var BeforeDelete(@ParamMetaData(description = "Entidade", id = "6d0d416f") Var Entidade) throws Exception {
        return new Callable<Var>() {

            public Var call() throws Exception {
                return
                        cronapi.authentication.Operations.beforeDelete(Entidade);
            }
        }.call();
    }

    /**
     * UserManager
     *
     * @param Entidade<app.entity.User>
     */
    public static Var BeforeInsert(@ParamMetaData(description = "Entidade", id = "5df10557") Var Entidade) throws Exception {
        return new Callable<Var>() {

            public Var call() throws Exception {
                return
                        cronapi.authentication.Operations.beforeInsert(Entidade);
            }
        }.call();
    }

    /**
     * UserManager
     *
     * @param Entidade<app.entity.User>
     */
    public static Var BeforeUpdate(@ParamMetaData(description = "Entidade", id = "8537bddc") Var Entidade) throws Exception {
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
     * @param Entidade<app.entity.User>
     */
    public static Var Normalize(@ParamMetaData(description = "Entidade", id = "83c51450") Var Entidade) throws Exception {
        return new Callable<Var>() {

            public Var call() throws Exception {
                return
                        cronapi.authentication.Operations.normalize(Entidade);
            }
        }.call();
    }

}

