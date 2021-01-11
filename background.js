setInterval(function() {
  fetch(window.location.protocol+'//'+window.location.hostname+'/ping')
  .then(response => {
    if (response.ok) {
      let today = new Date();
      today.setDate(today.getDate()+1)
      let dateTime = today.getFullYear()+'-'+(today.getMonth()+2)+'-'+today.getDate()+' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      localStorage.setItem('idle.timeout', today.toISOString())
    }
  })
  .catch(error => {
        console.log('error sending ping request: '+error)
  });
}, 60 * 1000) // 1 minute