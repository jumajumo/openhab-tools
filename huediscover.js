const https = require('http');

https.get('http://192.168.1.90/api/PqQ9duvMSqPCrxu0nvBCTa-XZRSCQz-Ww8vHXGJ5', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        var config = JSON.parse(data);

        // console.log("======================================");
        // console.log("items")
        // console.log("======================================");

        // Object.entries(config.lights).forEach((entry) => {
        //     const [key, value] = entry;
        //     console.log(`${key}: ` + value.name);
        // });

        console.log("======================================");
        console.log("groups")
        console.log("======================================");

        Object.entries(config.groups).forEach((entry) => {
            const [key, value] = entry;
            console.log(`${key}: ` + value.name);

            value.lights.forEach(function(lightid) {
                var light = config.lights[lightid];
                console.log("\t" + lightid + ": " + light.name + "\t" + light.modelid + "\t" + light.type);
            });
        });
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});