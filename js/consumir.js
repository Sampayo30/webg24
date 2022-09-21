const urlApex="https://gedc07c6509dfcc-dbgprueba24.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client"

function peticionGet(){
    $.ajax({
        url:urlApex,
        type:'GET',
        dataType: 'json',
        success: function(data){
            let numreg = data.count
            let productos = data.items
            console.log(numreg)
            console.log(productos)
            console.log("*********");
            for(i=0; i < numreg; i++){
                console.log("producto" + (i + 1))
                console.log("codigo"   + productos[i].codprod)
                console.log("nombre"   + productos[i].nomprod)
                console.log("precio"   + productos[i].precio)
                console.log("inventario"   + productos[i].inventario)
            }
        },
        error: function(){

        },
        complete: function(){

        }

    });
}

peticionGet()