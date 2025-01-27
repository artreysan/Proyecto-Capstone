//Módulo local Dep.js
const Dep = require('./dependencias.js');

// Modulo GenerarPDF
const generarPDF = require('./generarPDF');

//Se agrega el puerto 3000
Dep.app.set('port', process.env.PORT || 3000);
//Se agrega la Direccion IP
Dep.app.set('address', '192.168.1.67');

//Dirección de los archivos estaticos
Dep.app.use(Dep.express.static(Dep.path.join(__dirname, '..', "Documentos_PDF")));
Dep.app.use(Dep.express.static(Dep.path.join(__dirname, '..')));

///Documentos estaticos
Dep.app.use('/Registro', Dep.express.static(Dep.path.join(__dirname, '..', 'Public', 'Registro')));
Dep.app.use('/ControlAcceso', Dep.express.static(Dep.path.join(__dirname, '..', 'Public', 'ControlAcceso')));
Dep.app.use('/Paciente', Dep.express.static( Dep.path.join( __dirname , '..' , 'Public' , 'Paciente' ) ));

//Dirección de motor de plantilla
Dep.app.set( 'views' , Dep.path.join( __dirname , '..' , 'Public' , 'Sala' ) );

//Motor de plantilla
Dep.app.set( 'view engine' , 'ejs' );

//Middleware que analiza archivos urlencoded en solicitudes post
Dep.app.use(Dep.express.urlencoded({ extended: true }));
Dep.app.use(Dep.express.json({ type: "application/json" }));

//Documentos dinamicos con ejs
Dep.app.post('/CrearPDF', (req, res) => {
  generarPDF.crearPDF(req.body).then(( nombrePDF ) => {
    res.send(JSON.stringify({ "nombrePDF": nombrePDF }));
  });
});

Dep.app.post('/MostrarPDF', (req, res) => {
  let direccion = Dep.path.join(__dirname, '..', 'Documentos_PDF', `${req.body.nombrePDF}.pdf`);
  if (Dep.fs.existsSync(direccion)) {
    var data = Dep.fs.readFileSync(direccion, 'base64');
    res.send(JSON.stringify({ "dato": data }));
  } else {
    console.log("El archivo NO EXISTE!");
    res.send(JSON.stringify({ "Dato": "No Existe" }));
  }
});

//Documentos dinamicos con ejs
Dep.app.post( '/:id' , (req,res) => {
  if( req.body.persona == "familiar" ){
      res.render( 'index' , {
          miNombre : req.body.nombreFamiliar + " " + req.body.apellidosFamiliar,
          familiarNombre : req.body.nombrePaciente + " " + req.body.apellidosPaciente,
          url : req.body.url,
          regresar : `https://${Dep.app.get('address')}:${Dep.app.get('port')}/Familiar`
      });
  }else if( req.body.persona == "paciente" ){
      res.render( 'index' , {
          miNombre : req.body.miNombre,
          familiarNombre : req.body.nombreFamiliar,
          url : req.body.url,
          regresar : `https://${Dep.app.get('address')}:${Dep.app.get('port')}/Paciente`
      });
  }else{
      res.send('¡O no!, la página a la que deceas acceder no existe');
  }
});

//Configuracion del Servidor https
const server = Dep.https.createServer({
  cert: Dep.fs.readFileSync(Dep.path.join(__dirname, '..', 'Certificados', 'cert.pem')),
  key: Dep.fs.readFileSync(Dep.path.join(__dirname, '..', 'Certificados', 'key.pem'))
}, Dep.app).listen(Dep.app.get('port'), function () {
  console.log('Servidor https corriendo en puerto ', Dep.app.get('port'));
});

module.exports = {
  app: Dep.app,
  server: server,
  puerto: Dep.app.get('port'),
  direccionIP: Dep.app.get('address')
}