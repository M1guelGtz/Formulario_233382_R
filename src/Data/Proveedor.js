export class Proveedor{
    #nombreEmpresa
    #telefonoEmpresa
    #emailEmpresa
    #direccionEmpresa

    getEmpresa(){    return this.#nombreEmpresa  }
    setEmpresa(nombre){    this.#nombreEmpresa = nombre    }

    getTelefonoEmp(){   return this.#telefonoEmpresa    }
    setTelefonoEmp(telefono){   this.#telefonoEmpresa = telefono    }

    getEmailEmp(){  return this.#emailEmpresa   }
    setEmailEmp(email){ this.#emailEmpresa = email  }

    getDirEmp(){    return this.#direccionEmpresa   }
    setDirEmp(direccion){   this.#direccionEmpresa = direccion  }
}