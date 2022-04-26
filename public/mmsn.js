import swal2  from 'https://cdn.jsdelivr.net/npm/sweetalert2@11';

const NAMESPACE = 'test'

function mmsn_log(NAMESPACE,description,msg){
    var ok_log = console.log(`${NAMESPACE}: ${description}`, msg)
    return ok_log
}
