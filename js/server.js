module.exports = function(app) {

  var server = app.listen(8080, function (){
  
    var host = server.address().address
    var port = server.address().port

    console.log('app listening at http://%s:%s', host, port)

  })
}