"use strict";

var path = require("path");

var _require = require("./src/utils/siteConfig"),
    postsPerPage = _require.postsPerPage;

var _require2 = require("gatsby-awesome-pagination"),
    paginate = _require2.paginate;
/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */


exports.createPages = function _callee(_ref) {
  var graphql, actions, createPage, result, tags, authors, pages, posts, indexTemplate, tagsTemplate, authorTemplate, pageTemplate, postTemplate;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          graphql = _ref.graphql, actions = _ref.actions;
          createPage = actions.createPage;
          _context.next = 4;
          return regeneratorRuntime.awrap(graphql("\n        {\n            allGhostPost(sort: { order: ASC, fields: published_at }) {\n                edges {\n                    node {\n                        slug\n                    }\n                }\n            }\n            allGhostTag(sort: { order: ASC, fields: name }) {\n                edges {\n                    node {\n                        slug\n                        url\n                        postCount\n                    }\n                }\n            }\n            allGhostAuthor(sort: { order: ASC, fields: name }) {\n                edges {\n                    node {\n                        slug\n                        url\n                        postCount\n                    }\n                }\n            }\n            allGhostPage(sort: { order: ASC, fields: published_at }) {\n                edges {\n                    node {\n                        slug\n                        url\n                    }\n                }\n            }\n        }\n    "));

        case 4:
          result = _context.sent;

          if (!result.errors) {
            _context.next = 7;
            break;
          }

          throw new Error(result.errors);

        case 7:
          // Extract query results
          tags = result.data.allGhostTag.edges;
          authors = result.data.allGhostAuthor.edges;
          pages = result.data.allGhostPage.edges;
          posts = result.data.allGhostPost.edges; // Load templates

          indexTemplate = path.resolve("./src/templates/index.js");
          tagsTemplate = path.resolve("./src/templates/tag.js");
          authorTemplate = path.resolve("./src/templates/author.js");
          pageTemplate = path.resolve("./src/templates/page.js");
          postTemplate = path.resolve("./src/templates/post.js"); // Create tag pages

          tags.forEach(function (_ref2) {
            var node = _ref2.node;
            var totalPosts = node.postCount !== null ? node.postCount : 0;
            var numberOfPages = Math.ceil(totalPosts / postsPerPage); // This part here defines, that our tag pages will use
            // a `/tag/:slug/` permalink.

            node.url = "/tag/".concat(node.slug, "/");
            Array.from({
              length: numberOfPages
            }).forEach(function (_, i) {
              var currentPage = i + 1;
              var prevPageNumber = currentPage <= 1 ? null : currentPage - 1;
              var nextPageNumber = currentPage + 1 > numberOfPages ? null : currentPage + 1;
              var previousPagePath = prevPageNumber ? prevPageNumber === 1 ? node.url : "".concat(node.url, "page/").concat(prevPageNumber, "/") : null;
              var nextPagePath = nextPageNumber ? "".concat(node.url, "page/").concat(nextPageNumber, "/") : null;
              createPage({
                path: i === 0 ? node.url : "".concat(node.url, "page/").concat(i + 1, "/"),
                component: tagsTemplate,
                context: {
                  // Data passed to context is available
                  // in page queries as GraphQL variables.
                  slug: node.slug,
                  limit: postsPerPage,
                  skip: i * postsPerPage,
                  numberOfPages: numberOfPages,
                  humanPageNumber: currentPage,
                  prevPageNumber: prevPageNumber,
                  nextPageNumber: nextPageNumber,
                  previousPagePath: previousPagePath,
                  nextPagePath: nextPagePath
                }
              });
            });
          }); // Create author pages

          authors.forEach(function (_ref3) {
            var node = _ref3.node;
            var totalPosts = node.postCount !== null ? node.postCount : 0;
            var numberOfPages = Math.ceil(totalPosts / postsPerPage); // This part here defines, that our author pages will use
            // a `/author/:slug/` permalink.

            node.url = "/author/".concat(node.slug, "/");
            Array.from({
              length: numberOfPages
            }).forEach(function (_, i) {
              var currentPage = i + 1;
              var prevPageNumber = currentPage <= 1 ? null : currentPage - 1;
              var nextPageNumber = currentPage + 1 > numberOfPages ? null : currentPage + 1;
              var previousPagePath = prevPageNumber ? prevPageNumber === 1 ? node.url : "".concat(node.url, "page/").concat(prevPageNumber, "/") : null;
              var nextPagePath = nextPageNumber ? "".concat(node.url, "page/").concat(nextPageNumber, "/") : null;
              createPage({
                path: i === 0 ? node.url : "".concat(node.url, "page/").concat(i + 1, "/"),
                component: authorTemplate,
                context: {
                  // Data passed to context is available
                  // in page queries as GraphQL variables.
                  slug: node.slug,
                  limit: postsPerPage,
                  skip: i * postsPerPage,
                  numberOfPages: numberOfPages,
                  humanPageNumber: currentPage,
                  prevPageNumber: prevPageNumber,
                  nextPageNumber: nextPageNumber,
                  previousPagePath: previousPagePath,
                  nextPagePath: nextPagePath
                }
              });
            });
          }); // Create pages

          pages.forEach(function (_ref4) {
            var node = _ref4.node;
            // This part here defines, that our pages will use
            // a `/:slug/` permalink.
            node.url = "/".concat(node.slug, "/");
            createPage({
              path: node.url,
              component: pageTemplate,
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug
              }
            });
          }); // Create post pages

          posts.forEach(function (_ref5) {
            var node = _ref5.node;
            // This part here defines, that our posts will use
            // a `/:slug/` permalink.
            node.url = "/".concat(node.slug, "/");
            createPage({
              path: node.url,
              component: postTemplate,
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                slug: node.slug
              }
            });
          }); // Create pagination

          paginate({
            createPage: createPage,
            items: posts,
            itemsPerPage: postsPerPage,
            component: indexTemplate,
            pathPrefix: function pathPrefix(_ref6) {
              var pageNumber = _ref6.pageNumber;

              if (pageNumber === 0) {
                return "/";
              } else {
                return "/page";
              }
            }
          });

        case 21:
        case "end":
          return _context.stop();
      }
    }
  });
};