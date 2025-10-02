const fs = require('fs').promises;
const path = require('path');

// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

async function deleteLogs(dir = __dirname){
    const dirPath = path.join(dir, "logs");
    try {    
        

        await fs.access(dirPath);

        const files = await fs.readdir(dirPath)

        for (const file of files){
            const filePath = path.join(dirPath, file);
            const stat = await fs.stat(filePath);
            
            if (stat.isFile()){
                console.log("Delete files...", file);
                await fs.unlink(filePath);
            }
        }

        // await delay(2000); // delay before removing directory
        await fs.rmdir(dirPath, { force: true, maxRetries: 5, retryDelay: 200});
        console.log("Logs Directory removed.");
        
    } catch (err){
        if (err.code === "ENOENT"){
            console.log("No logs directory found.")
        } else{
            throw err;
        }
    }

}

async function createLogs(dir = __dirname){
    const dirPath = path.join(dir, "logs");
    try{

        await fs.mkdir( dirPath, { recursive: true });
        console.log("Logs directory checked and created!");

        for(let i = 1; i < 11; i++){
            const fileName = `log${i}.txt`;
            const filePath = path.join(dirPath, fileName);
            const text = `Testing file created. This is log file ${i}.`;

            await fs.writeFile(filePath, text);
            console.log(`File ${fileName} created successfully`);
        }

    } catch (err){
        throw err;
    }
}

(async () => {
    await createLogs();
    await deleteLogs();
})();
