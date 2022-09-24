/*
Ser autenticavel significa ter o metodo autenticar
*/ 
export class SistemaDeAutenticacao{
    static login(autenticavel, senha){
        //essa condição irá verificar se o objeto passado no parametro é autenticavel
        if(SistemaDeAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function;
        
        // esse "in" ira verificar se dentro do meu altenticavel tem o autenticar
        // esse "instanceof Function" irá verificar se a propreidade é um metodo
    }
}