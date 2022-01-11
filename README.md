# Sistema de Control de Acceso y Videoconferencia


## Ejecucion del Sistema
### Instalar las dependencias npm:
```
npm install 
```
![](./media/instalaModulos.gif)


### Modifica el localhost:
```
exports.conexion = {
    host     : '192.168.3.40',
    user     : 'root',
    password : 'root',
    database : 'hospital'
}
```

![](./media/cambiarIP.gif)


### Ejecutar el Sistema:
```
npm run soc
```
![](./media/correrServidor.gif)
