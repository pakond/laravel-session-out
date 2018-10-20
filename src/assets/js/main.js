import axios from 'axios';

function chkAuth(){
    if( parseInt(window.sessionout.authStatus) === 1){
        
        axios.post(`${window.sessionout.authpingEndpoint}`, {
            pinguser: 1,
        })
            .then(function (response) {
                if (parseInt(response.data.auth) === 0){
                    // show modal
                    document.getElementById("modal-devsrv").style.visibility = "visible";

                    // no need for further check
                    window.sessionout.authStatus = 0;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

(function(){
    // check every minute if not logged out already
    setInterval(chkAuth, 10000);
})();
