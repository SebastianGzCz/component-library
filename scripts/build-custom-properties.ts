const { writeFile } = require('fs');
const { tokens } = require('../tokens.ts');

function transformTokens(parentKey, object) {
    const objectKeys = Object.keys(object);

    return objectKeys.reduce((tokensTransformed, objectKey) => {
        const value = object[objectKey];
        if (typeof value === 'object') {
            const customProperty = parentKey
                ? `${parentKey}-${objectKey}`
                : `${objectKey}`;

            return `
            ${tokensTransformed}
            ${transformTokens(`${customProperty}`, value)}
            `;
        }
        if (objectKey === 'value') {
            return `
            ${tokensTransformed}    
            $${parentKey}: ${value};
        `;
        }
        return `${tokensTransformed}`;
    }, '');
}

function buildCustomProperties() {
    const tokensKeys = Object.keys(tokens);

    tokensKeys.forEach((value) => {
        const tokensStr = transformTokens(null, tokens[value]);

        const data = tokensStr;

        writeFile(`./tokens/${value}.scss`, data, 'utf8', (error) => {
            if (error) throw error;
            console.log('The file has been created!');
        });
    });
}

buildCustomProperties();
