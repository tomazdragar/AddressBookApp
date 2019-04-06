const path = require('path')
const tsImportPluginFactory = require('ts-import-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const config = {
    mode: 'development',
    entry: [
        './src/app.tsx'
    ],
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].css'
        }),
    ],
    module: {
        rules: []
    }
}

// JavaScript
// ------------------------------------
config.module.rules.push({
    test: /\.(jsx|tsx|js|ts)$/,
    loader: 'ts-loader',
    options: {
        transpileOnly: true,
        getCustomTransformers: () => ({
            before: [ tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'lib',
                style: true
            })]
        }),
        compilerOptions: {
            module: 'es2015'
        }
    },
    exclude: /node_modules/
})

// CSS
// ------------------------------------
config.module.rules.push({
    test: /\.(css|sass|scss)$/,
    use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                sourceMap: true,
            },
        },
        {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            },
        }
    ]
})

config.module.rules.push({
    test: /\.(less)$/,
    use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                sourceMap: true
            },
        },
        {
            loader: 'less-loader',
            options: {
                sourceMap: true,
                javascriptEnabled: true
                //modifyVars: antThemeVariables
            }
        }
    ]
});

// Fonts, images
// ------------------------------------------------------------------------
const fonts = [
    ['woff', 'application/font-woff'],
    ['woff2', 'application/font-woff2'],
    ['otf', 'font/opentype'],
    ['ttf', 'application/octet-stream'],
    ['eot', 'application/vnd.ms-fontobject'],
    ['svg', 'image/svg+xml']
];

fonts.forEach((font) => {
    const extension = font[0]
    const mimetype = font[1]

    config.module.rules.push({
        test: new RegExp(`\\.${extension}$`),
        loader: 'file-loader',
        options: {
            name: 'styles/fonts/[name].[ext]',
            limit: 10000,
            mimetype,
        },
    })
});

config.module.rules.push({
    test: /\.(png|jpg|gif)$/,
    loader: 'url-loader',
    options: {
        limit: 8192 // in bytes
    }
});

config.resolve = {
    extensions: [ '.tsx', '.ts', '.jsx', '.js' ]
},

module.exports = config