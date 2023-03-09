const { writeFile } = require('fs');
// const { tokens } = require('../tokens.ts');
const file = require('../tokens.json');

function transformTokens(parentKey, object) {
    let tokensTransformed = '';

    for (const [key, value] of Object.entries(object)) {
        if (typeof value === 'object') {
            const customProperty = parentKey ? `${parentKey}-${key}` : key;
            tokensTransformed += `\n${transformTokens(customProperty, value)}`;
        } else if (key === 'value') {
            const variableName = `$${parentKey}`;
            tokensTransformed += `${variableName}: ${value};`;
        }
    }

    return tokensTransformed;
}

function buildCustomProperties() {
    const tokens = file['global'];
    const tokenNames = Object.keys(tokens);

    tokenNames.forEach((tokenName) => {
        const tokenValue = tokens[tokenName];
        const transformedTokens = transformTokens(null, tokenValue).trim();
        
        const filename = `/home/runner/work/component-library/component-library/tokens/${tokenName}.scss`;
        writeFile(filename, transformedTokens, 'utf8', (error) => {
            if (error) throw error;
            console.log(`The file ${filename} has been created!`);
        });
    });
}

buildCustomProperties();
