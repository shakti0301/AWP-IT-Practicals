const fs = require("fs");
const fileName = "example.txt";

fs.writeFile(fileName, "This is a test file.", (err) => {
    if (err) {
        console.error("Error creating file:", err);
        return;
    }
    console.log("File created successfully.");

    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("File content:", data);

        fs.appendFile(fileName, "\nThis is additional content.", (err) => {
            if (err) {
                console.error("Error appending to file:", err);
                return;
            }
            console.log("Data appended successfully.");

            fs.readFile(fileName, "utf8", (err, updatedData) => {
                if (err) {
                    console.error("Error reading file after appending:", err);
                    return;
                }
                console.log("Updated file content:\n", updatedData);

                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.error("Error deleting file:", err);
                        return;
                    }
                    console.log("File deleted successfully.");
                });
            });
        });
    });
});
