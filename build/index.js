"use strict";
const App = require('./app.ts');
const PORT = process.env.PORT || 3000;
let serverStarted = false;
if (!serverStarted) {
    App.listen(PORT, () => {
        console.log(`listening on port: ${PORT}`);
    });
    serverStarted = true;
}
