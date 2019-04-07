/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  loaders.setWebpackConfig({
    module: {
      rules: [
        {
		  test: /\.css$/,
		  loader: 'style-loader!css-loader',
		  include: /flexboxgrid/
		},
      ],
    }
  })
}