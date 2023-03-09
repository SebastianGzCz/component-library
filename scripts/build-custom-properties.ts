const { writeFile } = require('fs');
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
        const filename = `./tokens/${tokenName}.scss`;

        writeFile(filename, transformedTokens, 'utf8', (error) => {
            if (error) throw error;
            console.log(`The file ${filename} has been created!`);

            // Agrega los archivos creados al repositorio
            const { exec } = require('child_process');
            exec('git add tokens/*', (error, stdout, stderr) => {
                if (error) {
                    console.log(`Error al agregar los archivos: ${error}`);
                    return;
                }
                console.log(`Archivos agregados: ${stdout}`);
            });

            // Confirma los cambios en el repositorio
            exec(
                'git config --global user.email sebastian.gc@globant.com',
                (error, stdout, stderr) => {
                    if (error) {
                        console.log(`Error al confirmar los cambios: ${error}`);
                        return;
                    }
                    console.log(`Correo: ${stdout}`);
                }
            );
            // Confirma los cambios en el repositorio
            exec(
                'git config --global user.name sebastianGzCz',
                (error, stdout, stderr) => {
                    if (error) {
                        console.log(`Error al confirmar los cambios: ${error}`);
                        return;
                    }
                    console.log(`Usuario: ${stdout}`);
                }
            );
            exec(
                'git commit -m "Agrega archivos generados por build-custom-properties"',
                (error, stdout, stderr) => {
                    if (error) {
                        console.log(`Error al confirmar los cambios: ${error}`);
                        return;
                    }
                    console.log(`Cambios confirmados: ${stdout}`);
                }
            );

            // Empuja los cambios al repositorio
            exec('git push', (error, stdout, stderr) => {
                if (error) {
                    console.log(`Error al empujar los cambios: ${error}`);
                    return;
                }
                console.log(`Cambios empujados: ${stdout}`);
            });
        });
    });
}

buildCustomProperties();
