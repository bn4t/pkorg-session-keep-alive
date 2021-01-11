console.log('started pkorg-session-keep-alive (https://github.com/bn4t/pkorg-session-keep-alive)')

setInterval(function() {
  fetch(window.location.protocol+'//'+window.location.hostname+'/ping')
  .then(response => {
    if (response.ok) {
      let today = new Date();
      today.setHours(today.getHours()+3)
      localStorage.setItem('idle.timeout', today.toISOString())
    }
  })
  .catch(error => {
        console.log('error sending ping request: '+error)
  });
}, 10 * 60 * 1000) // 10 minutes
