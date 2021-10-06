const puppeteer = require("puppeteer");
const path = require('path');
const fs = require('fs');

/**
 * This script generate cv as pdf in different languages
 * Arguments: <base_url> <download_folder>
 */
const SUPPORTED_LANGUAGES = ["en", "it"]

async function main(baseUrl, downloadFolder) {
    let browser = await puppeteer.launch({
        headless: true
    });

    let webpage = await browser.newPage();

    for (const language of SUPPORTED_LANGUAGES) {
        await savePdf(webpage, baseUrl, language, downloadFolder);
    }

    await browser.close();
}

async function savePdf(webpage, baseUrl, language, download_folder) {
    let targetPath = path.join(download_folder, `andreapetreti-${language}.pdf`);
    
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });

    await webpage.goto(`${baseUrl}/${language}/`, {
        waitUntil: "networkidle0"
    });

    await webpage.pdf({
        path: targetPath,
        format: 'a3'
    })
}

let arguments = process.argv.slice(2);
if (arguments.length < 2) {
    console.log("usage node generate.js <base_url> <download_folder>");
    return -1;
}

main(
    arguments[0],
    arguments[1]
);