# Sistema de Control de Acceso y Videoconferencia

## Problematica
Durante la emergencia sanitaria generada por el COVID 19 un problema que se presento fue la limitación de visitas hospitalarias para reducir riesgos que afecten la salud de la población, esto perjudica tanto a los pacientes como a los familiares, ya que, no permite la convivencia entre el paciente y el familiar y no se puede observar el estado de salud del paciente.

Para reducir riegos de contagio, las instituciones de gobierno y sector privado limitan el acceso a las personas.

Se debe tener un control de entradas y salidas para tener un numero mínimo de personas dentro de los establecimientos o edificios.

Para controlar las entradas y salidas se debe contar con personal que indique el numero de personas que pueden ingresar en determinado momento y con dispositivos de comunicación.

## Resumen
Crear un sistema de videoconferencia que permita comunicar a los pacientes COVID que se encuentren aislados en un hospital con sus familiares mediante dispositivos electrónicos (smartphone, tabletas, computadoras, entre otros) que cuenten con conexión wifi y con una cámara.

Crear un sistema de control de acceso que permita indicar el numero de personas que puede acezar a determinada área y en determinado horario utilizando dispositivos móviles (smartphone, tables, computadoras, entre otros) y con código QR.

## Módulos del Sistema

### Módulo Servidor
El servidor fue creado en el entorno de desarrollo NodeJS en el lenguaje de programación JavaScript, implementa los paquetes de NPM Express, SocketIO, fs, https y EJS.

### Módulo Registrar Nueva Sala
Este módulo implementa el lenguaje de marcas de hipertexto HTML y las hojas de estilo en cascada CSS para mostrar la interfaz web, además, se implementó el lenguaje de programación JavaScript para obtener los datos del Paciente y el Familiar mediante la lectura de 
un codigo QR, poder comunicarse con el servidor e indicar que se cree una sala de videollamada privada.

### Módulo Mostar Salas Existentes
Este módulo implementa el lenguaje de marcas de hipertexto HTML y las hojas de estilo en cascada CSS para mostrar la interfaz web, además, se implementó el lenguaje de programación JavaScript para comunicarse con el servidor y recibir las salas disponibles de videoconferencia y poder seleccionar a que sala ingresar.

### Módulo Iniciar Conversación En Sala
Este módulo implementa el lenguaje de marcas de hipertexto HTML y las hojas de estilo en cascada CSS para mostrar la interfaz web, además, se implementó el lenguaje de programación JavaScript para la comunicación con el servidor y poder realizar la conexión entre el Paciente y el Familiar mediante WebRTC.

### Módulo Control de Acceso
Este módulo implementa el lenguaje de marcas de hipertexto HTML y las hojas de estilo en cascada CSS para mostrar la interfaz web, se implementó el lenguaje de programación JavaScript para leer los datos del visitante mediante un codigo QR, además, indica si se tiene 
acceso para una determinada área del edificio (negar el acceso a una determinada área puede ser por falta de disponibilidad o por 
el horario no respetado para la sita)

## Ejecucion del Sistema
Instalar las dependencias npm:
```
npm install 
```
![](./media/instalaModulos.gif)


Modifica el localhost:
```
exports.conexion = {
    host     : '192.168.3.40',
    user     : 'root',
    password : 'root',
    database : 'hospital'
}
```

![](./media/cambiarIP.gif)


Ejecutar el Sistema:
```
npm run soc
```
![](./media/correrServidor.gif)
