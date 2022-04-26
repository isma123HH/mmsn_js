import swal2  from 'https://cdn.jsdelivr.net/npm/sweetalert2@11';


function mmsn(){
    const NAMESPACE = 'test'
    this.log = function(description,msg){
        var ok_log = console.log(`${NAMESPACE}: ${description}`, msg)
        return ok_log
    }
}
