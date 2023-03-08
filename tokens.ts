const tokens = {
    dimension: {
        scale: {
            value: '2',
            type: 'dimension'
        },
        xs: {
            value: '4',
            type: 'dimension'
        }
    },
    spacing: {
        xs: {
            value: '{dimension.xs}',
            type: 'spacing'
        },
        sm: {
            value: '{dimension.sm}',
            type: 'spacing'
        },
        md: {
            value: '{dimension.md}',
            type: 'spacing'
        },
        lg: {
            value: '{dimension.lg}',
            type: 'spacing'
        },
        xl: {
            value: '{dimension.xl}',
            type: 'spacing'
        },
        'multi-value': {
            value: '{dimension.sm} {dimension.xl}',
            type: 'spacing',
            description:
                'You can have multiple values in a single spacing token. Read more on these: https://docs.tokens.studio/available-tokens/spacing-tokens#multi-value-spacing-tokens'
        }
    },
    borderRadius: {
        sm: {
            value: '4',
            type: 'borderRadius'
        },
        lg: {
            value: '8',
            type: 'borderRadius'
        },
        xl: {
            value: '16',
            type: 'borderRadius'
        },
        'multi-value': {
            value: '{borderRadius.sm} {borderRadius.lg}',
            type: 'borderRadius',
            description:
                'You can have multiple values in a single radius token. Read more on these: https://docs.tokens.studio/available-tokens/border-radius-tokens#single--multiple-values'
        }
    },
    colors: {
        black: {
            value: '#000000',
            type: 'color'
        },
        white: {
            value: '#ffffff',
            type: 'color'
        },
        gray: {
            '100': {
                value: '#f7fafc',
                type: 'color'
            },
            '200': {
                value: '#edf2f7',
                type: 'color'
            },
            '300': {
                value: '#e2e8f0',
                type: 'color'
            },
            '400': {
                value: '#cbd5e0',
                type: 'color'
            },
            '500': {
                value: '#a0aec0',
                type: 'color'
            },
            '600': {
                value: '#718096',
                type: 'color'
            },
            '700': {
                value: '#4a5568',
                type: 'color'
            },
            '800': {
                value: '#2d3748',
                type: 'color'
            },
            '900': {
                value: '#1a202c',
                type: 'color'
            }
        },
        red: {
            '100': {
                value: '#fff5f5',
                type: 'color'
            },
            '200': {
                value: '#fed7d7',
                type: 'color'
            },
            '300': {
                value: '#feb2b2',
                type: 'color'
            },
            '400': {
                value: '#fc8181',
                type: 'color'
            },
            '500': {
                value: '#f56565',
                type: 'color'
            },
            '600': {
                value: '#e53e3e',
                type: 'color'
            },
            '700': {
                value: '#c53030',
                type: 'color'
            },
            '800': {
                value: '#9b2c2c',
                type: 'color'
            },
            '900': {
                value: '#742a2a',
                type: 'color'
            }
        },
        orange: {
            '100': {
                value: '#fffaf0',
                type: 'color'
            },
            '200': {
                value: '#feebc8',
                type: 'color'
            },
            '300': {
                value: '#fbd38d',
                type: 'color'
            },
            '400': {
                value: '#f6ad55',
                type: 'color'
            },
            '500': {
                value: '#ed8936',
                type: 'color'
            },
            '600': {
                value: '#dd6b20',
                type: 'color'
            },
            '700': {
                value: '#c05621',
                type: 'color'
            },
            '800': {
                value: '#9c4221',
                type: 'color'
            },
            '900': {
                value: '#7b341e',
                type: 'color'
            }
        },
        yellow: {
            '100': {
                value: '#fffff0',
                type: 'color'
            },
            '200': {
                value: '#fefcbf',
                type: 'color'
            },
            '300': {
                value: '#faf089',
                type: 'color'
            },
            '400': {
                value: '#f6e05e',
                type: 'color'
            },
            '500': {
                value: '#ecc94b',
                type: 'color'
            },
            '600': {
                value: '#d69e2e',
                type: 'color'
            },
            '700': {
                value: '#b7791f',
                type: 'color'
            },
            '800': {
                value: '#975a16',
                type: 'color'
            },
            '900': {
                value: '#744210',
                type: 'color'
            }
        },
        green: {
            '100': {
                value: '#f0fff4',
                type: 'color'
            },
            '200': {
                value: '#c6f6d5',
                type: 'color'
            },
            '300': {
                value: '#9ae6b4',
                type: 'color'
            },
            '400': {
                value: '#68d391',
                type: 'color'
            },
            '500': {
                value: '#48bb78',
                type: 'color'
            },
            '600': {
                value: '#38a169',
                type: 'color'
            },
            '700': {
                value: '#2f855a',
                type: 'color'
            },
            '800': {
                value: '#276749',
                type: 'color'
            },
            '900': {
                value: '#22543d',
                type: 'color'
            }
        },
        teal: {
            '100': {
                value: '#e6fffa',
                type: 'color'
            },
            '200': {
                value: '#b2f5ea',
                type: 'color'
            },
            '300': {
                value: '#81e6d9',
                type: 'color'
            },
            '400': {
                value: '#4fd1c5',
                type: 'color'
            },
            '500': {
                value: '#38b2ac',
                type: 'color'
            },
            '600': {
                value: '#319795',
                type: 'color'
            },
            '700': {
                value: '#2c7a7b',
                type: 'color'
            },
            '800': {
                value: '#285e61',
                type: 'color'
            },
            '900': {
                value: '#234e52',
                type: 'color'
            }
        },
        blue: {
            '100': {
                value: '#ebf8ff',
                type: 'color'
            },
            '200': {
                value: '#bee3f8',
                type: 'color'
            },
            '300': {
                value: '#90cdf4',
                type: 'color'
            },
            '400': {
                value: '#63b3ed',
                type: 'color'
            },
            '500': {
                value: '#4299e1',
                type: 'color'
            },
            '600': {
                value: '#3182ce',
                type: 'color'
            },
            '700': {
                value: '#2b6cb0',
                type: 'color'
            },
            '800': {
                value: '#2c5282',
                type: 'color'
            },
            '900': {
                value: '#2a4365',
                type: 'color'
            }
        },
        indigo: {
            '100': {
                value: '#ebf4ff',
                type: 'color'
            },
            '200': {
                value: '#c3dafe',
                type: 'color'
            },
            '300': {
                value: '#a3bffa',
                type: 'color'
            },
            '400': {
                value: '#7f9cf5',
                type: 'color'
            },
            '500': {
                value: '#667eea',
                type: 'color'
            },
            '600': {
                value: '#5a67d8',
                type: 'color'
            },
            '700': {
                value: '#4c51bf',
                type: 'color'
            },
            '800': {
                value: '#434190',
                type: 'color'
            },
            '900': {
                value: '#3c366b',
                type: 'color'
            }
        },
        purple: {
            '100': {
                value: '#faf5ff',
                type: 'color'
            },
            '200': {
                value: '#e9d8fd',
                type: 'color'
            },
            '300': {
                value: '#d6bcfa',
                type: 'color'
            },
            '400': {
                value: '#b794f4',
                type: 'color'
            },
            '500': {
                value: '#9f7aea',
                type: 'color'
            },
            '600': {
                value: '#805ad5',
                type: 'color'
            },
            '700': {
                value: '#6b46c1',
                type: 'color'
            },
            '800': {
                value: '#553c9a',
                type: 'color'
            },
            '900': {
                value: '#44337a',
                type: 'color'
            }
        },
        pink: {
            '100': {
                value: '#fff5f7',
                type: 'color'
            },
            '200': {
                value: '#fed7e2',
                type: 'color'
            },
            '300': {
                value: '#fbb6ce',
                type: 'color'
            },
            '400': {
                value: '#f687b3',
                type: 'color'
            },
            '500': {
                value: '#ed64a6',
                type: 'color'
            },
            '600': {
                value: '#d53f8c',
                type: 'color'
            },
            '700': {
                value: '#b83280',
                type: 'color'
            },
            '800': {
                value: '#97266d',
                type: 'color'
            },
            '900': {
                value: '#702459',
                type: 'color'
            }
        }
    },
    opacity: {
        low: {
            value: '10%',
            type: 'opacity'
        },
        md: {
            value: '50%',
            type: 'opacity'
        },
        high: {
            value: '90%',
            type: 'opacity'
        }
    },
    fontFamilies: {
        heading: {
            value: 'Inter',
            type: 'fontFamilies'
        },
        body: {
            value: 'Roboto',
            type: 'fontFamilies'
        }
    },
    lineHeights: {
        heading: {
            value: '110%',
            type: 'lineHeights'
        },
        body: {
            value: '140%',
            type: 'lineHeights'
        }
    },
    letterSpacing: {
        default: {
            value: '0',
            type: 'letterSpacing'
        },
        increased: {
            value: '150%',
            type: 'letterSpacing'
        },
        decreased: {
            value: '-5%',
            type: 'letterSpacing'
        }
    },
    paragraphSpacing: {
        h1: {
            value: '32',
            type: 'paragraphSpacing'
        },
        h2: {
            value: '26',
            type: 'paragraphSpacing'
        }
    },
    fontWeights: {
        headingRegular: {
            value: 'Regular',
            type: 'fontWeights'
        },
        headingBold: {
            value: 'Bold',
            type: 'fontWeights'
        },
        bodyRegular: {
            value: 'Regular',
            type: 'fontWeights'
        },
        bodyBold: {
            value: 'Bold',
            type: 'fontWeights'
        }
    },
    fontSizes: {
        h1: {
            value: '{fontSizes.h2} * 1.25',
            type: 'fontSizes'
        },
        h2: {
            value: '{fontSizes.h3} * 1.25',
            type: 'fontSizes'
        },
        h3: {
            value: '{fontSizes.h4} * 1.25',
            type: 'fontSizes'
        },
        h4: {
            value: '{fontSizes.h5} * 1.25',
            type: 'fontSizes'
        },
        h5: {
            value: '{fontSizes.h6} * 1.25',
            type: 'fontSizes'
        },
        h6: {
            value: '{fontSizes.body} * 1',
            type: 'fontSizes'
        },
        body: {
            value: '16',
            type: 'fontSizes'
        },
        sm: {
            value: '{fontSizes.body} * 0.85',
            type: 'fontSizes'
        },
        xs: {
            value: '{fontSizes.body} * 0.65',
            type: 'fontSizes'
        }
    }
};

module.exports = { tokens };
