function valiRegistro()
            {
                nom= document.getElementById('nombre').value;
                apellidop= document.getElementById('apellidop').value;
                apellidom= document.getElementById('apellidom').value;
                rut= document.getElementById('rut').value;
                fono= document.getElementById('fono').value;
                email= document.getElementById('email').value;
                confemail= document.getElementById('confemail').value;
                pass = document.getElementById('pass').value;
                confpass = document.getElementById('confpass').value; 
                genero = document.getElementById('genero').value; 

                if(nom == null || nom.length==0 || /^\s+$/.test(nom))
                {
                    alert('Debe escribir su(s) nombre(s)');
                    document.getElementById('nombre').value="";
                    document.datos.nom.focus();
                    return false;
                }
                if(apellidop == null || apellidop.length==0 || /^\s+$/.test(apellidop))
                {
                    alert('Debe escribir su apellido paterno');
                    document.getElementById('apellidop').value="";
                    document.datos.apellidop.focus();
                    return false;
                }
                if(apellidom == null || apellidom.length==0 || /^\s+$/.test(apellidom))
                {
                    alert('Debe escribir su apellido materno');
                    document.getElementById('apellidom').value="";
                    document.datos.apellidom.focus();
                    return false;
                }
                if(rut == null || rut.length==0 || /^\s+$/.test(rut))
                {
                    alert('Debe escribir su RUT');
                    document.getElementById('rut').value="";
                    document.datos.rut.focus();
                    return false;
                }
                if(!(/^\d{9}$/.test(fono)) )
                 {
                    alert('Debe ingresar un teléfono válido');
                    document.getElementById('fono').value="";
                    document.datos.fono.focus();
                    return false;
                }
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email))
                {
                    alert("La dirección de email " + email + " es correcta.");
                   } 
                else {
                    alert("La dirección de email es incorrecta.");
                    return false;
                }
                if(confemail == null || confemail.length==0 || /^\s+$/.test(confemail))
                {
                    alert('Debe confirmar su email');
                    document.getElementById('confemail').value="";
                    document.datos.confemail.focus();
                    return false;
                }
                if(pass == null || pass.length==0 || /^\s+$/.test(pass))
                {
                    alert('Debe escribir su contraseña');
                    document.getElementById('pass').value="";
                    document.datos.pass.focus();
                    return false;
                }
                if(confpass == null || confpass.length==0 || /^\s+$/.test(confpass))
                {
                    alert('Debe confirmar su contraseña');
                    document.getElementById('confpass').value="";
                    document.datos.confpass.focus();
                    return false;
                }
               
                if (genero == null || genero == 0)
                {
                    alert('Seleccione género');
                    document.datos.genero.focus();
                    return false;
                }
                if (confemail!=email)
                {
                    alert('Error. Confirmación de email incorrecta');
                    document.datos.confemail.focus();
                    return false;

                }
                if (pass!=confpass)
                {
                    alert('Error. Las contraseñas deben ser las mismas');
                    document.datos.confpass.focus();
                    return false;

                }
               
                return true;      

                
            }