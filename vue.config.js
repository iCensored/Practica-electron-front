module.exports = {
  devServer: {

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    proxy: {
      "/api":{
        target: "http://localhost:8081",
        changeOrigin: true
      }
    }
  }
}