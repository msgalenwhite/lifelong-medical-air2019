module.exports = ({basePath, wordPressUrl}) => ({
    plugins: [
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: 'LifeLongWordPress',
                fieldName: 'lifeLongWordPress',
                url: `${wordPressUrl}/graphql`
            }
        }
    ]
})