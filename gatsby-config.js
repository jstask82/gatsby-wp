module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress Starter`,
    description: `Kick off your next, great Gatsby project with this WordPress starter.`,
    author: `Aaron Kessler`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Headless Wordpress`,
        short_name: `gatsby_headless_wp`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: "src/images/cropped-favicon.png",
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        minimizeDeprecationNotice: true,
        baseUrl: process.env.API_URL,
        protocol: process.env.API_PROTOCOL,
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: true,
        acfOptionPageIds: [],
        // auth: {
        //   // If auth.user and auth.pass are filled, then the source plugin will be allowed
        //   // to access endpoints that are protected with .htaccess.
        //   htaccess_user: "your-htaccess-username",
        //   htaccess_pass: "your-htaccess-password",
        //   htaccess_sendImmediately: false,

        // // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
        // // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in WordPress wp-api.
        // // plugin, you can specify user and password to obtain access token and use authenticated requests against WordPress REST API.
        // jwt_user: process.env.JWT_USER,
        // jwt_pass: process.env.JWT_PASSWORD,
        // jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        // }
        cookies: {},
        verboseOutput: false,
        perPage: 100,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://source-url.com",
        //   replacementUrl: "https://replacement-url.com",
        // },
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/menus",
          "**/portfolio",
          "**/favicon",
          "**/logo",
        ],
        excludedRoutes: [],
        keepMediaSizes: false,
      },
    },
  ],
}
