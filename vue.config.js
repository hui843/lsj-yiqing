module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"http://127.0.0.1:3000",
                changeOrigin:true,
                ws:false,
                // cookieDomainRewrite:{
                //     "*":"127.0.0.1"
                // }
            }

        }
    }
};